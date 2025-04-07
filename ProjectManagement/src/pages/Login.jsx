import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/auth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const dispatch = useDispatch();

    const navigate = useNavigate()

    function changeHandler(event) {
        const { name, value } = event.target;
        setInput((prestate) => ({
            ...prestate,
            [name]: value
        }))
    }

    async function submitHandler(event) {
        event.preventDefault();
        dispatch(loginUser(input))
        setInput({
            email: "",
            password: ""
        })
        navigate('/')
    }

    return (
        <div className='bg-gradient-to-br from-teal-200  to-teal-500 h-screen flex flex-col pt-44 items-center'>
            <form onSubmit={submitHandler} className='flex gap-5 flex-col w-96 max-md:w-96 max-sm:w-full  p-10 shadow-2xl rounded-2xl'>
                <input className='p-2 rounded-md bg-white' type="text" name='email' placeholder='Email' value={input.email} onChange={changeHandler} required />
                <input className='p-2 rounded-md bg-white' type="password" name='password' placeholder='Password' value={input.password} onChange={changeHandler} required />
                <button className='bg-cyan-900 w-fit px-8 py-1 rounded-full text-white text-xl cursor-pointer hover:bg-blue-900'>Login</button>
            </form>
        </div>
    )
}
