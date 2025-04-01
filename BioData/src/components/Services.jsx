import React from 'react';
import template from '../assets/template.png'
import paper from '../assets/paper.png'
import form from '../assets/form.png'
import filefolder from '../assets/file-folder.png'
import { Button } from './Button';
import cvtemplate from '../assets/CV-Template.jpg'
import cvtemplate02 from '../assets/CV-Template-02.jpg'
import cvtemplate03 from '../assets/CV-Template-03.jpg'
import { useNavigate } from 'react-router-dom';


export const Services = () => {

    const navigate = useNavigate()
    function navigateToTemplates() {
        navigate('/templates')
    }

    return (
        <div className='mt-20 flex flex-col justify-center'>
            <h2 className='text-5xl font-black text-center max-md:text-4xl'>Make a <span className='text-yellow-500/50'>Bio</span> That Gets Results</h2>
            <div className='flex justify-evenly items-center mt-20 max-md:flex-col'>
                <div className='flex flex-col items-center'>
                    <img src={template} alt="templateIcon" loading='lazy' />
                    <h3 className='py-5 text-xl text-gray-500 text-center font-bold'>Choose  a design</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={form} alt="formIcon" loading='lazy' />
                    <h3 className='py-5 text-xl text-gray-500 text-center font-bold'>Add details</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={paper} alt="paperIcon" loading='lazy' />
                    <h3 className='py-5 text-xl text-gray-500 text-center font-bold'>Finish your Bio Data in minutes</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={filefolder} alt="filefolderIcon" loading='lazy' />
                    <h3 className='py-5 text-xl text-gray-500 text-center font-bold'>Download in Photo(jpg) or pdf</h3>
                </div>
            </div>
            <Button classes="bg-blue-500/50 hover:bg-blue-500 text-2xl text-center w-fit mx-auto mt-10 font-semibold" onClick={navigateToTemplates}>Create Bio</Button>
            <div className='mt-20'>
                <h2 className='text-5xl font-black text-center max-md:text-4xl'>Choose Your Favourite Template</h2>
                <div className='flex flex-wrap justify-center gap-10 mt-10 items-center'>
                    <div className='relative group overflow-hidden transition-all duration-500 ease-in-out shadow-2xl shadow-gray-500 rounded-md'>
                        <img src={cvtemplate} className='max-w-max h-[30rem]' alt="cv templates" />
                        <div className='absolute top-full flex justify-center items-center left-0 w-full h-full group-hover:top-0 bg-amber-500/50  transition-all duration-500 ease-in-out'>
                            <Button classes="bg-blue-500 text-2xl text-white" onClick={navigateToTemplates}>Create Bio</Button>
                        </div>
                    </div>
                    <div className='relative group overflow-hidden transition-all duration-500 ease-in-out shadow-2xl shadow-gray-500 rounded-md'>
                        <img src={cvtemplate02} className='max-w-max h-[30rem]' alt="cv templates" />
                        <div className='absolute top-full flex justify-center items-center left-0 w-full h-full group-hover:top-0 bg-amber-500/50  transition-all duration-500 ease-in-out'>
                            <Button classes="bg-blue-500 text-2xl text-white" onClick={navigateToTemplates}>Create Bio</Button>
                        </div>
                    </div>
                    <div className='relative group overflow-hidden transition-all duration-500 ease-in-out shadow-2xl shadow-gray-500 rounded-md'>
                        <img src={cvtemplate03} className='max-w-max h-[30rem]' alt="cv templates" />
                        <div className='absolute top-full flex justify-center items-center left-0 w-full h-full group-hover:top-0 bg-amber-500/50  transition-all duration-500 ease-in-out'>
                            <Button classes="bg-blue-500 text-2xl text-white" onClick={navigateToTemplates}>Create Bio</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
