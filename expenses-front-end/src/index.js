import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './components/navigation/navBar';
import Home from './components/pages/home';
import routes from  './components/navigation/routes';
import './style/main.scss';

export default function App () {
    const routeResult = useRoutes(routes);
}
    return (
        <div className='app'>
            <NavBar />
            {routeResult}
        </div>
    );



ReactDom.render(
    <App />
    , document.querySelector('app-wrapper'));
 