import React, { useState, useEffect } from 'react';
import { A } from 'hookrouter';
import Cookies from 'js-cookie';

export default function NavBar(props) {
    const [ loggedIn, setLoggedIn ] = useState(false)

    const buttonType = () => {
        if(Cookies.get('username')) {
            setLoggedIn(false);
            props.logout();
        } else if(loggedIn && Cookies.get('username')) {
            props.login();
        }
    }

    useEffect(() => {
        if(Cookies.get('username')) {
            setLoggedIn(true);
        }
    })

    return (
    <div className='navigation-container'>
        <div className='top-nav-link-wrapper'>
            <div className='nav-link'>
                <A className='link' href='/'>
                    Home
                </A>

            </div>
            <div className='nav-link'>
                <A className='link' href='/add'>
                    Add Expense
                </A>

            </div>
            <div className='nav-link'>
                <A className='link' href='/charts'>
                    Charts
                </A>

            </div>
            <div className='nav-link'>
                <A className='link' href='/signup'>
                    {loggedIn ? '' : 'Sign Up'}
                </A>

            </div>
            <div className='nav-link'>
                <A className='link' href='/login' onClick={buttonType}>
                    {loggedIn ? 'Logout' : 'Login'}
                </A>

            </div>

        </div>

    </div>
    )
}