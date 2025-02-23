import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Tasks from './Tasks';
export const SelectedProjectData = () => {

    const { projectId } = useParams();
    const [projectData, setPrjectData] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchProject() {
            const response = await axios.get(`http://localhost:3000/getProjectsById/${projectId}`)
            setPrjectData(response.data)
        }
        fetchProject()
    }, [projectId])

    async function deleteProjectHandler() {
        const response = await axios.delete(`http://localhost:3000/deleteProject/${projectData._id}`)
        navigate('/')
    }

    const formatedDate = new Date(projectData.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })

    return (
        <div className='w-[36rem]  mt-24 mx-5 '>
            <header className='pb-4 mb-4 border-b-2 border-stone-300'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-3xl font-bold text-stone-600 mb-2'>{projectData.title}</h2>
                    <button className='text-stone-700 hover:text-red-500' onClick={deleteProjectHandler}>Delete</button>
                </div>
                <p className='mb-4 text-stone-400 '>{formatedDate}</p>
                <p className='text-stone-600 whitespace-pre'>{projectData.description}</p>
            </header>
            <Tasks projectId={projectData._id} />
        </div>
    )
}
