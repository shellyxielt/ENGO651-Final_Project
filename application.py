import os, requests

from flask import Flask, session, request, render_template, redirect, url_for, jsonify
from flask_session import Session
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

app = Flask(__name__)

# # Check for environment variable
# if not os.getenv("DATABASE_URL"):
#     raise RuntimeError("DATABASE_URL is not set")
# Configure session to use filesystem
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

engine = create_engine("postgres://oqgqqyjlwtgahl:c2f6836d94ef9beac22f32b1d3bfa0ecfaf616a073a80d804327c72343988d42@ec2-54-235-108-217.compute-1.amazonaws.com:5432/d6bat6fv0nkh9g")
db = scoped_session(sessionmaker(bind=engine))


# db.init_app(app) ##tigh database to flask

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/register")
def register():
    return render_template("register.html")

@app.route("/register/validity", methods=["POST"])
def check_registration():
    username=request.form.get("username_register")
    password=request.form.get("password_register")
    firstName=request.form.get("firstName")
    lastName=request.form.get("lastName")

    if username=="" or password=="" or firstName=="" or lastName=="":
        return render_template("error.html", message="One or more fields of the form is/are empty. Please return and fill in the form.", type_error="registration")
    
    if db.execute("select * from users where username=:username",{"username":username}).rowcount>0:
        return render_template("error.html", message="This username already exists. Please use a new username or go to login page to sign in.", type_error="registration")
    
    db.execute("INSERT INTO users (username, password, firstName, lastName) values (:username, :password, :firstName, :lastName)",\
              {"username":username, "password":password, "firstName":firstName, "lastName":lastName})

    db.commit()
    return render_template("success_submit.html", submit_type="register")

@app.route("/route", methods=["POST","GET"])
def route():
    if request.method=="POST":
        username=request.form.get("username_login")
        password=request.form.get("password_login")

        if username=="" or password=="":
            return render_template("error.html", message="Your password or username field is empty. Please return and fill in the form.", type_error="login")

        out_id=db.execute("select id from users where username=:username and password=:password",{"username":username,"password":password})
        if out_id.rowcount==0:
            return render_template("error.html", message="Your password or username is not correct or may be you don't have an account. Please return back to the log in page.", type_error="login")

        if(not("user_id" in session)):
            session["user_id"]=[]
            print("add new data to session")
        new_id=out_id.fetchone()[0]

        if ((len(session["user_id"])>0 and new_id!=session["user_id"][-1]) or (len(session["user_id"])==0)):
            session["user_id"].append(new_id)
        print(f"session now ={session['user_id']}")
        db.commit()
    return render_template("route.html")

if __name__== "__main__" :
    app.run()
