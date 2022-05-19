import React, { useState } from 'react';
import Home from '../pages/home';
import AddExpense from '../expense/addExpense';
import SignUp from '../auth/signUp';
import Login from '../auth/login'
import Charts from '../expense/charts';

const routes = {
    '/': () => <Home />,
    '/add': () => <AddExpense request={'add'} />,
    '/charts': () => <Charts  />,
    '/signup' : () => <SignUp />,
    '/login' : () => <Login />
}

export default routes;