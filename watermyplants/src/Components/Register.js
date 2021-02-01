import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
const Register = () => {
    const initialFormValues = {
        username: '',
        phoneNumber:'',
        password: '',
    }
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name] : e.target.value
        })
    }

    const {push} = useHistory();
    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post('')
        .then(res=>{
            localStorage.setItem('token', res.data.payload)
            push('/home')
        })
        .catch(err=>{
            console.log('Login Axios error', err.response)
        })
        
    }
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>Username
                    <input
                    type='text'
                    value={formValues.username}
                    onChange={handleChange}
                    placeholder='enter username'
                    name = 'username'
                    />
                </label>

                <label>Phone Number
                    <input
                    type='text'
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                    placeholder='enter phone number'
                    name = 'phoneNumber'
                    />
                </label>

                <label>Password
                    <input
                    type='password'
                    value={formValues.password}
                    onChange={handleChange}
                    placeholder='enter password'
                    name = 'password'
                    />
                </label>
                <button>Register</button>
            </form>
        </div>
    )
}
export default Register;