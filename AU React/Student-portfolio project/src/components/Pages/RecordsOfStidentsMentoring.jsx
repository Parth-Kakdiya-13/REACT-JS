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
        value4: ''
    }
    const [inputFields, setInputFields] = useState([initialValues]);
    const [isEditing, setIsEditing] = useState(false);

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
        } else {
            values[index].value4 = value;
        }
        setInputFields(values);
        // setInputFields((pre) => {
        //     return [...pre, {
        //         id: nextId++
        //     }]
        // });

    };
    // props.ongetData(inputFields)

    // console.log(inputFields);


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
                        <select id="cars" name="value0" value={inputField.value0} onChange={(event) => handleChange(index, event)}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </td>
                    <td className='w-1/4'>
                        <input className='border w-full border-gray-500 uppercase' name="value1" value={inputField.value1} onChange={(event) => handleChange(index, event)} />
                    </td>
                    <td className='w-1/6'>
                        <input className='border w-full border-gray-500 uppercase' name="value2" value={inputField.value2} onChange={(event) => handleChange(index, event)} />
                    </td>
                    <td className='w-40'>
                        <input type="date" name="value3" value={inputField.value3} onChange={(event) => handleChange(index, event)} />
                    </td>
                    <td className='w-1/6'>
                        <select id="cars" name="value4" value={inputField.value4} onChange={(event) => handleChange(index, event)}>
                            <option value="University">University</option>
                            <option value="State">State</option>
                            <option value="National">National</option>
                        </select>
                    </td>
                    <td>
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
                    <td className='w-40'>
                        <p className='uppercase'>{inputField.value3}</p>
                    </td>
                    <td className='w-1/6 '>
                        <p className='uppercase'>{inputField.value4}</p>
                    </td>
                    <td>
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
            value0: '1',
            value1: '',
            value2: '',
            value3: '',
            value4: ''
        }]);
    };


    return (
        <div className='max-w-7xl mx-auto '>
            <h1 className='text-center font-serif text-3xl py-5'>Co-Curricular/ Extra Curricular Activities Records</h1>
            <form className='p-5 bg-slate-200'>
                <table className="table-auto">
                    <tbody className='bg-white'>
                        <tr>
                            <th>Sr no.</th>
                            <th>Sem</th>
                            <th>Details(Name of the Event/Conference/Symposium etc.)</th>
                            <th>Organizer</th>
                            <th>Date</th>
                            <th>Level(Uni/State/National)</th>
                            <th>Chages</th>
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
