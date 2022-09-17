//import mongoose to build a model
const mongoose = require('mongoose');

//the schema - the rules that the entries in the db must follow
const AuthorSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "{PATH} must be present"],
        minlength: [3,"{PATH} must be at least 3 characters long"]
    }
}, {timestamps: true})

//the model - this is what we use to make the actual queries to the db
const Author = mongoose.model('Author', AuthorSchema)

//export the model
module.exports = Author;