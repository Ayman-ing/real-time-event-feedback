from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

analyzer = SentimentIntensityAnalyzer()

text = "how dare you"

scores = analyzer.polarity_scores(text)

if scores['compound'] >= 0.05:
    print("Positive")
elif scores['compound'] <= -0.05:
    print("Negative")
else:
    print("Neutral")

print(scores)