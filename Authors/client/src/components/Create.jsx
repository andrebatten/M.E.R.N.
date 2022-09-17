import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Create = (props) => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const createAuthor = (e) => {
        e.preventDefault()

        const newAuthor = {
            name,
            
        }
        axios.post("http://localhost:8000/api/create", newAuthor)
            .then(res => {
                console.log(res.data);
                console.log("Success!");
                /*Navigates to another page after successfully entered*/
                navigate("/show")
            })
            .catch(err => {
                console.log(err);
                console.log("Error!!!!!!");

                    const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
                    const errorArr = []; // Define a temp error array to push the messages in
                    for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message)
                    }
                    console.log(errorArr);
                    // Set Errors
                    setErrors(errorArr);
            })
    }


    



    return (
        <div>
            
            <hr />
            <p>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
            </p>
            <h3>Author</h3>
            {JSON.stringify(name)}
            
    <form onSubmit={createAuthor}>
        <div>
        <label>Name:</label>
        <input onChange={(e) => setName(e.target.value)} value={name}></input>
        </div>
        
        <button>Create</button>
    </form>

        </div>
    )
}

export default Create