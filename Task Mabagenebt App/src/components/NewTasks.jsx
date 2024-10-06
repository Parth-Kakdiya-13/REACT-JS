import React from 'react'

export default function NewTasks({ onAdd }) {
    return (
        <div className='flex items-center gap-4 '>
            <input type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200' />
            <button className='px-5 py-1 bg-stone-600 rounded-md text-stone-300 hover:bg-stone-700 hover:text-stone-100'>Add Task</button>
        </div>
    )
}
