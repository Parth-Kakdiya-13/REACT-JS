import React, { useState } from 'react'
import { Button } from './Button'

export const ProjectSideBar = ({ onStartAddProject, projects, onSelectProject, selectedProjectId }) => {

    const [bar, setBar] = useState(false);


    function showBarHandler() {
        setBar(true)
    }

    function hideBarHandler() {
        setBar(false)
    }




    return (
        <>
            {!bar && <div className='fixed block md:hidden z-50 top-12 left-2 text-black' onClick={showBarHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 24"><path fill="currentColor" d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22m0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22m0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22" /></svg>            </div>}

            {bar && <div className='fixed block md:hidden z-50 top-10 left-0 text-white' onClick={hideBarHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4" /></svg>
            </div>}

            <aside className={`max-md:fixed max-md:top-10 max-md:-left-72 transition-all duration-300 ease-in ${!bar ? "max-md:left-0" : " "} h-full w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl `}>
                <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
                <div>
                    <Button onClick={onStartAddProject}>+Add Project</Button>
                </div>
                <ul className='mt-8'>
                    {projects.map((project) => {
                        let cssClasses = 'w-full rounded-md text-left px-4 py-2 mt-3 text-stone-400 hover:text-white hover:bg-stone-800'

                        if (project.id === selectedProjectId) {
                            cssClasses += ' bg-stone-800 text-white'
                        } else {
                            cssClasses += ' text-stone-400'
                        }

                        return (
                            <li key={project.id}>
                                <button className={cssClasses} onClick={() => onSelectProject(project.id)}>{project.title}</button>
                            </li>
                        )
                    })}
                </ul>
            </aside >
        </>
    )
}
