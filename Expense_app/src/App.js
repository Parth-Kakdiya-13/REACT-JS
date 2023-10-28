import React, { useState } from 'react';
import './App.css';
import Expenses from './Components/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';


const DUMMYEXPENSES = [
  {
    id: "i1",
    title: "Vagitables",
    amount: 2500,
    date: new Date(2022, 1, 5)
  },
  {
    id: "i2",
    title: "Provision Store",
    amount: 5000,
    date: new Date(2022, 2, 7)
  },
  {
    id: "i3",
    title: "Milk",
    amount: 1950,
    date: new Date(2022, 3, 3)
  },
  {
    id: "i4",
    title: "Toilet Paper",
    amount: 2500,
    date: new Date(2019, 4, 13)
  },
  {
    id: "i5",
    title: "Lightbill",
    amount: 1500,
    date: new Date(2019, 5, 10)
  }

]


function App() {

  const [expenses, setExpsense] = useState(DUMMYEXPENSES)

  const addExpenseHandler = (expense) => {
    setExpsense((preExpenses) => {
      return [expense, ...preExpenses]
    })
  }





  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </>
  );
}

export default App;
