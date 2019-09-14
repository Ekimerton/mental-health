import os

class Config:
    # App
    try:
        SECRET_KEY = os.environ['SECRET_KEY']
    except:
        SECRET_KEY = 'test'
    DEBUG = True

    # Database Stuff
    SQLALCHEMY_DATABASE_URI = 'postgres://hxbrpewbskmgym:ed704d13980acc718ebcf84f67cc18e5282c32fa2acfdaccb122e6560c9d6b87@ec2-54-221-214-3.compute-1.amazonaws.com:5432/dcp427srrstgb1'
    SQLALCHEMY_TRACK_MODIFICATIONS = False