import React from 'react'
import noProjectImage from '../assets/no-projects.png'
import { Button } from './Button'

export const NoProjectSelected = ({ onStartAddProject }) => {
    return (
        <div className='text-center w-2/3 mt-24'>
            <img src={noProjectImage} className='w-16 h-16 object-contain mx-auto' alt='an empty task list' />
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
            <p className='text-stone-400 mb-4 '>Select a Project or get started with a new one</p>
            <p className='mt-8 '>
                <Button onClick={onStartAddProject}>Create a new Project</Button>
            </p>
        </div>
    )
}
