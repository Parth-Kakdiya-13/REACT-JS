import React from 'react'
import noProjectImage from '../assets/no-projects.png'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom';

export const NoProjectSelected = () => {

    const navigat = useNavigate();

    function newProject() {
        navigat('/newproject');
    }


    return (
        <div className='text-center w-2/3 mt-32 max-md:mx-auto'>
            <img src={noProjectImage} className='w-16 h-16 object-contain mx-auto' alt='an empty task list' />
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
            <p className='text-stone-400 mb-4 '>Select a Project or get started with a new one</p>
            <p className='mt-8 '>
                <Button onClick={newProject}>Create a new Project</Button>
            </p>
        </div>
    )
}
