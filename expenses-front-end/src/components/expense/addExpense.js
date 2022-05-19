import React, { useState, useEffect } from 'react';
import { navigate } from 'hookrouter';
import { attributes } from 'js-cookie';

export default function AddExpense(props) {
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [pay, setPay] = useState(0);
    const [rent, setRent] = useState(0);
    const [vehicle_insurance, setVehicleInsurance] = useState(0);
    const [phone_bill, setPhoneBill] = useState(0);
    const [requestType, setRequestType] = useState(props.request);
    const [request, setRequest] = useState('');
    const [expenseToEdit, setExpenseToEdit] = useState(props.expense);
    const [endPoint, setEndPoint] = useState('');

   
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(endPoint, {
            method: request, 
            headers: {
                'content-type' : 'application/json'
            },

            body: JSON.stringify({
                name: name,
                occupation: occupation,
                pay: pay,
                rent: rent,
                vehicle_insurance: vehicle_insurance,
                phone_bill: phone_bill
                
                
            })
        }).then (res => {
            if(props.edit === true) {
                props.handleEditSubmit()
            } else {
                navigate('/');
            }
        })
    }

    useEffect( () => {
        console.log(expenseToEdit, request, requestType, endPoint)
        if(requestType === 'add') {
            setEndPoint('http://127.0.0.1:5000/expense/add');
            setRequest('POST');
        } else if (requestType === 'update') {
            setEndPoint(`http://127.0.0.1:5000/expense/update/${expenseToEdit}`);
            setRequest('PUT');

            if(expenseToEdit) {
                setName(expenseToEdit.name);
                setOccupation(expenseToEdit.occupation);
                setPay(expenseToEdit.pay);
                setRent(expenseToEdit.rent);
                setVehicleInsurance(expenseToEdit.vehicle_insurance);
                setPhoneBill(expenseToEdit.phone_bill);
            }
        }

    }, []);
    
    return (
        <form className='add-expense-form' onSubmit={handleSubmit} >
            <div className='expense-from-inputs'>
                <input type='text' placeholder='name' name='name' onChange={(e) => setName(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.name : ''} />
                <input type='text' placeholder='occupation' name='occupation' onChange={(e) => setOccupation(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.occupation : ''} />
                <input type='number' placeholder='pay' name='pay' onChange={(e) => setPay(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.pay : ''} />
                <input type='number' placeholder='rent' name='rent' onChange={(e) => setRent(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.rent : ''} />
                <input type='number' placeholder='vehicle insurance' name='vehicle insurance' onChange={(e) => setVehicleInsurance(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.vehicle_insurance : ''} />
                <input type='number' placeholder='phone bill' name='phone bill' onChange={(e) => setPhoneBill(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.phone_bill : ''} />
                <button type='submit' className='btn'>Submit</button>
            </div>
            
        </form>
    )
}
