import React, { useEffect, useState } from 'react';
import NewTasks from './NewTasks';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Tasks({ projectId }) {
    const [getTask, setGetTasks] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchTasks() {
            try {
                const response = await axios.get(`http://localhost:3000/getTasks/${projectId}`);
                setGetTasks(response.data.tasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }
        if (projectId) fetchTasks();
    }, [projectId]);

    async function clearTaskHandler(taskId) {
        try {
            const response = await axios.delete(`http://localhost:3000/clearTask/${projectId}/${taskId}`);
            if (response.status === 200) {
                navigate(`/selectedproject/${projectId}`)
                alert("task deleted")
            } else {
                alert("task not deleted")
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    }


    return (
        <section>
            <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
            <NewTasks projectId={projectId} />
            {getTask.length === 0 ? (
                <p className='text-stone-800 my-4'>
                    This project does not have any tasks 😒 Add some tasks
                </p>
            ) : (
                <ul className='p-4 mt-4'>
                    {getTask.map((task) => (
                        <li
                            key={task._id}
                            className='flex rounded-md justify-between bg-stone-100 p-4 my-4 border-b-2 border-stone-300'
                        >
                            <span>{task.task}</span>
                            <button className='text-stone-700 hover:text-red-500' onClick={() => clearTaskHandler(task._id)}>Clear</button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
