import React from 'react';
import arti from '../assets/Arti Kakdiya.jpg'
import parth from '../assets/Parth Kakdiya.jpg'
import { Button } from '../components/Button';
import { useDispatch } from 'react-redux';
import { tempalteAction } from '../store/template-slice';
import { useNavigate } from 'react-router-dom';

export const Templates = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const templateArray = [
        {
            id: "t1",
            title: "template1",
            image: arti
        },
        {
            id: "t2",
            title: "template2",
            image: parth
        },

    ];

    function selectTemplate(id) {
        dispatch(tempalteAction.selectTemplate(id))
        navigate(`/templates/${id}`)
    }


    return (
        <div>
            <h2 className='w-fit mx-auto px-20 text-5xl font-semibold max-md:text-center max-md:text-5xl max-sm:text-4xl text-center mt-10 pb-5 border-b-4 border-yellow-500/50 capitalize'>Choose template</h2>
            <div className='flex flex-wrap gap-10 justify-center items-center mt-10'>
                {templateArray.map((template) => {
                    return <div className='relative group shadow-2xl shadow-gray-500 overflow-hidden z-40' onClick={() => selectTemplate(template.id)}>
                        <img src={template.image} className='max-w-max h-[30rem]' alt={template.title} />
                        <div className='absolute top-full flex justify-center items-center left-0 w-full h-full group-hover:top-0 bg-amber-500/50  transition-all duration-500 ease-in-out'>
                            <Button classes="bg-blue-500 text-2xl text-white" onClick={() => selectTemplate(template.id)}>Create Bio</Button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
