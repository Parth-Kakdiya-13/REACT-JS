import React, { useState } from 'react'

import ExpenseChart from './Chart/ExpensesChart';
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList';



export default function Expenses(props) {


    const [filteredYear, setFilteredYear] = useState('2019');

    const filterChangeHandler = (selectedYear) => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.item.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    // or put the below statement under the expenseFilter tag///

    // {filteredExpenses.length === 0 ? (<p>No expenses found.</p>) : (filteredExpenses.map((expense) => (
    //     <ExpenseItems
    //         key={expense.id}
    //         title={expense.title}
    //         amount={expense.amount}
    //         date={expense.date}
    //     />
    // )))}

    return (
        <>

            <div className='bg-black w-4/6 m-auto p-5 rounded-3xl mt-10'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpenseList item={filteredExpenses} />
            </div>
        </>

    )
}
