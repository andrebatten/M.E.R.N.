// Controller is all C.R.U.D.
//making queries to the db
//using the model
//so we import the model
const Author = require("../models/author.models")

//make all the CRUD
//Read All
module.exports.findAll = (req, res) => {
    //use the model to execute a query
    Author.find()
        .then(allDaAuthors =>{
            console.log(allDaAuthors);
            res.json(allDaAuthors)
        })
        .catch(err =>res.status(400).json({message: "Something went wrong", error: err}))
}

//Create
module.exports.createNew = (req, res) => {
    console.log(req.body);
    Author.create(req.body)
        .then(newlyCreatedAuthor => res.json(newlyCreatedAuthor))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

//Read One / Find One
module.exports.findOne = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneSingle => res.json(oneSingle))
        .catch(err => res.status(400).json(err))
            
    }


//Delete
module.exports.deleteAnExisting = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

//Update
module.exports.updateExisting = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updated => res.json(updated))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}