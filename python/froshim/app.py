from crypt import methods
from flask import Flask, redirect, render_template, request
from cs50 import SQL

app = Flask(__name__, template_folder='template')



REGISTRANTS = {}

SPORTS = ["Hockey", "Squash", "Tennis", "Swimming", "Soccer", "Basketball", "Baseball", "Football"]



@app.route("/")
def index():
    return render_template("index.html", sports=SPORTS)

@app.route("/register", methods=["POST"])
def register():
    
    # Validate Name
    name = request.form.get("name")
    if not name:
        return render_template("error.html", message="Missing name.")

    # Validate Sport
    sport = request.form.get("sport")
    if not sport:
        return render_template("error.html", message="Missing sport.")
    if sport not in SPORTS:
        return render_template("error.html", message="Invalid sport.")

    # Remember Registration
    REGISTRANTS[name] = sport

    # Confirm Registration
    return redirect("/registrants")

@app.route("/registrants")
def registrants():
    return render_template("registrants.html", registrants=REGISTRANTS)
