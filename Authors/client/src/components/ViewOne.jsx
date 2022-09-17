import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';





const ViewOne = (props) => {

    const {id} = useParams();


    const [ThisAuthor, setThisAuthor] = useState([])

    useEffect( () => {
        axios.get("http://localhost:8000/api/findone/" + id)
            .then( res => {
                console.log(res.data);
                setThisAuthor(res.data);
            })
            .catch(err => console.log(err))
    }, [id])



    return(
        <div>
            <h2>View One</h2>
            <h4>{ThisAuthor.name}</h4>
            
        </div>
    )
}

export default ViewOne;