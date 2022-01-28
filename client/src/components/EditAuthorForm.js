import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const EditAuthorForm = (props) => {
    const { _id } = useParams();

    let [authorInfo, setAuthorInfo] = useState({
        name: ''
    });

    let [formErrors, setFormErrors] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${_id}`)
        .then(res=>{
            console.log(res.data.results);
            setAuthorInfo(res.data.results);
        })
        .catch(err=> console.log(err));
    },[]);

    const history = useHistory();

    const changeHandler = (e)=>{
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        });
    };

    const updateAuthorSubmitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${_id}`, authorInfo)
            .then(res=>{
                if (res.data.error) {
                    console.log(res.data.error.errors);
                    setFormErrors(res.data.error.errors);
                } else {
                    history.push('/');
                }
            })
            .catch(err=>console.log(err));
    };

    return (
        <div>
            <h4><Link to={'/'}>Main Page</Link></h4>
            <h4>Edit Author Below</h4>
            <form onSubmit = {updateAuthorSubmitHandler}>
                <div className='form-group'>
                    <label htmlFor=''>Name</label>
                    <input type='text' name='name' id='' className='form-control' value={authorInfo.name} onChange={changeHandler}/>
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

export default EditAuthorForm;