# import the function that will return an instance of a connection
from flask_app import app
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


# model the class after the friend table from our database
class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
# Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM user;"
# make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('login_db').query_db(query)
# Create an empty list to append our instances of friends
        users = []
# Iterate over the db results and create instances of friends with cls.
        for user in results:
            users.append( cls(user) )
        return users

    @classmethod
    def create(cls, data ):
        query = "INSERT INTO user ( first_name , last_name , email, password, created_at) VALUES ( %(first_name)s , %(last_name)s , %(email)s, %(password)s, NOW() );"
        # data is a dictionary that will be passed into the save method from server.py
        results = connectToMySQL('login_db').query_db( query, data )
        return results

    @classmethod
    def read_id(cls, data:dict):
        query = "SELECT * FROM user WHERE id = %(user_id)s;"
        results = connectToMySQL('login_db').query_db( query, data )
        if not results:
            return False
        return cls(results[0])
    
    @classmethod
    def email_id(cls, data):
        query = "SELECT * FROM user WHERE email = %(email)s;"
        results = connectToMySQL('login_db').query_db( query, data )
        if len(results) < 1:
            return False
        return cls(results[0])



    @staticmethod
    def register(form_data):
        is_valid = True

        if len(form_data['first_name']) < 1:
            flash('First name not long enough')
            is_valid = False
        
        if len(form_data['last_name']) < 1:
            flash('Last name not long enough')
            is_valid = False
        
        if len(form_data['email']) < 1:
            flash('Email not valid')
            is_valid = False

        if not EMAIL_REGEX.match(form_data['email']):
            flash('Email is missing syntax')
            is_valid = False

        if len(form_data['password']) < 1:
            flash('Password need more characters')
            is_valid = False

        if form_data['password'] != form_data['confirm']:
            flash('Password dont match')
            is_valid = False

        
        return is_valid

    @staticmethod
    def login(form_data):
        get = User.email_id(form_data)

        if not get: 
            flash("Invalid Credentials")
            return  False

        if not bcrypt.check_password_hash(get.password, form_data['password']):
            flash('Password dont match')
            return False

        return True