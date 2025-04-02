import React from 'react'
import profileimage from '../assets/pk_01.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

export const Profile = () => {
    return (
        <Link to="/profile">
            <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className='flex max-lg:flex-col gap-5 items-center bg-blue-950 rounded-xl p-2 cursor-pointer'>
                <img src={profileimage} className='w-16 max-md:w-fit max-lg:w-full  max-md:h-52 object-cover rounded-xl' alt="profileimage" />
                <div className='flex flex-col justify-center items-start max-md:items-center text-white text-xs'>
                    <h2>Parth  Patel</h2>
                    <p className='text-gray-500'>Creator and learner</p>
                </div>
            </motion.div>
        </Link>
    )
}
