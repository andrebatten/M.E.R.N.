from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.models_user import User
from flask_app.models.models_band import Band
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

############## Create User ##############

@app.route('/create', methods=['post'])
def create():
    data = {
        "first_name" :request.form['first_name'],
        "last_name" :request.form['last_name'],
        "email" : request.form['email'],
        "password" : request.form['password'],
        "confirm" : request.form['confirm']
    }
    
    if not User.register(data):
        return redirect('/')

    data['password'] = bcrypt.generate_password_hash(request.form['password'])
    
    users_id = User.create(data)
    session['user_id'] = users_id
    return redirect('/dashboard')

############# Enter Site #############

@app.route('/enter', methods=['post'])
def enter():
    data = {
        "email": request.form['email'],
        "password": request.form['password']
    }
    if not User.login(data):
        return redirect('/')
    users_id = User.email_id(data)
    session['user_id'] = users_id.id

    return redirect ('/dashboard')


###############