from flask import Flask
from flaskapp.config import Config
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'main.login'
login_manager.login_message_category = 'info'

db.init_app(app)
try:
    db.create_all()
except:
    pass
bcrypt.init_app(app)
login_manager.init_app(app)

from flaskapp.main.routes import main
from flaskapp.errors.handlers import errors
app.register_blueprint(main)
app.register_blueprint(errors)