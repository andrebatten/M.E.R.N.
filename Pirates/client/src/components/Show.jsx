import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



const Show = (props) => {

    const [pirates, setPirates] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/findall")
            .then(res => {
                console.log(res.data);
                setPirates(res.data);
            })
            .catch(err => {
                console.log(err);
            })
}, [])

    const deletePirate = (deleteId) => {
        axios.delete("http://localhost:8000/api/delete/" + deleteId)
            .then(res => {
                console.log(res.data);
                console.log("Deleted!!!");

                //Remove 
                setPirates(pirates.filter( (pirate) => pirate._id !== deleteId));
            })
            .catch(err => console.log(err))
    }


    
    return(
        <div>
            
            {pirates.map( (pirate, idx) => {
                return (
                    <div key={pirate._id}>
                        <table>
                            <th>
                                <td>Name</td>
                                <td>Image</td>
                                <td>Action</td>
                            </th>
                            <tr>
                                <td><h5>{pirate.name}</h5></td>
                                <td><img className='images' src={pirate.image} alt="pirate"/></td>
                                <td><button><Link to={`/view/${pirate._id}`}>View Pirate</Link></button></td>
                                <td>
                            {/* <Link to={"/update/"+pirate._id}>Edit</Link> */}
                        <button onClick={() => deletePirate(pirate._id)}>Walk The Plank</button>
                        </td>
                            </tr>
                        
                        </table> 
                    </div>
                )
                }
            )
            }
        </div>
    )
}










export default Show;