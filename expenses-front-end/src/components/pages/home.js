import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Expense from '../expense/expense';
import AddExpense from '../expense/addExpense';


export default  function Home(props) {
    const [allExpenses, setAllExpenses] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [expenseToEdit, setExpenseToEdit] = useState({});
    const [editMode, setEditMode] = useState(false);

    const getAllExpenses = () => {
        axios.get('http://127.0.0.1:5000/expense/get')
        .then(res => {
            setAllExpenses(res.data);
            console.log(res.data);
        })
        .catch(error => {
            console.log(`An error has occured with your API 'GET' request --> ${error}`);
        });
    }

    const handleEditClick = (expense) => {
        setExpenseToEdit(expense);
        setEditMode(true);
    }

    const handleEditSubmit = () => {
        setEditMode(false);
        getAllExpenses();
    }

    const handleDeleteClick = (id) => {
        axios.delete(`http://127.0.0.1:5000/expense/delete/${id}`)
        .then(res => {
            setAllExpenses(allExpenses.filter(expense => {
                return expense.id != id;
            }));
        })
        .catch(error => {
            console.log('An error has occured while deleting your expense.', error);
        })
    }

    const renderExpenses = () => {
        return allExpenses.map(expense => {
            return <div key={expense.id}><Expense expense={expense} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                    </div>
                 
                    
        })
    }

    useEffect(() => {
        getAllExpenses();
        if(Cookies.get('username')) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [])


    return (
        <div className='home-page-container'>
            <div className='username-title'>
                <h1>Welcome {loggedIn ? Cookies.get('username') : ''}</h1>
            </div>
            <div className='expenses-container'>
                {editMode ? <AddExpense expense={expenseToEdit} edit={editMode} request={'update'} handleEditSubmit={handleEditSubmit}/> 
                : loggedIn ? renderExpenses() : 'Please sign up or log in to continue'}
            </div>
            
        </div>
        
    )
}