import React from 'react';


export default function Expense(props) {
    const {name, occupation, pay, rent, vehicle_insurance, phone_bill} = props.expense;
    const array = [ rent, vehicle_insurance, phone_bill]; 
    const sum = array.reduce((a, b) => a + b, 0);
    console.log(sum);
    const left_over = pay - sum;
    console.log(left_over);

    return (
            
        <div key={name} className="expense-container main-body">
            
                <h1>Name: {name}</h1>
                <h3>Occupation: {occupation}</h3>
                <h3>Monthly Income: ${pay}</h3>
                <h3>Monthly Rent: ${rent}</h3>
                <h3>Vehicle Insurance: ${vehicle_insurance}</h3>
                <h3>Phone Bill: ${phone_bill}</h3>
                <h3>Monthly Deductions: ${sum}</h3>
                <h3>Monthly Left Over: ${left_over}</h3>

            <div className='btn-container'>
                <button className="btn" onClick={() => props.handleEditClick(props.expense)}>Edit</button>
                <button className="btn" onClick={() => props.handleDeleteClick(name)}>Delete</button>
            </div>
            
        </div>
        
    )
       
}
