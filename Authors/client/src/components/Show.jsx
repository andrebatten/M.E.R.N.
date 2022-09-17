import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



const Show = (props) => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/findall")
            .then(res => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch(err => {
                console.log(err);
            })
}, [])

    const deleteAuthor = (deleteId) => {
        axios.delete("http://localhost:8000/api/delete/" + deleteId)
            .then(res => {
                console.log(res.data);
                console.log("Deleted!!!");

                //Remove 
                setAuthors(authors.filter( (author) => author._id !== deleteId));
            })
            .catch(err => console.log(err))
    }


    
    return(
        <div>
            
            {authors.map( (author, idx) => {
                return (
                    <div key={author._id}>
                        <table>
                            <th>
                                <td>Author</td>
                                <td>View</td>
                                <td>Action</td>
                            </th>
                            <tr>
                                <td><h5>{author.name}</h5></td>
                                <td><Link to={`/view/${author._id}`}>View Author</Link></td>
                                <td><button>
                            <Link to={"/update/"+author._id}>Edit</Link>
                        </button><button onClick={() => deleteAuthor(author._id)}>Delete</button>
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