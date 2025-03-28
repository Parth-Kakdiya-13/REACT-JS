import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { motion } from 'framer-motion'

export const DataForm = ({ onChangeFormData }) => {

    const [formData, setFormData] = useState({
        name: "",
        dateofbirth: "",
        place: "",
        rashi: "",
        height: "",
        education: "",
        cast: "",
        occupation: "",
        father: "",
        mother: "",
        siblings: "",
        status: "",
        native: "",
        property: "",
        contact: "",
        email: "",
        address: "",
    })

    const [isOpen, setIsOpen] = useState(true);
    const [isOpenFamily, setIsOpenFamily] = useState(false);
    const [isOpenContact, setIsOpenContact] = useState(false);

    function changeHanler(event) {
        const { name, value } = event.target
        setFormData((prevalue) => ({
            ...prevalue,
            [name]: value
        }))
        onChangeFormData(formData)
    }

    useEffect(() => {
        onChangeFormData(formData);
    }, [formData]);

    return (
        <form>
            <div className='flex flex-col gap-5 relative'>
                {/* personal details */}
                <div className=''>
                    <div className='hover:text-white transition-all duration-300 ease-in-out top-0 w-full p-2 rounded-md bg-red-500/50 cursor-pointer hover:bg-red-500' onClick={() => { setIsOpen(!isOpen); setIsOpenFamily(false); setIsOpenContact(false) }}
                    >
                        <h2 className='text-2xl font-semibold'>Personal Details</h2>
                    </div>
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className='mt-5 ml-10 overflow-hidden '
                    >
                        <label className='block mt-2 text-lg text-gray-500'>
                            Name:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='text' name='name' onChange={changeHanler} />
                        </label>
                        <label className='block mt-2 text-lg text-gray-500'>
                            Date of birth:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='date' name='dateofbirth' onChange={changeHanler} />
                        </label>
                        <label className='block mt-2 text-lg text-gray-500'>
                            Birth Place:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='text' name='place' onChange={changeHanler} />
                        </label>
                        <label className='block mt-2 text-lg text-gray-500'>
                            Rashi:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='text' name='rashi' onChange={changeHanler} />
                        </label>
                        <label className='block mt-2 text-lg text-gray-500'>
                            Height:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='text' name='height' onChange={changeHanler} />
                        </label>
                        <label className='block mt-2 text-lg text-gray-500'>
                            Religion/Cast:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='text' name='cast' onChange={changeHanler} />
                        </label>
                        <label className='block mt-2 text-lg text-gray-500'>
                            Highest Qualification:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='text' name='education' onChange={changeHanler} />
                        </label>
                        <label className='block mt-2 text-lg text-gray-500'>
                            Job/Occupation:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='text' name='occupation' onChange={changeHanler} />
                        </label>
                    </motion.div>
                </div>
                {/* family details */}
                <div>
                    <div className='hover:text-white transition-all duration-300 ease-in-out top-0 w-full p-2 rounded-md bg-green-500/50 cursor-pointer hover:bg-green-500' onClick={() => { setIsOpenFamily(!isOpenFamily); setIsOpen(false); setIsOpenContact(false) }}
                    >
                        <h2 className='text-2xl font-semibold'>Family Details</h2>
                    </div>
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={isOpenFamily ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className='mt-5 ml-10 overflow-hidden '
                    >
                        <label className='block mt-2 text-lg text-gray-500'>
                            Father name:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='text' name='father' onChange={changeHanler} />
                        </label>
                        <label className='block mt-2 text-lg text-gray-500'>
                            Mother name:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='text' name='mother' onChange={changeHanler} />
                        </label>
                        <label className='block mt-2 text-lg text-gray-500'>
                            Siblings:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='text' name='siblings' onChange={changeHanler} />
                        </label>
                        <label className='block mt-2 text-lg text-gray-500'>
                            Family status:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='text' name='status' onChange={changeHanler} />
                        </label>
                        <label className='block mt-2 text-lg text-gray-500'>
                            Native Place:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='text' name='native' onChange={changeHanler} />
                        </label>
                        <label className='block mt-2 text-lg text-gray-500'>
                            Property:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='text' name='property' onChange={changeHanler} />
                        </label>
                    </motion.div>
                </div>

                {/* contact details  */}
                <div>
                    <div className='hover:text-white transition-all duration-300 ease-in-out top-0 w-full p-2 rounded-md bg-blue-500/50 cursor-pointer hover:bg-blue-500' onClick={() => { setIsOpen(false); setIsOpenContact(!isOpenContact); setIsOpenFamily(false) }}
                    >
                        <h2 className='text-2xl font-semibold'>Contact Details</h2>
                    </div>
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={isOpenContact ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className='mt-5 ml-10 overflow-hidden '
                    >
                        <label className='block mt-2 text-lg text-gray-500'>
                            Conatact Number:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='text' name='contact' onChange={changeHanler} />
                        </label>
                        <label className='block mt-2 text-lg text-gray-500'>
                            Address:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='text' name='address' onChange={changeHanler} />
                        </label>
                        <label className='block mt-2 text-lg text-gray-500'>
                            Email:
                            <input className='w-full text-black p-1 text-md block bg-gray-300/50 rounded-md' type='email' name='email' onChange={changeHanler} />
                        </label>
                    </motion.div>
                </div>
                {/* image  */}
            </div>
            <Button classes="mt-5 w-fit h-fit bg-yellow-500/50 hover:bg-yellow-500">Submit</Button>
        </form>
    )
}
