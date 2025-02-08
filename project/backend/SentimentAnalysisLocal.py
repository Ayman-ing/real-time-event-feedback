import json
import pandas as pd
import torch
from transformers import pipeline
import seaborn as sns
import matplotlib.pyplot as plt

# Load sentiment analysis pipeline
pipe = pipeline("sentiment-analysis", model="distilbert-base-uncased-finetuned-sst-2-english")

def analyze_sentiment(feedback_list):
    """Analyzes sentiment of feedback list and assigns Neutral for mid-range scores."""
    results = pipe(feedback_list)

    df = pd.DataFrame({
        'Feedback': feedback_list,
        'Sentiment': [r['label'] for r in results],
        'Score': [r['score'] for r in results]
    })

    # Define neutral threshold
    df['Sentiment'] = df.apply(lambda row: "NEUTRAL" if row['Score'] < 0.992 else row['Sentiment'], axis=1)

    return df

def process_json(file_path):
    """Reads JSON file and processes sentiment analysis."""
    with open(file_path, "r", encoding="utf-8") as file:
        json_data = json.load(file)

    feedback_list = [entry["Evaluation"] for entry in json_data if "Evaluation" in entry]

    if not feedback_list:
        print("⚠️ No valid 'Evaluation' entries found in JSON.")
        return pd.DataFrame()

    return analyze_sentiment(feedback_list)

def visualize_data(df):
    """Visualizes the sentiment distribution."""
    sentiment_counts = df['Sentiment'].value_counts()

    plt.figure(figsize=(6, 6))
    plt.pie(sentiment_counts, labels=sentiment_counts.index, autopct='%1.1f%%', colors=sns.color_palette("coolwarm", len(sentiment_counts)))
    plt.title("Sentiment Distribution")
    plt.show()

# Load JSON and process
json_file = "feedback.json"  # Replace with your file path
df_results = process_json(json_file)

# Display results and visualizations
print(df_results)
if not df_results.empty:
    visualize_data(df_results)
