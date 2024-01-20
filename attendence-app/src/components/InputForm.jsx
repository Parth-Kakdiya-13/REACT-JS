import React from 'react'

export const InputForm = (props) => {

    const searchHandler = (event) => {
        // console.log(event.target.value);
        props.onGetInput(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='felx mt-2'>
                    <input className='p-2 border border-2 rounded-lg' placeholder='Search...' onChange={searchHandler} />
                    {/* <button type='submit' className='px-3 py-2 bg-blue-500 text-white rounded-xl ml-2'>Search</button> */}
                </div>
            </form>
        </div>
    )
}
