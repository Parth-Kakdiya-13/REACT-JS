import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';

export const NewProject = ({ onAdd, onCancel }) => {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();


    const handleSave = () => {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        //validation logic

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })

        title.current.value = ""
        description.current.value = ""
        dueDate.current.value = ""


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
            <div className='w-[35rem] mt-16'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li><button className='px-4 py-2 text-stone-800 hover:text-stone-950' onClick={onCancel}>Cancel</button></li>
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
