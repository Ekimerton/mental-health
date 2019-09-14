from flask import Flask
from flaskapp.config import Config

app = Flask(__name__)
app.config.from_object(Config)

from flaskapp.main.routes import main
from flaskapp.errors.handlers import errors
app.register_blueprint(main)
app.register_blueprint(errors)