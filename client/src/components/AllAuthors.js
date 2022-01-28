import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllAuthors = (props) => {
    let [allAuthors, setAllAuthors] = useState([]);
    let [deleted, setDeleted] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors/')
            .then(res=>{
                setAllAuthors(res.data.results);
            })
            .catch(err=> console.log('Errored out while getting all', err));
    },[deleted, props.setNewAuthorAdded]);

    const deleteAuthor = (_Id)=>{
        axios.delete(`http://localhost:8000/api/authors/delete/${_Id}`)
            .then(res=>{
                setDeleted(!deleted);
            })
            .catch(err=> console.log('Errored out while deleting', err));
    };

    return (
        <div>
            <p>We have quotes by:</p>
            <div className='d-flex justify-content-evenly'>
                <h4>Authors</h4><h4>Actions</h4>
            </div>
            {allAuthors.map((authorObj, i)=>{
                return (
                    <div key={i} className='container justify-content-evenly d-flex'>
                        <h4><Link to={`/authors/${authorObj._id}`}>{authorObj.name}</Link></h4>
                        <p>
                            <Link to={`/authors/update/${authorObj._id}`} className = 'btn btn-warning' >Edit</Link>|
                            <button onClick = {()=>deleteAuthor(authorObj._id)} className='btn btn-danger'>Delete</button>
                        </p>
                    </div>
                )
            })}
        </div>
    );
};

export default AllAuthors;