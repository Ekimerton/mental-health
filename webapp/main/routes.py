from flask import Blueprint, render_template

main = Blueprint("main", __name__)

@main.route('/', methods=['GET', 'POST'])
def default():
    return render_template("home.html")

@main.route('/home', methods=['GET', 'POST'])
def home():
    return render_template("home.html")

