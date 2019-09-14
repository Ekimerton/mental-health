import os

class Config:
    # App
    try:
        SECRET_KEY = os.environ['SECRET_KEY']
    except:
        SECRET_KEY = 'test'
    DEBUG = True

    # Database Stuff
    SQLALCHEMY_DATABASE_URI = 'sqlite:///health.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False