import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Create = (props) => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [chest, setChest] = useState("");
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [pegleg, setPegleg] = useState(true);
    const [eyepatch, setEyePatch] = useState(true);
    const [hookhand, setHookHand] = useState(true);

    const [errors, setErrors] = useState([]);

    const createPirate = (e) => {
        e.preventDefault()

        const newPirate = {
            name,
            image,
            chest,
            phrase,
            position,
            pegleg,
            eyepatch,
            hookhand
        }
        axios.post("http://localhost:8000/api/create", newPirate)
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
            <h3>Pirate</h3>
            {JSON.stringify(name)} <br />
            {JSON.stringify(image)} <br />
            {JSON.stringify(chest)} <br />
            {JSON.stringify(phrase)} <br />
            {JSON.stringify(position)} <br />
            {JSON.stringify(pegleg)} <br />
            {JSON.stringify(eyepatch)} <br />
            {JSON.stringify(hookhand)} <br />
            
    <form onSubmit={createPirate}>
        <div>
        <label>Name:</label>
        <input onChange={(e) => setName(e.target.value)} value={name}></input>
        </div>
        <div>
        <label>Image:</label>
        <input onChange={(e) => setImage(e.target.value)} value={image}></input>
        </div>
        <div>
        <label>Treasure Chest:</label>
        <input onChange={(e) => setChest(e.target.value)} value={chest}></input>
        </div>
        <div>
        <label>Catch Phrase:</label>
        <input onChange={(e) => setPhrase(e.target.value)} value={phrase}></input>
        </div>
        <div>
        <label>Crew Position:</label>
        <select onChange={(e) => setPosition(e.target.value)} value={position}>
            <option value="captain">Captain</option>
            <option value="first mate">First Mate</option>
            <option value="quarter master">Quarter Master</option>
            <option value="Bootswain">Bootswain</option>
            <option value="powder monkey">Powder Monkey</option>
            <option value="swabbie">Swabbie</option>
        </select>
        </div>
        <div>
        <label>Peg Leg:</label>
        <input type="checkbox" checked={pegleg} onChange={(e) => setPegleg(e.target.checked)} value={name}></input>
        </div>
        <div>
        <label>Eye Patch:</label>
        <input type="checkbox" checked={eyepatch} onChange={(e) => setEyePatch(e.target.checked)} value={name}></input>
        </div>
        <div>
        <label>Hook Hand:</label>
        <input type="checkbox" checked={hookhand} onChange={(e) => setHookHand(e.target.checked)} value={name}></input>
        </div>
        
        <button>Create</button>
    </form>

        </div>
    )
}

export default Create