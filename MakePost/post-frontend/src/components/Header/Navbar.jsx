import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Dialog } from '../Dialog';
import AnalogClock from '../Clock';
import Table from '../../assets/Table.png'
import Message from '../../assets/Message.png'
import Calender from '../../assets/Calender.png'

import { motion } from 'framer-motion'
import { Block } from '../Block';
import { Slider } from '../Slider';
import FloatingDiv from '../FloatingDiv';

export const Navbar = () => {

    const navigate = useNavigate();
    const [dialog, setDialog] = useState(false);
    const [isMoved, setIsMoved] = useState(false);


    let time = new Date();
    let day = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]



    async function logoutHandler() {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        setDialog(true)
    }



    return (
        <div className='flex max-[780px]:flex-col justify-center items-center max-[1020px]:items-start max-md:items-center'>
            <FloatingDiv />
            <div className='flex flex-col items-center  w-1/2 '>
                <div className='mt-10 relative flex flex-col items-start '>
                    <div className='max-md:px-10'>
                        <AnalogClock />
                    </div>
                    <div className='relative ml-44 max-[410px]:ml-20 max-md:mt-18'>
                        <div className='absolute'>
                            <h2 className='absolute font-semibold left-22 top-5 text-3xl text-green-500'>{day}</h2>
                            <h2 className='absolute left-12 top-9 text-lg text-green-500'>{months[month]}</h2>
                            <h2 className='absolute left-11 top-4 text-lg text-green-500'>{year}</h2>
                        </div>
                        <img src={Calender} className='w-[15rem] max-md:max-w-max' />
                    </div>
                </div>
                <div className='relative mt-28 max-md:mt-20'>
                    <img src={Table} className='w-[25rem] max-md:max-w-max max-sm:max-w-2xl' />
                    <motion.img initial={{ scale: 1 }} whileHover={{ scale: 1.2 }} src={Message} className='w-28 absolute top-7 left-60 cursor-pointer' />
                </div>
            </div>
            {/* Slider================================================ */}
            <div className='w-1/2 mt-10 flex max-lg:flex-col max-md:w-full' style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
                <Block />
                <Slider />
            </div>
            <Outlet />
        </div >
    )
}
