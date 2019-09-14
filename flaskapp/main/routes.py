from flask import Blueprint, render_template, flash, redirect, url_for, request
from flask_login import login_user, current_user, logout_user, login_required
from flaskapp import db, bcrypt, login_manager
from flaskapp.main.forms import RegistrationForm, LoginForm
from flaskapp.models import User, Post

main = Blueprint("main", __name__)

@main.route('/', methods=['GET', 'POST'])
def default():
    return redirect(url_for('main.landing'))

@main.route('/home', methods=['GET', 'POST'])
def home():
    if current_user.is_authenticated:
        return render_template("home.html", curr=current_user.username)
    else:
        return render_template("home.html")

@main.route('/landing', methods=['GET', 'POST'])
def landing():
    return render_template("landing.html")

@main.route("/register", methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for("main.home"))
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_pass = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username=form.username.data, email=form.email.data, password=hashed_pass)
        db.session.add(user)
        db.session.commit()
        flash(f"Account created for {form.username.data}!", "success")
        return redirect(url_for("main.login"))
    return render_template("register.html", form=form)

@main.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for("main.home"))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember=form.remember.data)
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for("main.home"))
        flash(f"Login unsuccessful. Please check your email and password!", "danger")
    return render_template("login.html", form=form)

@main.route("/logout")
def logout():
    logout_user()
    return redirect(url_for("main.home"))

@login_manager.user_loader
def load_user(user_id):
    return User.query.filter_by(id=user_id).first()



