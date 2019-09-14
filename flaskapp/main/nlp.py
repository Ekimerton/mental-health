from azure.cognitiveservices.language.textanalytics import TextAnalyticsClient
from msrest.authentication import CognitiveServicesCredentials

import os

key_var_name = 'TEXT_ANALYTICS_SUBSCRIPTION_KEY'
if not key_var_name in os.environ:
    raise Exception('Please set/export the environment variable: {}'.format(key_var_name))
subscription_key = os.environ[key_var_name]

endpoint_var_name = 'TEXT_ANALYTICS_ENDPOINT'
if not endpoint_var_name in os.environ:
    raise Exception('Please set/export the environment variable: {}'.format(endpoint_var_name))
endpoint = os.environ[endpoint_var_name]

credentials = CognitiveServicesCredentials(subscription_key)
print("credentials:" + str(credentials))

# choose request url and also
endpoint = "https://" + endpoint_var_name + "/text/analytics/v2.1/sentiment?showStats=true"
text_analytics = TextAnalyticsClient(endpoint=endpoint, credentials=credentials)

# sentimental analysis
documents = [
    {
        "id": "1",
        "language": "en",
        "text": "I had the best day of my life."
    }
]
response = text_analytics.sentiment(documents=documents)
for document in response.documents:
    print("Document Id: ", document.id, ", Sentiment Score: ",
          "{:.2f}".format(document.score))
