import React, { useEffect, useState } from 'react'
import API from '../../API/API'
import { motion } from 'framer-motion';

export const TaskLists = () => {

    const [tasks, setTasks] = useState([]);

    const token = localStorage.getItem('token')


    useEffect(() => {
        async function fetchTasks() {
            try {
                const response = await API.get('/admin/getTasks', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                setTasks(response.data.data)
                console.log(response.data.data)
            } catch (error) {

            }
        }
        fetchTasks()
    }, [])

    if (tasks.length === 0) {
        return <p className='text-center mt-10'>No Tasks Assigned.</p>
    }

    return (
        <div className='flex flex-wrap gap-5 m-10'>
            {tasks.map((items) => {
                const formattedDate = new Date(items.date).toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                });

                return <motion.ul
                    key={items._id}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => navigateToAssignTask(items)}
                    className='flex flex-col gap-2 w-fit max-sm:w-full p-5 bg-gradient-to-br from-teal-200 to-teal-500 rounded-md shadow-2xl'>
                    <div className='flex justify-between bg-cyan-700 p-2 rounded-md text-white'>
                        <li className='text-xl capitalize'>{items.createdBy.name}</li>
                        <li className='text-xl capitalize'>{items.assignedTo.name}</li>
                    </div>
                    <div className='capitalize text-white p-2 rounded-md'>
                        <li className='capitalize'><span className='text-lg block text-black'>title:</span> {items.title}</li>
                        <li className='capitalize'><span className='text-lg block text-black'>description:</span> {items.description}</li>
                        <li className='capitalize'><span className='text-lg block text-black'>date:</span> {formattedDate}</li>
                        <li className='capitalize'><span className='text-md block text-black'>Status:</span> {items.status}</li>
                    </div>
                </motion.ul>
            })}
        </div>
    )
}
