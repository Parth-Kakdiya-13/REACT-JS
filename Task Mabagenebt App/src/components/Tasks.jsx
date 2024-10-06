import React from 'react'
import NewTasks from './NewTasks'

export default function Tasks({ task, onAdd, onDelete, }) {

    return (
        <section>
            <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
            <NewTasks onAdd={onAdd} />
            {task.length === 0 && <p className='text-stone-800 my-4'>This project does not have any tasks</p>}
            {task.length > 0 && <ul className='p-4 mt-4'>
                {task.map((task) => {
                    return (
                        <li key={task.id} className='flex rounded-md justify-between bg-stone-100 p-4 my-4 border-b-2 border-stone-300'>
                            <span>{task.text}</span>
                            <button className='text-stone-700 hover:text-red-500' onClick={() => onDelete(task.id)}>Clear</button>
                        </li>
                    )
                })}
            </ul>}
        </section >
    )
}
