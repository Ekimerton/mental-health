from flask import Flask
from flaskapp.config import Config
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
db.init_app(app)

from flaskapp.main.routes import main
from flaskapp.errors.handlers import errors
app.register_blueprint(main)
app.register_blueprint(errors)