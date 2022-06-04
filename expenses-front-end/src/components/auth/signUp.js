import React, { useState, useEffect } from 'react';
import { nagivate } from 'hookrouter';
import Cookies from  'js-cookie';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === '' | password === '' || confirmPassword === '') {
            setError(true);
            setErrorMessage('Error: All fields must be completed.');
        } else if (password !== confirmPassword)  {
            setError(true);
            setErrorMessage('Error: The password must match.');
        } else {
            fetch('http://127.0.0.1:5000/user/add', {
                method: 'POST',
                headers: { 'content-type': 'application/json'},
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(res => res.json())
            .then(res => {
                if(res === 'Error: The username is taken.') {
                    setError(true);
                    setErrorMessage('Error: The username is taken.');
                } else {
                    setError(false);
                    setErrorMessage('');
                    Cookies.set('username', username);
                    nagivate('/');
                }
            })
            .catch(error => {
                console.log('Error with creating your user,', error);
                setError(true);
                setErrorMessage('Error adding the user, Trye again please.');
            })
        }
    }

    return (
        <div className='signup-container main-body'>
            <h2>Fill out this form to register.</h2>
            <form className='signup-form' onSubmit={(e) => handleSubmit(e)}>
                <div className='input-form-container'>
                    <input type='text' placeholder='Username' value={username} name='username' onChange={(e) => setUsername(e.target.value)} />
                    <input type='password' placeholder='Password' value={password} name='password' onChange={(e) => setPassword(e.target.value)} />
                    <input type='password' placeholder='Confirm Password' value={confirmPassword} name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button className='submit-btn'>Submit</button>
            </form>

            <h6 style={{visibility: error ? 'visible' : 'hidden'}}>{errorMessage}</h6>
        </div>
        

    )

}