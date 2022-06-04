import React, { Component } from "react";
import { Chart } from "react-google-charts";

class Charts extends Component {
  constructor (){
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
  
  render () {

    return (
      <div className='my-chart-wrapper'>
          
          {this.state.expenses.map((expense) => {
            const name = expense.name;
            const pay = expense.pay;
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

            const array = [ rent, vehicleInsurance, phoneBill, healthInsurance, creditCardBill, totalInLoans, tvSubscriptionsTotal,
            cableBill, electricBill, miscExpense1, miscExpense2, miscExpense3, miscExpense4 ];
            const sum = array.reduce((a, b) => a + b, 0);
            const leftOver = pay - sum; 
            // console.log(leftOver);

            const options = {
              title: `${name}'s Monthly Income: $${pay}`,
              is3D: true,
            };

            const data = [
              ["Expense Type", "Expense"],
              ["Rent", rent],
              ["Montlhy Remaining Balance", leftOver],
              ["Car Insurance", vehicleInsurance],
              ["Phone Bill", phoneBill],
              ["Health Insurance", healthInsurance],
              ["Credit Card Bills Total", creditCardBill],
              ["Total in Loans", totalInLoans],
              ["TV Subscriptions", tvSubscriptionsTotal],
              ["Cable Bill", cableBill],
              ["Electric Bill", electricBill],
              ["Misc Expense 1", miscExpense1],
              ["Misc Expense 2", miscExpense2],
              ["Misc Expense 3", miscExpense3],
              ["Misc Expense 4", miscExpense4],
            ];

            const username = document.cookie;
            console.log(username);
            if (username === null || username === '' ) {

              return (
                <div>
              
                </div>
                
              );
            }else {
              return (
                <div key={expense.id} className='my-chart'>
                      <Chart
                      chartType="PieChart"
                      data={data}
                      options={options}
                      width={"100%"}
                      height={"500px"}
                      />
                </div>
              )
            }            
          })}
      </div>
    );
  }
}

export default Charts;