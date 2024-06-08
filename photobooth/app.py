from flask import Flask, render_template, request, redirect, url_for, session
import re
import csv

app = Flask(__name__)

app.secret_key = "your secret key"

@app.route('/')
@app.route('/login', methods = ['GET' , 'POST'])

def login():
    msg = ""
    if request.method == "POST" and 'username' in request.form and 'password' in request.form:
        username = request.form['username']
        password = request.form['password']
        fin = open("photobooth\\static\\asset\\user_database.csv","r")
        reader = csv.reader(fin)
        account = ""
        while True:
            try:
                row = next(reader)
                if row[3] == username and row[4] == password:
                    account = row
                    break
            except:
                break
        if account != "":
            session['loggedin'] = True
            session['username'] = row[3]
            msg = 'Logged in Successfully'
            return render_template('index.html', msg=msg)
        else:
            msg = 'Incorrect username / password ! '
    return render_template('login.html', msg=msg)

@app.route('/register', methods = ['GET', 'POST'])

def register():
    imsg = ''
    if request.method == "POST" and 'firstname' in request.form and 'lastname' in request.form and 'email' in request.form:
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        email = request.form['email']
        username = request.form['signup-username']
        password = request.form['signup-password']
        with open("photobooth\\static\\asset\\user_database.csv", "r", newline='') as f:
            reader = csv.reader(f)
            while True:
                try:
                    row = next(reader)
                    if row[3] == username:
                        imsg = 'Account already exists !'
                    elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
                        imsg = "Invalid email address !"
                    elif not re.match(r'[A-Za-z0-9]+', username):
                        imsg = 'Username must contain only characters and numbers !'
                    elif not username or not password or not email:
                        imsg = "Please fill out the form !"
                    else:
                        with open("photobooth\\static\\asset\\user_database.csv", "a", newline='') as g:
                            writer = csv.writer(g)
                            data = [firstname,lastname,email,username,password]
                            writer.writerow(data)
                            imsg = 'You have successfully registered'
                            break
                except:
                    break
    elif request.method == 'POST':
        msg = "Please fill out the form"

    return render_template("login.html", imsg = imsg)

@app.route("/user")

def user():
    return render_template("login.html")

if __name__ == "__main__":
    app.run(debug=False, host='0.0.0.0')