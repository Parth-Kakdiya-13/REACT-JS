import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpnseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <>
        {!isEditing && <button className='flex mx-auto mt-5 w-4/6 p-10 bg-violet-400   rounded-full text-2xl text-black' onClick={startEditingHandler}><p className='bg-purple-800 flex mx-auto p-5 text-white rounded-full shadow-slate-900 shadow-inner'>Add New Expenses</p></button>}

      {isEditing && <ExpenseForm onSaveExpenseHandler={saveExpnseDataHandler} onCancle={stopEditingHandler} />}
    </>

  )
}
