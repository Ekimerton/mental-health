import os
import requests
import json

# you are going to have to run source azure_env.sh

key_var_name = 'TEXT_ANALYTICS_SUBSCRIPTION_KEY'
if not key_var_name in os.environ:
    raise Exception('Please set/export the environment variable: '.format(key_var_name))
subscription_key = os.environ[key_var_name]

endpoint_var_name = 'TEXT_ANALYTICS_ENDPOINT'
if not endpoint_var_name in os.environ:
    raise Exception('Please set/export the environment variable: '.format(endpoint_var_name))
endpoint = os.environ[endpoint_var_name]

def get_document(post):
    data = {
        "documents": [{
            "id": "1", "language": "en",
            "text": post
        }]
    }
    return data

def get_sentiment_score(document):
    headers = {
        "Ocp-Apim-Subscription-Key": subscription_key,
        "Content-Type": "application/json"
    }
    response = requests.post(endpoint, headers=headers, json=document)

    sentiments = json.loads(response.text)
    print(sentiments["documents"][0]["score"])

# get_sentiment_score(get_document("i'm really happy"))
