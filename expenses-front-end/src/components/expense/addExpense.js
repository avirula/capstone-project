import React, { useState, useEffect } from 'react';
import { navigate } from 'hookrouter';

export default function AddExpense(props) {
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [pay, setPay] = useState(0);
    const [rent, setRent] = useState(0);
    const [vehicle_insurance, setVehicleInsurance] = useState(0);
    const [phone_bill, setPhoneBill] = useState(0);
    const [health_insurance, setHealthInsurance] = useState(0);
    const [credit_card_bill, setCreditCardBill] = useState(0);
    const [total_in_loans, setTotalInLoans] = useState(0);
    const [tv_subscriptions_total, setTvSubcriptionsTotal] = useState(0);
    const [cable_bill, setCableBill] = useState(0);
    const [electric_bill, setElectricBill] = useState(0);
    const [misc_expense_1, setMiscExpense1] = useState(0);
    const [misc_expense_2, setMiscExpense2] = useState(0);
    const [misc_expense_3, setMiscExpense3] = useState(0);
    const [misc_expense_4, setMiscExpense4] = useState(0);

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
                phone_bill: phone_bill,
                health_insurance: health_insurance,
                credit_card_bill: credit_card_bill,
                total_in_loans: total_in_loans,
                tv_subscriptions_total: tv_subscriptions_total,
                cable_bill: cable_bill,
                electric_bill: electric_bill,
                misc_expense_1: misc_expense_1,
                misc_expense_2: misc_expense_2,
                misc_expense_3: misc_expense_3,
                misc_expense_4: misc_expense_4    
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
            setEndPoint(`http://127.0.0.1:5000/expense/update/${expenseToEdit.id}`);
            setRequest('PUT');

            if(expenseToEdit) {
                setName(expenseToEdit.name);
                setOccupation(expenseToEdit.occupation);
                setPay(expenseToEdit.pay);
                setRent(expenseToEdit.rent);
                setVehicleInsurance(expenseToEdit.vehicle_insurance);
                setPhoneBill(expenseToEdit.phone_bill);
                setHealthInsurance(expenseToEdit.health_insurance);
                setCreditCardBill(expenseToEdit.credit_card_bill);
                setTotalInLoans(expenseToEdit.total_in_loans);
                setTvSubcriptionsTotal(expenseToEdit.tv_subscriptions_total);
                setCableBill(expenseToEdit.cable_bill);
                setElectricBill(expenseToEdit.electric_bill);
                setMiscExpense1(expenseToEdit.misc_expense_1);
                setMiscExpense2(expenseToEdit.misc_expense_2);
                setMiscExpense3(expenseToEdit.misc_expense_3);
                setMiscExpense4(expenseToEdit.misc_expense_4);
            }
        }

    }, []);

        const username = document.cookie;
        
        if (username === null | username === '') {
            return (
                <div>

                </div>
            );
        } else {
    
            return (
                <form className='add-expense-form' onSubmit={handleSubmit} >
                    <div className='expense-from-inputs'>
                        <h1>Please Add your expenses here: </h1>
                        <input type='text' placeholder='name' name='name' onChange={(e) => setName(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.name : ''} />
                        <input type='text' placeholder='occupation' name='occupation' onChange={(e) => setOccupation(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.occupation : ''} />
                        <input type='number' placeholder='pay' name='pay' onChange={(e) => setPay(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.pay : ''} />
                        <input type='number' placeholder='rent' name='rent' onChange={(e) => setRent(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.rent : ''} />
                        <input type='number' placeholder='vehicle insurance' name='vehicle insurance' onChange={(e) => setVehicleInsurance(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.vehicle_insurance : ''} />
                        <input type='number' placeholder='phone bill' name='phone bill' onChange={(e) => setPhoneBill(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.phone_bill : ''} />
                        <input type='number' placeholder='health insurance' name='health insurance' onChange={(e) => setHealthInsurance(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.health_insurance : ''} />
                        <input type='number' placeholder='credit card bill' name='credit card bill' onChange={(e) => setCreditCardBill(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.credit_card_bill : ''} />
                        <input type='number' placeholder='total in loans' name='total in loans' onChange={(e) => setTotalInLoans(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.total_in_loans : ''} />
                        <input type='number' placeholder='tv subscriptions total' name='tv subscriptions total' onChange={(e) => setTvSubcriptionsTotal(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.tv_subscriptions_total : ''} />
                        <input type='number' placeholder='cable bill' name='cable bill' onChange={(e) => setCableBill(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.cable_bill : ''} />
                        <input type='number' placeholder='electric bill' name='electric bill' onChange={(e) => setElectricBill(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.electric_bill : ''} />
                        <input type='number' placeholder='misc expense #1' name='misc expense #1' onChange={(e) => setMiscExpense1(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.misc_expense_1 : ''} />
                        <input type='number' placeholder='misc expense #2' name='misc expense #2' onChange={(e) => setMiscExpense2(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.misc_expense_2 : ''} />
                        <input type='number' placeholder='misc expense #3' name='misc expense #3' onChange={(e) => setMiscExpense3(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.misc_expense_3 : ''} />
                        <input type='number' placeholder='misc expense #4' name='misc expense #4' onChange={(e) => setMiscExpense4(e.target.value)} defaultValue={expenseToEdit ? expenseToEdit.misc_expense_4 : ''} />
                    
                        <button type='submit' className='btn'>Submit</button>
                    </div>
                    
                </form>
            )

        }   
}
