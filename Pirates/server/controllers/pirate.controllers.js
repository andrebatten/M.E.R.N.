// Controller is all C.R.U.D.
//making queries to the db
//using the model
//so we import the model
const Pirate = require("../models/pirate.models")

//make all the CRUD
//Read All
module.exports.findAll = (req, res) => {
    //use the model to execute a query
    Pirate.find()
        .then(allDaPirates =>{
            console.log(allDaPirates);
            res.json(allDaPirates)
        })
        .catch(err =>res.status(400).json({message: "Something went wrong", error: err}))
}

//Create
module.exports.createNew = (req, res) => {
    console.log(req.body);
    Pirate.create(req.body)
        .then(newlyCreatedPirate => res.json(newlyCreatedPirate))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

//Read One / Find One
module.exports.findOne = (req, res) => {
    Pirate.findOne({ _id: req.params.id })
        .then(oneSingle => res.json(oneSingle))
        .catch(err => res.status(400).json(err))
            
    }


//Delete
module.exports.deleteAnExisting = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

//Update
module.exports.updateExisting = (req, res) => {
    Pirate.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updated => res.json(updated))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}