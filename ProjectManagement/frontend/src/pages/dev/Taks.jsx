import React, { useEffect, useState } from 'react'
import API from '../../API/API'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export const Taks = () => {

    const [tasks, setTasks] = useState([])

    const token = localStorage.getItem("token");

    const navigate = useNavigate()


    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchTasksByStatus = async (status) => {
            try {
                const response = await API.get(`/developer/mytasks/status?status=${status}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setTasks(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTasksByStatus("pending")
        // if (activeTab === "complete") {
        //     fetchTasksByStatus("complete");
        // } else if (activeTab === "fail") {
        //     fetchTasksByStatus("fail");
        // }
    }, []); // call when tab changes


    async function markAsComplete(id) {
        const response = await API.put(`/developer/updatestatus/${id}`, { status: "complete" }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        navigate('/developer/complete')
    }

    async function markAsFail(id) {
        const response = await API.put(`/developer/updatestatus/${id}`, { status: "fail" }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        navigate('/developer/fail')
    }

    if (tasks.length === 0) {
        return <p className='text-center mt-10'>No Task Found.</p>
    }

    return (
        <div className='flex flex-wrap gap-5 m-10'>
            {tasks.map((items) => {
                const formateDate = new Date(items.date).toLocaleString('en-IN', {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                })
                return <motion.ul
                    key={items._id}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className='flex flex-col gap-2 w-fit p-5 bg-gradient-to-br from-teal-200 to-teal-500 rounded-md shadow-2xl '>
                    <li className='text-xl capitalize'>{items.title}</li>
                    <li className=''>{items.description}</li>
                    <li className=''>{formateDate}</li>
                    <div className='flex gap-2 mt-5'>
                        <button className='bg-cyan-700 text-white rounded-md text-lg px-5 py-1 mt-auto cursor-pointer' onClick={() => markAsComplete(items._id)}>Completed</button>
                        <button className='bg-gray-700 text-white rounded-md text-lg px-5 py-1 mt-auto cursor-pointer' onClick={() => markAsFail(items._id)}>Failed</button>
                    </div>
                </motion.ul>
            })}
        </div>
    )
}
