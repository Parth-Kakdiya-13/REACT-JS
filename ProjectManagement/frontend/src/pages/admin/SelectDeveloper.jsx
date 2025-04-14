import React, { useEffect, useState, useContext } from 'react'
import API from '../../API/API';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { assignTask } from '../../utils/AssighTaskContext';

export const SelectDeveloper = () => {

    const [developer, setDeveloper] = useState([]);

    const navigate = useNavigate();

    const taskCtx = useContext(assignTask)

    useEffect(() => {
        async function fetchData() {

            const response = await API.get('/admin/getDeveloper', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            setDeveloper(response.data.data)
        }
        fetchData()
    }, []);

    function navigateToAssignTask(details) {
        taskCtx.selectDeveloper(details)
        navigate('/admin-dashboard/assigntask')
    }

    return (
        <div>
            <div className='flex flex-wrap gap-5 m-10'>
                {developer.map((items) => {
                    return <motion.ul
                        key={items._id}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => navigateToAssignTask(items)}
                        className='flex flex-col gap-2 w-52 p-5 bg-gradient-to-br from-teal-200 to-teal-500 rounded-md shadow-2xl cursor-pointer'>
                        <li className='text-xl capitalize'>{items.name}</li>
                        <li className=''>{items.designation}</li>
                    </motion.ul>
                })}
            </div>
        </div>
    )
}
