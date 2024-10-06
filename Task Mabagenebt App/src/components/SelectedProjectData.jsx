import React from 'react'
import Tasks from './Tasks'

export default function SelectedProjectData({ project, onDelete, onAddTask, onDeleteTask }) {



    const formatedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })

    return (
        <div className='w-[36rem] mt-16'>
            <header className='pb-4 mb-4 border-b-2 border-stone-300'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-3xl font-bold text-stone-600 mb-2'>{project.title}</h2>
                    <button className='text-stone-600 hover:text-stone-950' onClick={onDelete}>Delete</button>
                </div>
                <p className='mb-4 text-stone-400 '>{formatedDate}</p>
                <p className='text-stone-600 whitespace-pre'>{project.description}</p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} />
        </div>
    )
}
