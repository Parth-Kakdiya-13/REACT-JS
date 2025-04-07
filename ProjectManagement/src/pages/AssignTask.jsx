import React, { useContext, useState } from 'react'
import { assignTask } from '../utils/AssighTaskContext';
import API from '../API/API';
import { useDispatch } from 'react-redux';
import { notificationAction } from '../store/notification';
import { useNavigate } from 'react-router-dom';

export const AssignTask = () => {

    const [task, setTask] = useState({
        title: "",
        description: "",
        date: ""
    });

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const adminId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    const taskCtx = useContext(assignTask);

    function changeHandler(event) {
        const { name, value } = event.target
        setTask((prestate) => ({
            ...prestate,
            [name]: value
        }))
    }

    async function submitHandler(event) {
        event.preventDefault();
        const assignTask = {
            title: task.title,
            description: task.description,
            date: task.date,
            assignedTo: taskCtx.developer.id,
            createdBy: adminId

        }
        try {
            const response = await API.post('/admin/assigntask', assignTask, {
                headers: {
                    'Content-Type': 'application/json',  // Optional if using JSON
                    'Authorization': `Bearer ${token}` // Replace with your actual token
                }
            });
            setTask({
                title: "",
                description: "",
                date: ""
            })
            dispatch(notificationAction.displayNotification(response.data.message))
            navigate('/admin/taskslist')
        } catch (error) {
            dispatch(notificationAction.displayNotification(error.response.data.message))
            setTask({
                title: "",
                description: "",
                date: ""
            })
        }

    }
    console.log(taskCtx.developer)

    if (!taskCtx.developer.id) {
        return <p>Select A Developer First</p>
    }

    return (
        <div className='m-10'>
            <div className='flex flex-col gap-2 w-52 p-5 bg-gradient-to-br from-teal-200 to-teal-500 rounded-md shadow-2xs'>
                <h2 className='capitalize text-xl'>{taskCtx.developer.name}</h2>
                <h2 className='capitalize'>{taskCtx.developer.designation}</h2>
            </div>
            <form onSubmit={submitHandler} className='bg-teal-500 flex flex-col shadow-2xl p-5 mt-5 rounded-md'>
                <label className='text-xl capitalize flex flex-col'>
                    title:
                    <input className='bg-white p-2 rounded-md mt-1' type="text" name='title' onChange={changeHandler} />
                </label>
                <label className='text-xl capitalize flex flex-col mt-5'>
                    description:
                    <input className='bg-white p-2 rounded-md mt-1' type="text" name='description' onChange={changeHandler} />
                </label>
                <label className='text-xl capitalize flex flex-col mt-5'>
                    date:
                    <input className='bg-white p-2 rounded-md mt-1' type="date" name='date' onChange={changeHandler} />
                </label>
                <div className='flex gap-5 flex-wrap max-sm:gap-0'>
                    <button className='w-fit px-10 py-1 bg-cyan-950 hover:bg-blue-900 mt-5 text-white text-2xl rounded-md cursor-pointer'>Submit</button>
                    <button type='button' className='w-fit px-10 py-1 bg-gray-500 mt-5 text-white text-2xl rounded-md cursor-pointer' onClick={() => navigate('/admin')}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
