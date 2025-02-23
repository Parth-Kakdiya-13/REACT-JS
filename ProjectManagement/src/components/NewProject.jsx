import React, { useRef, useState } from 'react'
import Input from './Input'
import Modal from './Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const NewProject = () => {

    const navigate = useNavigate()

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();


    const handleSave = () => {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // Use dueDate as per the updated schema
        const newProject = {
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate  // Using dueDate now
        }

        postData(newProject);

        if (
            enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            modal.current.open();
            return;
        }

        navigate('/newproject')

        title.current.value = "";
        description.current.value = "";
        dueDate.current.value = "";
    };

    async function postData(project) {

        try {
            const response = await axios.post('http://localhost:3000/create', project);
        } catch (error) {
            console.error("Error posting data:", error);
        }
    }

    function cancelProject() {
        navigate('/')
    }



    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <div className='flex flex-col  gap-4'>
                    <h2 className='text-xl text-stone-700 font-bold pb-1 border-b-2'>Invalid Input</h2>
                    <p className='text-stone-600'>Opps... looks like you forgot to enter a value.</p>
                    <p className='text-stone-600'>Please make sure you provide a valid value for every input field.</p>
                </div>
            </Modal>

            <div className='w-full md:w-1/2 mx-5 mt-16'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li><button className='px-4 py-2 text-stone-800 hover:text-stone-950' onClick={cancelProject}>Cancel</button></li>
                    <li><button className='px-6 py-2 text-stone-50 bg-stone-800 hover:bg-stone-950 rounded-md' onClick={handleSave}>Save</button></li>
                </menu>
                <div>
                    <Input ref={title} label="Title" type="text" />
                    <Input ref={description} label="Description" type="text" textarea />
                    <Input ref={dueDate} label="Due Date" type="date" />
                </div>
            </div>
        </>
    )
}
