from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.models_user import User
from flask_app.models.models_band import Band
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


################# Create Band ####################


@app.route('/add', methods=['post'])
def create_band():
    if not Band.validate(request.form):
        return redirect ('/new/sighting')
    data = {
        
        "name": request.form['name'],
        "genre": request.form['genre'],
        "city": request.form['city'],
        "user_id" : session['user_id']
    }
    Band.create(data)
    return redirect('/mybands')


################## Update ###################

@app.route('/update/user/<int:id>',methods=['post'])
def update_user(id):
    data = {
        "name" : request.form['name'],
        "genre" : request.form['genre'],
        "city" : request.form['city'],
        "id" : id
    }
    Band.update(data)

    return redirect('/dashboard')


################## Delete ####################

@app.route('/delete/<int:id>')
def delete(id):
    data = {
        'id' : id
    }

    Band.delete(data)
    return redirect('/mybands')

