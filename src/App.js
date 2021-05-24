import React from 'react';

import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses';

const App = () => {
  // array of objects (JS object) that will house elements for ExpenseItem.js
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <NewExpense />
      {/* 1. key value pair in array
          2. Adding attributes to element of Expense Item
          3. Dynamically retrieve {}, assigning values to attributes
          4. What we name here in attribute names has to MATCH in what you call in ExpenseItem.js
          5. expenses[0].title is the call of index 1 of array, title attribute
          6. title =, amount=, and date= can be named anything but makes sure props.[insert_here] matches
      */}
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
