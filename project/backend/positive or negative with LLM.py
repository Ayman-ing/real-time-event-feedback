from google import genai

def call_llm(api_key, prompt, model="gemini-2.0-flash"):
    """Calls the Gemini LLM."""
    try:
        client = genai.Client(api_key=api_key)
        response = client.models.generate_content(model=model, contents=prompt)
        return response.text.strip()
    except Exception as e:
        print(f"LLM Error: {e}")
        return None

dataset = [
    {"ID": 1, "ProfileDeParticipant": ["Student"], "Activite": ["Workshop"], "Evaluation": "i am sad and happy at the same time "},
    {"ID": 2, "ProfileDeParticipant": ["Teacher"], "Activite": ["Lecture"], "Evaluation": "Too theoretical, needs more practice."},
    {"ID": 3, "ProfileDeParticipant": ["Researcher"], "Activite": ["Panel Discussion"], "Evaluation": "Interesting perspectives shared."},
    {"ID": 4, "ProfileDeParticipant": ["Student", "Researcher"], "Activite": ["Hackathon"], "Evaluation": "Loved the teamwork!"},
    {"ID": 5, "ProfileDeParticipant": ["Professional"], "Activite": ["Networking Event"], "Evaluation": "Met great contacts!"},
    {"ID": 6, "ProfileDeParticipant": ["Student"], "Activite": ["Coding Bootcamp"], "Evaluation": "The pace was too fast."},
    {"ID": 7, "ProfileDeParticipant": ["Teacher", "Professional"], "Activite": ["Seminar"], "Evaluation": "Valuable insights on AI trends."},
    {"ID": 8, "ProfileDeParticipant": ["Entrepreneur"], "Activite": ["Startup Pitch"], "Evaluation": "Good feedback on my idea."},
    {"ID": 9, "ProfileDeParticipant": ["Teacher"], "Activite": ["Workshop"], "Evaluation": "Missing profile, but great workshop!"},
    {"ID": 10, "ProfileDeParticipant": ["Student"], "Activite": ["Coding Bootcamp"], "Evaluation": "Attended but didndidn't participate in an activity."}
]

api_key = "AIzaSyBJqpTXkVUl6kpkGDjfLpI2TbZPMKzHf_s"  # Replace with your actual API key

for item in dataset:
    evaluation = item["Evaluation"]
    prompt = f"Determine the sentiment of the following evaluation in one word: Positive, Negative, or Neutral.\n\nEvaluation: {evaluation}"
    sentiment = call_llm(api_key, prompt)

    if sentiment:
        print(f"ID: {item['ID']}, Evaluation: {evaluation}, Sentiment: {sentiment}")
    else:
        print(f"ID: {item['ID']}, Evaluation: {evaluation}, Sentiment: Could not determine")