import React from 'react'

export default function ExpenseDate(props) {

    const month = props.date.toLocaleString('en-US', { month: "long" });
    const day = props.date.toLocaleString('en-US', { day: "2-digit" });
    const year = props.date.getFullYear();

    return (
        <>
            <div className='w-36 flex flex-col justify-center rounded-2xl bg-black items-center border-2 border-white'>
                <h2 className='text-white text-2xl'>{month}</h2>
                <h2 className='text-white'>{year}</h2>
                <h2 className='text-white text-4xl font-bold'>{day}</h2>
            </div>
        </>
    )
}
