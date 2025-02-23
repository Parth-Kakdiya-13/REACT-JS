import React, { useEffect, useState } from 'react'
import { Button } from './Button';
import axios from 'axios';
import { useNavigate, } from 'react-router-dom';


export const ProjectSideBar = () => {

    const [bar, setBar] = useState(false);
    const [project, setProject] = useState([]);
    const navigate = useNavigate();
    const [highlight, setHighlight] = useState()

    useEffect(() => {
        async function fetchProject() {
            const response = await axios.get('http://localhost:3000/getProjects')
            setProject(response.data[0].projects);
            console.log(response);

        }
        fetchProject()
    }, []);

    async function onSelectedProject(id) {
        navigate(`/selectedproject/${id}`)
        setHighlight(id)

    }

    function showBarHandler() {
        setBar(true);
    }
    function hideBarHandler() {
        setBar(false);
    }

    function addProjecthandler() {
        setBar(false);
        navigate('/newproject')
    }




    return (
        <>
            {!bar && <div className='fixed block md:hidden z-50 top-12 rounded-r-md bg-stone-800 left-0 text-white' onClick={showBarHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14 16l4-4m0 0l-4-4m4 4H6" /></svg>
            </div>}



            <aside className={`md:mt-10 relative max-md:fixed max-md:top-10 max-md:-left-72 transition-all duration-300 ease-out ${bar ? "max-md:left-0" : " "} h-screen w-1/3 max-sm:w-1/2 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl `}>
                {bar && <div className='absolute right-2 block md:hidden z-50 top-2  text-white' onClick={hideBarHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4" /></svg>
                </div>}
                <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
                <div>
                    <Button onClick={addProjecthandler}>+Add Project</Button>
                </div>
                <ul className='mt-5'>
                    {project.map((project) => {
                        return (
                            <li key={project._id}>
                                <button className={`w-full rounded-md text-left px-4 py-2 mt-3 text-stone-400 hover:text-white hover:bg-stone-800 ${highlight === project._id ? 'bg-stone-800 text-white' : 'text-stone-400'}`} onClick={() => onSelectedProject(project._id)}>{project.title}</button>
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </>
    )
}
