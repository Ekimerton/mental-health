from flask import Blueprint, render_template

errors = Blueprint("errors", __name__)

@errors.app_errorhandler(404)
def error_404(error):
    return "<p> 404 </p>", 404

@errors.app_errorhandler(403)
def error_403(error):
    return "<p> 403 </p>", 403

@errors.app_errorhandler(500)
def error_500(error):
    return "<p> 500 </p>", 500
