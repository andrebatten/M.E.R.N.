from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.models_user import User
from flask_app.models.models_band import Band
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


############## Display ######################

@app.route('/')
def login():
    
    
    return render_template('index.html')


@app.route('/dashboard')
def dashboard():
    data = {
        "user_id" : session['user_id']
        
        }
    user = User.read_id(data)
    bands = Band.get_all()
    
    return render_template('dashboard.html', user=user,bands=bands)


@app.route('/new/sighting')
def add():
    data = {
        "user_id" : session['user_id']
    }
    user = User.read_id(data)
    return render_template('add.html',user=user)


@app.route('/edit/<int:id>')
def edit(id):
    
    data = {
        'id' : id
        
    }
    bands = Band.read_id(data)
    
    return render_template('edit.html',bands=bands)


@app.route('/mybands')
def show():
    data = {
        "user_id" : session['user_id']
    }
    album = Band.get_all()
    user = User.read_id(data)
    return render_template('mybands.html',album=album,user=user)


############### Log Out ############

@app.route('/clear')
def log_out():
    session.clear()
    return redirect('/')




