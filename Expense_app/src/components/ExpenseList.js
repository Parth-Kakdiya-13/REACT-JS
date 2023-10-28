import React from "react";
import ExpenseItems from './ExpenseItems'

const ExpenseList = (props) => {



  if(props.item.length === 0){
    return <h2 className="text-white flex justify-center text-3xl font-bold mt-5 p-5 ">No expense found.</h2>
  }

    return (
        <>
        {props.item.map((expense) => (
            <ExpenseItems
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}
        </>
    )
}

export default ExpenseList;