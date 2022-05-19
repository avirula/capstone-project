import React, { useState } from 'react';
import { useRoutes } from 'hookrouter';
import NavBar from './navigation/navBar';
import routes from './navigation/routes';
import '../style/main.scss'
import Cookies from 'js-cookie';

export default function App() {
    const [loggedIn, setLoggedIn ] = useState(false);
    const logout = () => {
        if(Cookies.get('username')) {
            setLoggedIn(false);
            Cookies.remove('username');
        }
    }

    const login = () => {
        if(Cookies.get('username')) {
            setLoggedIn(true);
        }
    }
    
    const routeResult = useRoutes(routes);

    return(
        <div className='app'>
            <NavBar logout={logout} login={login} />
            {routeResult}
        </div>
    );
}