import React, { useState } from 'react'

export default function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // });


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
      

        // }
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
        // setUserInput((preState)=>{
        //     return {...preState, enteredTitle:event.target.value};
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     enteredAmount:event.target.value      
        // })
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     enteredDate:event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseHandler(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

       
    };

 


    return (
        <>
            <div className=' bg-violet-400 rounded-2xl m-auto w-4/6 pb-10'>
                <form className='mt-10 flex flex-col justify-center w-auto' onSubmit={submitHandler}>
                    <div className='flex max-sm:flex-col'>
                        <div className='block text-black ml-10 mt-10'>
                            <label className=' text-3xl  block font-bold'>Title :</label>
                            <input className='w-96 p-3 text-black max-2xl:w-96 max-xl:w-80 max-lg:w-40 min-lg:w-40 max-md:w-40 max-sm:w-30' type="text" value={enteredTitle} onChange={titleChangeHandler}  style={{borderRadius:"5px"}}/>
                        </div>
                        <div className='block  text-black ml-10 mt-10'>
                            <label className=' text-3xl block font-bold'>Amount :</label>
                            <input className='w-96 p-3 text-black max-2xl:w-96 max-xl:w-80 max-lg:w-40 min-lg:w-60 max-md:w-40 max-sm:w-30' type="number" min="0" max="10000" value={enteredAmount}  onChange={amountChangeHandler}  style={{borderRadius:"5px"}}/>
                        </div>
                    </div>
                    <div className='block  h-10  text-black  mt-10 ml-10'>
                        <label className='text-3xl block font-bold'>Date :</label>
                        <input className='text-black w-96 p-3 font-bold max-2xl:w-96 max-xl:w-90 max-lg:w-60 max-md:w-40 max-sm:w-30' type="date" min="2019 - 01 - 01" max="2022 - 12 - 31" value={enteredDate}  onChange={dateChangeHandler} style={{borderRadius:"5px"}} />
                    </div>
                    <div className='justify-end flex mx-10 mt-20'>
                        <button onClick={props.onCancle} className='text-3xl pl-5 pr-5 mx-5 justify-center flex items-center h-20 bg-purple-900 hover:bg-purple-800   text-white rounded-3xl' style={{ border: "2px solid white" }} type="button">Cancle</button>
                        <button className=' text-3xl w-60 justify-center flex items-center h-20 bg-purple-900 hover:bg-purple-800   text-white rounded-3xl' style={{ border: "2px solid white" }} type='submit'>Add Expenses</button>
                    </div>
                </form>
            </div>
        </>
    )
}
