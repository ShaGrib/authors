import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const OneAuthor = () => {
    const { _id } = useParams();

    const history = useHistory();

    const [authorDetails, setAuthorDetails] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                console.log(res);
                setAuthorDetails(res.data.results);
            })
            .catch(err => console.log(err));
    }, []);

    const deleteAuthor = () => {
        axios.delete(`http://localhost:8000/api/authors/delete/${_id}`)
            .then(res => {
                history.push('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h4><Link to={'/'}>Main Page</Link></h4>
            <h4>Details about {authorDetails.name}</h4>
            <button onClick={deleteAuthor} className='btn btn-danger'>Delete Author</button>
        </div>
    );
};


export default OneAuthor;