import React, { Component } from 'react';

class Table extends Component {
    constructor () {
      super();
      this.state = {
        expenses: [],
      };
    }
    
    componentDidMount() {
      // console.log('componentDidMount');
      fetch('http://127.0.0.1:5000/expense/get')
      .then((response) => response.json())
      .then((name) => this.setState(() => {
      
        return{expenses: name}
      },
      () => {
        // console.log(this.state);
      }
      ));
    }
  
    render() {
      
      return (
        <div className="table-wrapper">          
  
        {this.state.expenses.map((expense) => {

          const name = expense.name;
          const pay = expense.pay;
          const occupation = expense.occupation;
          const rent = expense.rent;
          const vehicleInsurance = expense.vehicle_insurance;
          const phoneBill = expense.phone_bill;
          const healthInsurance = expense.health_insurance;
          const creditCardBill = expense.credit_card_bill;
          const totalInLoans = expense.total_in_loans;
          const tvSubscriptionsTotal = expense.tv_subscriptions_total;
          const cableBill = expense.cable_bill;
          const electricBill = expense.electric_bill;
          const miscExpense1 = expense.misc_expense_1;
          const miscExpense2 = expense.misc_expense_2;
          const miscExpense3 = expense.misc_expense_3;
          const miscExpense4 = expense.misc_expense_4;

          const array = [ rent, vehicleInsurance, phoneBill, healthInsurance, creditCardBill, totalInLoans, tvSubscriptionsTotal, cableBill, electricBill,
            miscExpense1, miscExpense2, miscExpense3, miscExpense4 ]; 
          const sum = array.reduce((a, b) => a + b, 0);
          // console.log(sum);
          const left_over = pay - sum;
          // console.log(left_over);

          const username = document.cookie;
          

          if (username === null || username === '') {
            return (
                "Your login has expired. Please login to see your expenses!"
            );
          } else {

            return (
                  <div key={expense.id} className="table">
                    <h1>{name}'s Expense Table:</h1>
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Occupation</th>
                          <th>Monthly Income</th>
                          <th>Monthly Expense Total</th>
                          <th>Monthly Left Over</th>
                          <th>Monthly Rent</th>
                          <th>Car Insurance</th>
                          <th>Phone Bill</th>
                          <th>Health Insurance</th>
                          <th>Credit Card Bills</th>
                          <th>Total in Loans</th>
                          <th>TV Subscriptions</th>
                          <th>Cable Bill</th>
                          <th>Electric Bill</th>
                          <th>Misc Expense #1</th>
                          <th>Misc Expense #2</th>
                          <th>Misc Expense #3</th>
                          <th>Misc Expense #4</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{name}</td>
                          <td>{occupation}</td>
                          <td>${pay}</td>
                          <td>${sum}</td>
                          <td>${left_over}</td>
                          <td>${rent}</td>
                          <td>${vehicleInsurance}</td>
                          <td>${phoneBill}</td>
                          <td>$1{healthInsurance}</td>
                          <td>${creditCardBill}</td>
                          <td>${totalInLoans}</td>
                          <td>${tvSubscriptionsTotal}</td>
                          <td>${cableBill}</td>
                          <td>${electricBill}</td>
                          <td>${miscExpense1}</td>
                          <td>${miscExpense2}</td>
                          <td>${miscExpense3}</td>
                          <td>${miscExpense4}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div> 
                  ); 
                }   
              })}
        </div>
      )
    }
  }
  export default Table;