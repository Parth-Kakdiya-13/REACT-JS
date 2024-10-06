import React, { useState } from 'react'
import { Button } from './Button'

export const ProjectSideBar = ({ onStartAddProject, projects, onSelectProject, selectedProjectId }) => {




    return (
        <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
            <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>+Add Project</Button>
            </div>
            <ul className='mt-8'>
                {projects.map((project) => {
                    let cssClasses = 'w-full rounded-md text-left px-4 py-2 mt-3 text-stone-400 hover:text-stone-100 hover:bg-stone-800'

                    if (project.id === selectedProjectId) {
                        cssClasses += ' bg-stone-800 text-stone-200'
                    } else {
                        cssClasses += ' text-stone-400'
                    }

                    return (
                        <li key={project.id}>
                            <button className='w-full rounded-md text-left px-4 py-2 mt-3 text-stone-400 hover:text-stone-100 hover:bg-stone-800' onClick={() => onSelectProject(project.id)}>{project.title}</button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}
