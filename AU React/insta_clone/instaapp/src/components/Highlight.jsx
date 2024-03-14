import React from 'react'

export const Highlight = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <span><button className='flex items-center justify-center bg-gray-300 rounded-full w-16 h-16 text-5xl pb-2 font-thin'>+</button></span>
            <span className='text-lg'>New</span>
        </div>
    )
}
