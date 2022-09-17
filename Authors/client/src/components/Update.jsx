import React from "react"
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";


const Update = (props) => {

    const navigate = useNavigate();

    const {id} = useParams()

    const [name, setName] = useState("");
    

    //Get the data from the db and put it in 
    //state to have the form prepopulated

useEffect(() => {
    axios.get("http://localhost:8000/api/findone/" + id)
    .then(res => {
        console.log(id);
        console.log(res.data);
        setName(res.data.name);
        
        
        
    })
    .catch(err => {
        console.log(err);
        
    })
}, [id])

    const updateAuthor = (e) => {
        e.preventDefault()
        const newAuthor = {
            name,
            
        }
        axios.put("http://localhost:8000/api/update/"+ id, newAuthor)
            .then(res => {
                console.log(res.data);
                console.log("Success!");
            
            
            })
            .catch(err => {
                console.log(err);
                console.log("Error!!!!!!");
        })
        navigate("/show")
    }



    return(
        <div>
<div>
            <h3>Author</h3>
            {JSON.stringify(name)}
            
    <form onSubmit={updateAuthor}>
        <div>
        <label>Name:</label>
        <input onChange={(e) => setName(e.target.value)} value={name}></input>
        </div>
        
        <button>Update</button>
    </form>

        </div>
        </div>
    )
}


export default Update


