import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function NewTasks({ projectId }) {


    const [enteredTask, setEnteredTask] = useState('');
    const navigate = useNavigate()

    function handleChange(event) {
        setEnteredTask(event.target.value)
    }

    async function handleClick() {
        const response = await axios.post('https://projectmanagement-backend.vercel.app/createTask', { projectId, task: enteredTask })
        if (response.status === 200) {
            alert("task submited")
        } else {
            alert("task not submited")
        }
        navigate(`/selectedproject/${projectId}`)
        setEnteredTask('');
    }

    return (
        <div className='flex items-center gap-4 flex-wrap'>
            <input type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200' value={enteredTask} onChange={handleChange} />
            <button className='px-5 py-1 bg-stone-600 rounded-md text-stone-300 hover:bg-stone-700 hover:text-stone-100' onClick={handleClick}>Add Task</button>
        </div>
    )
}
