import React, { useState } from  'react';
import Display from './Display';    
    
const UserForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirm, setConfirm] = useState(""); 
    const [fnError, setfnError] = useState("");
    const [lnError, setlnError] = useState("");
    const [emailError, setemailError] = useState("");
    const [pwError, setpwError] = useState("");
    const [conError, setconError] = useState("");
    const [newUserObj, setNewUserObj] = useState({});

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { 
            firstname, 
            lastname, 
            email, 
            password, 
            confirm
        };
        console.log("Welcome", newUser);
        setNewUserObj(newUser);
        ;
    };
    
    const handlefnError = (e) => {
        setfirstname(e.target.value);
        if(e.target.value.length < 1) {
            setfnError("First Name is required!");
        } else if(e.target.value.length <= 2) {
            setfnError("First Name field must have more characters! ");
        } else {
            setfnError("")
        }
    }
    const handlelnError = (e) => {
        setlastname(e.target.value);
        if(e.target.value.length < 1) {
            setlnError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setlnError("Last Name field must have more characters! ");
        }else {
            setlnError("")
        }
    }
    const handlemailError = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setemailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setemailError("Email needs more characters! ");
        }else {
            setemailError("")
        }
    }
    const handlepwError = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1 ) {
            setpwError("Password field must be filled in!");
        } else if(e.target.value.length < 8) {
            setpwError("Password field needs more characters! ");
        }
        else if(setPassword != setConfirm){
            setpwError("Password does not match.")
        }else {
            setpwError("")
        }
    }
    const handleconError = (e) => {
        setConfirm(e.target.value);
        if(e.target.value.length < 1 ) {
            setconError("Confirm Password field must be filled in!");
        }
        else if(setPassword != setConfirm ){
            setconError("Password does not match.")
        }else {
            setconError("")
        }
    }


    return(
        <form onSubmit={ createUser }>
            <p>
                <Display newUserObj={newUserObj}/>
            </p>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ handlefnError } />
                {
                    fnError ?
                    <p style={{color: 'red'}}>{fnError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ handlelnError } />
                {
                    lnError ?
                    <p style={{color: 'red'}}>{lnError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ handlemailError } />
                {
                    emailError ?
                    <p style={{color: 'red'}}>{emailError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlepwError } />
                {
                    pwError ?
                    <p style={{color: 'red'}}>{pwError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleconError } />
                {
                    conError ?
                    <p style={{color: 'red'}}>{conError}</p>:
                    ''
                }
            </div>
            
            <input type="submit" value="Create User" />
        </form>
        
    );
};
    
export default UserForm;
