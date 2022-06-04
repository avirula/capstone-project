import React from 'react';


export default function Expense(props) {
    const {id, name, occupation, pay, rent, vehicle_insurance, phone_bill, health_insurance, credit_card_bill, total_in_loans, tv_subscriptions_total, cable_bill, electric_bill,
        misc_expense_1, misc_expense_2, misc_expense_3, misc_expense_4, misc_expense_5, misc_expense_6, misc_expense_7, misc_expense_8} = props.expense;
    const array = [ rent, vehicle_insurance, phone_bill, health_insurance, credit_card_bill, total_in_loans, tv_subscriptions_total, cable_bill, electric_bill,
        misc_expense_1, misc_expense_2, misc_expense_3, misc_expense_4 ]; 
    const sum = array.reduce((a, b) => a + b, 0);
    console.log(sum);
    const left_over = pay - sum;
    console.log(left_over);

    return (
        <div key={id} className="expense-container main-body">
            
                <h1>Name: {name}</h1>
                <h3>Occupation: {occupation}</h3>
                <h3>Monthly Income: ${pay}</h3>
                <h3>Monthly Rent: ${rent}</h3>
                <h3>Vehicle Insurance: ${vehicle_insurance}</h3>
                <h3>Phone Bill: ${phone_bill}</h3>
                <h3>Health Insurance: ${health_insurance}</h3>
                <h3>Credit Card Bill: ${credit_card_bill}</h3>
                <h3> Total Loans Amount: ${total_in_loans}</h3>
                <h3>TV Subscriptions: ${tv_subscriptions_total}</h3>
                <h3>Cable Bill: ${cable_bill}</h3>
                <h3>Electric Bill: ${electric_bill}</h3>
                <h3>Misc Expense #1: ${misc_expense_1}</h3>
                <h3>Misc Expense #2: ${misc_expense_2}</h3>
                <h3>Misc Expense #3: ${misc_expense_3}</h3>
                <h3>Misc Expense #4: ${misc_expense_4}</h3>
                <h3>Monthly Deductions: ${sum}</h3>
                <h3>Monthly Left Over: ${left_over}</h3>
                

            <div className='btn-container'>
                <button className="btn" onClick={() => props.handleEditClick(props.expense)}>Edit</button>
                <button className="btn" onClick={() => props.handleDeleteClick(id)}>Delete</button>
            </div>
            
        </div>
        
    )
       
}
