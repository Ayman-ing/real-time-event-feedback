from google import genai
import json
import re

def call_llm(api_key, prompt, model="gemini-2.0-flash"):
    """Calls the Gemini LLM."""
    try:
        client = genai.Client(api_key=api_key)
        response = client.models.generate_content(model=model, contents=prompt)
        return response.text.strip()
    except Exception as e:
        print(f"LLM Error: {e}")
        return None

def analyze_feedback(api_key, feedback_text, model="gemini-2.0-flash"):
    """Analyzes feedback to identify problems (robust version)."""

    system_prompt = """
    You are a helpful assistant designed to identify specific, actionable 
    problems from customer feedback.  You will receive customer feedback 
    enclosed in triple backticks.  Your task is to extract the *specific, 
    actionable* problems the customer experienced.  Do *not* provide 
    any commentary or analysis of the feedback itself.  Only return a 
    JSON list of strings, where each string describes a *single* problem.  
    If no problems are found, return an empty JSON list.
    """

    user_prompt = f"""
    Feedback:
    ```
    {feedback_text}
    ```
    """

    full_prompt = f"{system_prompt}\n{user_prompt}" # Combine them

    response = call_llm(api_key, full_prompt, model)

    if response is None:
        return None

    if not response or response.strip() == "":
        return []

    response = response.replace("```json", "").replace("```", "").strip()

    try:
        problems = json.loads(response)
        return problems if isinstance(problems, list) else None

    except json.JSONDecodeError:
        problems = re.split(r'\n|,', response)
        cleaned_problems = [p.strip() for p in problems if p.strip()]
        return cleaned_problems if any(cleaned_problems) else []


# Example usage (simplified):
api_key = "AIzaSyBJqpTXkVUl6kpkGDjfLpI2TbZPMKzHf_s"  # Replace with your actual key

def test(feedback):
    problems = analyze_feedback(api_key, feedback)
    if problems is None:
        print("Error analyzing feedback.")
    elif problems:
        print("Problems:", problems)
    else:
        print("No problems found.")  # Explicitly print "No problems found"




test("The service was slow, and the staff was rude. The food was cold. otherwise good job")
test("Everything was great!")
test("")
test("Problem 1\nProblem 2, Problem 3")




