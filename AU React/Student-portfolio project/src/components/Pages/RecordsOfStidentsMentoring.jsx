import React, { useState } from 'react';
import './curricular.module.css';

export function RecordsOfStidentsMentoring() {
    let nextId = 0;

    const initialValues = {
        id: nextId,
        value0: '1',
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: ''
    }
    const [inputFields, setInputFields] = useState([initialValues]);
    const [isEditing, setIsEditing] = useState(true);

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const values = [...inputFields];

        if (name == "value0") {
            values[index].value0 = value;
        } else if (name == "value1") {
            values[index].value1 = value;
        } else if (name == "value2") {
            values[index].value2 = value;
        } else if (name == "value3") {
            values[index].value3 = value;
        } else if (name == "value4") {
            values[index].value4 = value;
        } else {
            values[index].value5 = value;
        }
        setInputFields(values);


    };

    console.log(inputFields);


    //////////////////////////////
    const editingHandler = () => {
        setIsEditing((editing) => !editing)
    }

    let content;
    if (isEditing) {
        content = <tbody>
            {inputFields.map((inputField, index) => (
                <tr key={index}>
                    <td className='text-md font-bold'>
                        {index + 1}
                    </td>
                    <td className='w-16'>
                        <input type='text' className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name="value0" value={inputField.value0} onChange={(event) => handleChange(index, event)} />
                    </td>
                    <td className='w-1/4'>
                        <input type='text' className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name="value1" value={inputField.value1} onChange={(event) => handleChange(index, event)} />
                    </td>
                    <td className='w-1/6'>
                        <input type='text' className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name="value2" value={inputField.value2} onChange={(event) => handleChange(index, event)} />
                    </td>
                    <td className='w-1/6'>
                        <input type='text' className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name="value3" value={inputField.value3} onChange={(event) => handleChange(index, event)} />
                    </td>
                    <td className='w-1/6'>
                        <input type='text' className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name="value4" value={inputField.value4} onChange={(event) => handleChange(index, event)} />
                    </td>
                    <td className='w-1/6'>
                        <input className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name="value5" value={inputField.value5} onChange={(event) => handleChange(index, event)} />
                    </td>
                    <td className='flex flex-col items-center justify-center gap-2'>
                        <button type='button' className={`w-16 py-1  mt-2 text-white ${isEditing ? 'bg-orange-500' : 'bg-blue-900'}`} onClick={editingHandler}>{isEditing ? 'Save' : 'Edit'}</button>
                        <button type='button' className='w-16 py-1 bg-orange-500  mx-1 text-white' >Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    } else {
        content = <tbody>
            {inputFields.map((inputField, index) => (
                <tr key={index}>
                    <td className='text-md font-bold'>
                        {index + 1}
                    </td>
                    <td className='w-16'>
                        <p className='uppercase'>{inputField.value0}</p>
                    </td>
                    <td className='w-1/4'>
                        <p className='uppercase'>{inputField.value1}</p>
                    </td>
                    <td className='w-1/6'>
                        <p className='uppercase'>{inputField.value2}</p>
                    </td>
                    <td className='w-1/6'>
                        <p className='uppercase'>{inputField.value3}</p>
                    </td>
                    <td className='w-1/6 '>
                        <p className='uppercase'>{inputField.value4}</p>
                    </td>
                    <td className='w-1/6 '>
                        <p className='uppercase'>{inputField.value5}</p>
                    </td>
                    <td className='flex flex-col items-center justify-center gap-2'>
                        <button type='button' className={`w-16 py-1  mt-2 text-white ${isEditing ? 'bg-orange-500' : 'bg-blue-900'}`} onClick={editingHandler}>{isEditing ? 'Save' : 'Edit'}</button>
                        <button type='button' className='w-16 py-1 bg-orange-500 mx-1 text-white' >Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    }
    ////////////////////////////////


    // inputFields.map((inputs, index) => console.log(inputs, index));


    const handleAddFields = () => {
        setInputFields([...inputFields, {
            id: nextId++,
            value0: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: ''
        }]);
    };


    return (
        <div className='max-w-7xl mx-auto '>
            <h1 className='text-center font-serif text-3xl py-5'>Records Of Students Mentoring</h1>
            <form className='p-10 bg-slate-200'>
                <table className="table-auto">
                    <tbody className='bg-white'>
                        <tr className='bg-slate-100'>
                            <th>Sr no.</th>
                            <th>Date Of Meeting</th>
                            <th>Agenda / Topic Of Discussion</th>
                            <th>Duration(HH:MM)</th>
                            <th>Vemue</th>
                            <th>Signature Of Meeting</th>
                            <th>Name Of Signatire Of Mentor</th>
                            <th>Changes</th>
                        </tr>
                    </tbody>
                    {content}
                </table>
                <button type="button" className='mt-2 bg-blue-800 text-white px-5 py-1 mr-2' onClick={handleAddFields}>
                    + Add
                </button>
            </form>
        </div>
    );
}
