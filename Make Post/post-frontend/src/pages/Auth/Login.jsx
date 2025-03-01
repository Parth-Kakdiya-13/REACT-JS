import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Header/Button';
import { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';

export const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const authCtx = useContext(AuthContext)

    const navigate = useNavigate();

    async function submitHandler(event) {
        event.preventDefault();
        try {
            await authCtx.login(user)
            alert("Login Successfull")
            navigate('/')
        } catch (error) {
            if (error.response) {
                navigate('/login');
                console.error(error);
            }
        }

    }

    function changeHandler(event) {
        const { name, value } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <div className='flex w-1/3 max-sm:w-full mx-auto mt-10 border-2 border-fuchsia-900 rounded-xl p-5'>
            <form className='w-full' onSubmit={submitHandler}>
                <label className='block text-xl'>
                    Enter your email:
                </label>
                <input className='p-1 mt-1 rounded-sm w-full border-2 border-gray-500' type='email' value={user.email} name='email' onChange={changeHandler} />
                <label className='block text-xl mt-5'>
                    Enter your password:
                </label>
                <input className='p-1 mt-1 rounded-sm w-full border-2 border-gray-500' type='password' value={user.password} name='password' onChange={changeHandler} />
                <Button classes="w-fit" type="submit">
                    Login
                </Button>
            </form>
        </div>
    )
}
