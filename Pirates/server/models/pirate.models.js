//import mongoose to build a model
const mongoose = require('mongoose');

//the schema - the rules that the entries in the db must follow
const PirateSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "{PATH} must be present"],
        minlength: [3,"{PATH} must be at least 3 characters long"]
    },
    
    image: {
        type:String,
        required: [true, "{PATH} must be present"],
        minlength: [5,"{PATH} must be at least 5 characters long"]
    },

    chest: {
        type:Number,
        required: [true, "{PATH} must be present"],
        min: [1,"You need atleast 1 to be a pirate!"]
    },

    phrase: {
        type:String,
        required: [true, "{PATH} must be present"],
        minlength: [2,"{PATH} must be at least 2 characters long"]
    },

    position: {
        type:String,
        required: [true, "{PATH} must be present"],
        
    },

    pegleg: {
        type:Boolean,
        default: false
        
    },

    eyepatch: {
        type:Boolean,
        default: false
        
    },

    hookhand: {
        type:Boolean,
        default: false
        
    }


}, {timestamps: true})

//the model - this is what we use to make the actual queries to the db
const Pirate = mongoose.model('Pirate', PirateSchema)

//export the model
module.exports = Pirate;