import React from 'react'

const Display = (props) => {
    return(
        <fieldset>
            <legend>User</legend>

            <p>First Name: {props.newUserObj.firstname}</p>
            <p>Last Name: {props.newUserObj.lastname}</p>
            <p>Email: {props.newUserObj.email}</p>
        </fieldset>
    )
}




export default Display 