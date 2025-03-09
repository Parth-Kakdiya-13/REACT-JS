import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    async function logoutHandler() {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        alert("Logout Successfull");
        navigate("/login");
    }


    return (
        <>
            <div className='bg-fuchsia-900 flex justify-between items-center p-3 text-white'>
                <h2 className='border-2 border-white p-2 text-xl'>Message Node</h2>
                <ul className='flex gap-5 items-center mr-5 text-lg'>
                    <li className='cursor-pointer'> <Link to='/'>Feed</Link></li>
                    {!localStorage.getItem("token") && <li className='cursor-pointer'><Link to='/login'>Login</Link></li>}
                    {!localStorage.getItem("token") && <li className='cursor-pointer'><Link to='/signup'>Signup</Link></li>}
                    {localStorage.getItem("token") && <li className='cursor-pointer'><Link to='/myposts'>My Posts</Link></li>}
                    {localStorage.getItem("token") && <li className='cursor-pointer'>
                        <button className='cursor-pointer' type='button' onClick={logoutHandler}>Logout</button>
                    </li>}
                </ul>
            </div>
            <Outlet />
        </>
    )
}
