from flask_app import app
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
from flask_app.models.models_user import User


# model the class after the friend table from our database
class Band:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.genre = data['genre']
        self.city = data['city']
        self.user_id = data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.created_by = User.read_id({'user_id':data['user_id']})
# Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM band;"
# make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('login_db').query_db(query)
# Create an empty list to append our instances of friends
        bands = []
# Iterate over the db results and create instances of friends with cls.
        for band in results:
            bands.append( cls(band) )
        return bands


    @classmethod
    def get_all_bands_for_user(cls, data):
        query = "SELECT * FROM band WHERE user_id = %(user_id)s;"
        results = connectToMySQL('login_db').query_db( query, data )
        if results:

            bands = []
            for band in results:
                bands.append( cls(band) )
            return bands
        
        return False


    @classmethod
    def create(cls, data ):
        query = "INSERT INTO band ( name, genre, city, user_id) VALUES ( %(name)s , %(genre)s , %(city)s, %(user_id)s);"
        # data is a dictionary that will be passed into the save method from server.py
        results = connectToMySQL('login_db').query_db( query, data )
        return results

    @classmethod
    def read_id(cls, data):
        query = "SELECT * FROM band WHERE id = %(id)s;"
        results = connectToMySQL('login_db').query_db( query, data )
        
        return results
    

    @classmethod
    def delete(cls, data):
        query = "Delete From band Where id = %(id)s"
        results = connectToMySQL('login_db').query_db( query, data )
        return results

    @classmethod
    def update(cls, data):
        query = "Update band Set name = %(name)s, genre = %(genre)s, city = %(city)s Where id = %(id)s"
        results = connectToMySQL('login_db').query_db( query, data )
        return results


    @staticmethod
    def validate(band_data):
        is_valid = True
        if len(band_data['name']) < 2:
            flash('Wrong!')
            is_valid = False
        
        if len(band_data['city']) < 2:
            flash('Wrong!')
            is_valid = False

        if len(band_data['genre']) < 2:
            flash('Wrong!')
            is_valid = False

        return is_valid


