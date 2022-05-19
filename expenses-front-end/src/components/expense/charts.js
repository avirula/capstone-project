import React, { Component } from 'react';
import {PieChart, Pie, Cell } from'recharts';

class Charts extends Component {
  constructor () {
    super();

    this.state = {
      expenses: [],  
    };
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
    fetch('http://127.0.0.1:5000/expense/get')
    .then((response) => response.json())
    .then((name) => this.setState(() => {
    
      return{expenses: name}
    },
    () => {
      console.log(this.state);
    }
    ));
  }

  render () {
    console.log('render');
    return (
      <div className="App">
        <div className="Title">Expenses Pie Chart</div>
        
        {this.state.expenses.map((expense) => {
          const COLORS = ['Blue', 'Red', 'Orange', 'Yellow', 'Purple', 'Green'];
          
          const pay = expense.pay;
          const rent = expense.rent;
          const vehicleInsurance = expense.vehicle_insurance;
          const phoneBill = expense.phone_bill;

          const array = [ rent, vehicleInsurance, phoneBill];
          const sum = array.reduce((a, b) => a + b, 0);
          const leftOver = pay - sum; 
          console.log(leftOver);

          const data = [
            {name: 'Income', value: expense.pay },
            {name: 'User Rent', value: expense.rent },
            {name: 'User Vehicle Insurance', value: expense.vehicle_insurance},
            {name: 'User Phone Bill', value: expense.phone_bill},
            {name: 'Total Expenses', value: sum},
            {name: 'Monthly Left Over', value: leftOver},

          ]
          
          const RADIAN = Math.PI / 180;
          const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
            

            return (
              <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
              </text>
              
            );
          };


            return <div className="Expenses" key={expense.name}>
              <div className="rendered-expenses">
              <h1>Name: {expense.name}</h1>
              <h1>Occupation: {expense.name}</h1>
              <h1>Income: ${expense.pay}</h1>
              <h1>Monthly Rent: ${expense.rent}</h1>
              <h1>Vehicle Insurance: ${expense.vehicle_insurance}</h1>
              <h1>Phone Bill: ${expense.phone_bill}</h1>
              <h1>Total Expense: ${sum}</h1>
              <h1>Left Over: ${leftOver}</h1>
              </div>
              
              
              <div className="Pie Chart">
                    <PieChart width={450} height={450}>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill='#8884d8'
                        dataKey="value"
                        labels="labels"
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
              </div>       
            </div>
          })
        };
              
      </div>
    );

  }
  
}

export default Charts;
