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
        <div className='my-12 p-5 rounded-xl bg-gray-100 flex flex-col items-center justify-center'>
            <form onSubmit={submitHandler} className='flex flex-col items-start'>
                <label className='text-2xl'>Enter Radius in Meters :</label>
                <input type='text' className='border border-black w-full p-1 rounded-lg block' onChange={(e) => setR(e.target.value)} />
                <label className='text-2xl mt-3'>Enter Height in Meter :</label>
                <input type='text' className='border border-black w-full p-1 rounded-lg block' onChange={(e) => setH(e.target.value)} />
                <label className='text-2xl mt-3'>Enter Height of water in Meter :</label>
                <input type='text' className='border border-black w-full p-1 rounded-lg block' onChange={(e) => setgh(e.target.value)} />
                <button type='submit' className='px-5 py-2 bg-blue-500 mt-5 text-white text-xl rounded-xl'>Submit</button>
            </form>
        </div>
    )
}
