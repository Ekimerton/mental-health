from flask import Blueprint, render_template, flash, redirect, url_for, request, jsonify, send_from_directory
from flask_login import login_user, current_user, logout_user, login_required
from flaskapp import db, bcrypt, login_manager
from flaskapp.main.forms import RegistrationForm, LoginForm
from flaskapp.models import User, Post
from flaskapp.main.nlp import get_sentiment_score, get_document

main = Blueprint("main", __name__)

@main.route('/', methods=['GET', 'POST'])
def default():
    return render_template('public/index.html')

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

# Api
@main.route("/user")
def posts():
    user_id = request.args.get('id', type=int)
    found_user = User.query.filter_by(id=user_id).first()
    posts_json = []
    for post in found_user.posts:
        posts_json.append({"post_id":post.id, "title":post.title, "entry":post.entry,
         "score":post.score, "date":(str(post.date.year).zfill(4) + "-" + str(post.date.month).zfill(2) + "-" + str(post.date.day).zfill(2))})
    return jsonify(
        posts=posts_json,
        username=found_user.username,
        user_id=found_user.id
    )

@main.route("/new_post", methods=['GET', 'POST'])
def new_post():
    user_id = request.args.get('id', type=int)
    found_user = User.query.filter_by(id=user_id).first()
    title = request.args.get('title', type=str)
    content = request.args.get('content', type=str)
    post = Post(title=title, entry=content, author=found_user)
    db.session.add(post)
    db.session.commit()

@main.route("/get_calendar", methods=['GET', 'POST'])
def get_calendar():
    user_id = request.args.get('id', type=int)
    found_user = User.query.filter_by(id=user_id).first()
    posts_json = []
    for post in found_user.posts:
        posts_json.append({'score':post.score, "date":(str(post.date.year).zfill(4) + "-" + str(post.date.month).zfill(2) + "-" + str(post.date.day).zfill(2))})
    return jsonify(
        posts=posts_json
    )

@main.route("/custom_post", methods=['GET', 'POST'])
def custom_post():
    user_id = request.args.get('id', type=int)
    found_user = User.query.filter_by(id=user_id).first()
    title = request.args.get('title', type=str)
    content = request.args.get('content', type=str)
    date = request.args.get('date', type=str)
    post = Post(title=title, entry=content, author=found_user, date=date)
    db.session.add(post)
    db.session.commit()

# Create db

@main.route("/create_db", methods=['GET', 'POST'])
def create_db():
    from flaskapp import db
    db.create_all()
    return redirect(url_for('main.home'))
