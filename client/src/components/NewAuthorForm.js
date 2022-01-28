import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const NewAuthorForm = (props) => {
    let [name, setName] = useState('');

    let [formErrors, setFormErrors] = useState({});

    const history = useHistory();

    const createAuthorSubmitHandler = (e) => {
        e.preventDefault();
        let formAuthorObj = { name };

        axios.post('http://localhost:8000/api/authors', formAuthorObj)
            .then(res => {
                if (res.data.error) {
                    console.log(res.data.error.errors);
                    setFormErrors(res.data.error.errors);
                } else {
                    props.setNewAuthorAdded(!props.newAuthorAdded);
                    history.push('/');
                }
            })
            .catch(err => console.log('errored out while submitting post', err));
    };

    return (
        <div>
            <h4><Link to={'/'}>Main Page</Link></h4>
            <form onSubmit={createAuthorSubmitHandler}>
                <div className='form-group d-flex'>
                    <label htmlFor=''>Name:</label>
                    <input onChange={(e) => { setName(e.target.value) }} type='text' name='' id='' className='form-control' />
                </div>
                <p className='text-danger'>{formErrors.name?.message}</p>
                <div>
                    <Link to={'/'} className='btn btn-primary btn-sm'>Cancel</Link>
                <input type='submit' value='Submit' className='btn btn-primary btn-sm mt-3' />
                </div>
            </form>
        </div>
    );
};

export default NewAuthorForm;