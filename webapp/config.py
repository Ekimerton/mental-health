import os

class Config:
    # App
    try:
        SECRET_KEY = os.environ['SECRET_KEY']
    except:
        SECRET_KEY = 'test'
    DEBUG = True