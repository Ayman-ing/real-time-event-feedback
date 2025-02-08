import json
import pandas as pd
import torch
import asyncio
import websockets
import firebase_admin
from firebase_admin import credentials, db
from transformers import pipeline
from flask import Flask, jsonify

# Check if GPU is available
device = 0 if torch.cuda.is_available() else -1  

# Load sentiment analysis model
pipe = pipeline("sentiment-analysis", model="distilbert-base-uncased-finetuned-sst-2-english", device=device)

# Initialize Flask app
app = Flask(__name__)

# Firebase initialization (Replace with your own service account file)
cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred, {"databaseURL": "https://your-db.firebaseio.com/"})

# Global storage for results
latest_results = []

# Function to analyze sentiment
def analyze_sentiment(feedback_list):
    results = pipe(feedback_list)

    df = pd.DataFrame({
        'Feedback': feedback_list,
        'Sentiment': [r['label'] for r in results],
        'Score': [r['score'] for r in results]
    })

    # Convert Sentiment to numerical values (POSITIVE=1, NEGATIVE=0)
    df['Sentiment_Num'] = df['Sentiment'].apply(lambda x: 1 if x == 'POSITIVE' else 0)
    return df

# Function to process JSON feedback
def process_json(json_data):
    global latest_results
    feedback_list = [entry["feedback"] for entry in json_data]

    df = analyze_sentiment(feedback_list)
    latest_results = df.to_dict(orient="records")  # Store latest results
    return latest_results

# Firebase listener function
def stream_handler(event):
    if event.data:  # Ensure data exists
        print("New Firebase Data:", event.data)
        process_json(event.data)

# Attach Firebase real-time listener
ref = db.reference("/feedback")
ref.listen(stream_handler)

# WebSocket listener
async def listen_websocket():
    uri = "wss://your-websocket-endpoint"
    async with websockets.connect(uri) as websocket:
        while True:
            message = await websocket.recv()
            feedback_data = json.loads(message)
            process_json(feedback_data)

# Start WebSocket listener in the background
async def start_websocket():
    await listen_websocket()

# Flask API to retrieve results
@app.route('/results', methods=['GET'])
def get_results():
    return jsonify(latest_results)

# Start Flask server
if __name__ == "__main__":
    # Run Flask and WebSocket concurrently
    loop = asyncio.get_event_loop()
    loop.create_task(start_websocket())
    app.run(debug=True, use_reloader=False)
