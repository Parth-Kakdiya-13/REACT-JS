import React, { useState } from 'react'
import logo from '../assets/icon.png'
import { Button } from './Button'
import menu from '../assets/menu.png'
import close from '../assets/close.png'
import { Outlet, useLocation, Link } from 'react-router-dom'
import RandomEmojis from './Test2'

export const Navbar = () => {

    const [bar, setBar] = useState(false);

    const location = useLocation();

    const isActive = (path) => location.pathname === path;


    function showNavBarHandler() {
        setBar((bar) => !bar)
    }

    return (
        <>
            <header className='sticky left-0 top-0 w-full shadow-2xl bg-white rounded-md z-100'>
                <nav className='flex justify-between md:px-20 lg:px-28 '>
                    <div className='flex items-center max-md:hidden'>
                        <img src={logo} className='max-w-2xl h-20 relative z-50 ' />
                        <h2 className='flex flex-col text-sm'>Create<span className='text-yellow-500/50 font-semibold text-2xl uppercase'>Bio</span></h2>
                    </div>
                    <div className=' md:hidden'>
                        {!bar && <img src={menu} className='w-10 h-10 cursor-pointer fixed right-8 top-3 z-50' onClick={showNavBarHandler} />}
                        {bar && <img src={close} className='w-10 h-10 cursor-pointer fixed right-8 top-3 z-50' onClick={showNavBarHandler} />}
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center fixed left-10  z-50 md:hidden'>
                            <img src={logo} className='w-20 h-20 ' />
                            <h2 className='flex flex-col text-sm'>Create<span className='text-yellow-500/50 font-semibold text-2xl uppercase'>Bio</span></h2>
                        </div>
                        <ul className={`flex items-center max-md:w-full max-md:h-full max-md:items-start max-md:flex-col max-md:fixed max-md:left-0 transition-all duration-300 ease-in-out ${!bar ? 'max-md:-top-full' : 'max-md:top-0'}   max-md:bg-white max-md:pt-24 max-md:pl-10`}>
                            <li className={`hover:bg-yellow-500/50 px-5 py-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${isActive('/') ? 'bg-yellow-500/50' : ' '}`} onClick={() => setBar(false)}>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li className={`hover:bg-yellow-500/50 px-5 py-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${isActive('/templates') ? 'bg-yellow-500/50' : ' '}`} onClick={() => setBar(false)}>
                                <Link to="/templates">
                                    Templates
                                </Link>
                            </li>
                            <li className={`hover:bg-yellow-500/50 px-5 py-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${isActive('/about') ? 'bg-yellow-500/50' : ' '}`} onClick={() => setBar(false)}>
                                <Link to="/about">
                                    About Us
                                </Link>
                            </li>
                            <li className={`hover:bg-yellow-500/50 px-5 py-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${isActive('/contact') ? 'bg-yellow-500/50' : ' '}`} onClick={() => setBar(false)}>
                                <Link to="/contact">
                                    Contact Us
                                </Link>
                            </li>
                            <li className={`hover:bg-yellow-500/50 px-5 py-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer  ${isActive('/login') ? 'bg-yellow-500/50' : ' '}`} onClick={() => setBar(false)}>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    )
}
