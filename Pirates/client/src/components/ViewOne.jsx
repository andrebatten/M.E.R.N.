import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';





const ViewOne = (props) => {

    const {id} = useParams();


    const [ThisPirate, setThisPirate] = useState([])

    useEffect( () => {
        axios.get("http://localhost:8000/api/findone/" + id)
            .then( res => {
                console.log(res.data);
                setThisPirate(res.data);
            })
            .catch(err => console.log(err))
    }, [id])



    return(
        <div>
            <h2>About Pirate</h2>
            <h4><img className='images' src={ThisPirate.image} alt="pirate"/></h4>
            <h4>Name: {ThisPirate.name}</h4>
            <h4>Catch Phrase: {ThisPirate.phrase}</h4>
            <h4>Crew Position: {ThisPirate.position}</h4>
            <h4>Treasure Chest: {ThisPirate.chest}</h4>
            <h4>Peg leg: {String(ThisPirate.pegleg)}</h4>
            <h4>Eye Patch: {String(ThisPirate.eyepatch)}</h4>
            <h4>Hook Hand: {String(ThisPirate.hookhand)}</h4>
            
            
        </div>
    )
}

export default ViewOne;