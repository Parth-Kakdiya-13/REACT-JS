import React, { useState } from 'react'

export const InputForm = (props) => {
    const [r, setR] = useState();
    const [h, setH] = useState();
    const [gh, setgh] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        props.onGetdata([r, h, gh]);
    }


    return (
        <div>
            <form onSubmit={submitHandler} className='flex flex-col items-start'>
                <label className='text-2xl'>Enter Radius:</label>
                <input type='text' className='border border-black p-1 rounded-lg block' onChange={(e) => setR(e.target.value)} />
                <label className='text-2xl'>Enter Height:</label>
                <input type='text' className='border border-black p-1 rounded-lg block' onChange={(e) => setH(e.target.value)} />
                <label className='text-2xl'>Enter Height of water</label>
                <input type='text' className='border border-black p-1 rounded-lg block' onChange={(e) => setgh(e.target.value)} />
                <button type='submit' className='px-5 py-2 bg-blue-500 mt-5 text-white text-xl rounded-xl'>Submit</button>
            </form>
        </div>
    )
}
