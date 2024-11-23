import React, { forwardRef } from 'react'
const classes = 'w-full p-1 border-b-2 roundes-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'


const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
    return (
        <p className='flex flex-col gap-1 my-4'>
            <label className='text-sm font-bold uppercase text-stone-500'>{label}</label>
            {textarea ? <textarea className={classes} {...props} ref={ref}></textarea> : <input className={classes} {...props} ref={ref} />}
        </p>
    )
})

export default Input;
