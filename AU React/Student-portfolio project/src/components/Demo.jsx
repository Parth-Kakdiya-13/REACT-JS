import React, { useState } from 'react';
import './demo.module.css';

export function Demo() {

    const initialValues = {
        value0: '1',
        value1: 'Enter value...',
        value2: 'Enter value...',
        value3: 'Enter date...',
        value4: 'Select value...'
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
                    <td>
                        {index + 1}
                    </td>
                    <td>
                        <select id="cars" name="value0" value={inputField.value0} onChange={(event) => handleChange(index, event)}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </td>
                    <td>
                        <input className='border w-full border-gray-500' name="value1" value={inputField.value1} onChange={(event) => handleChange(index, event)} />
                    </td>
                    <td>
                        <input className='border w-full border-gray-500' name="value2" value={inputField.value2} onChange={(event) => handleChange(index, event)} />
                    </td>
                    <td>
                        <input type="date" name="value3" value={inputField.value3} onChange={(event) => handleChange(index, event)} />
                    </td>
                    <td>
                        <select id="cars" name="value4" value={inputField.value4} onChange={(event) => handleChange(index, event)}>
                            <option value="University">University</option>
                            <option value="State">State</option>
                            <option value="National">National</option>
                        </select>
                    </td>
                    <td>
                        <button className='px-3 py-1 bg-orange-500 rounded-xl mx-1 text-white' onClick={editingHandler}>{isEditing ? 'Save' : 'Edit'}</button>
                        <button className='px-3 py-1 bg-orange-500 rounded-xl mx-1 text-white'>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    } else {
        content = <tbody>
            {inputFields.map((inputField, index) => (
                <tr key={index}>
                    <td>
                        {index + 1}
                    </td>
                    <td>
                        <p>{inputField.value0}</p>
                    </td>
                    <td>
                        <p>{inputField.value1}</p>
                    </td>
                    <td>
                        <p>{inputField.value2}</p>
                    </td>
                    <td>
                        <p>{inputField.value3}</p>
                    </td>
                    <td>
                        <p>{inputField.value4}</p>
                    </td>
                    <td>
                        <button className='px-3 py-1 bg-orange-500 rounded-xl mx-1 text-white' onClick={editingHandler}>{isEditing ? 'Save' : 'Edit'}</button>
                        <button className='px-3 py-1 bg-orange-500 rounded-xl mx-1 text-white'>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    }
    ////////////////////////////////


    // inputFields.map((inputs, index) => console.log(inputs, index));

    const handleAddFields = () => {
        setInputFields([...inputFields, {
            value0: '',
            value1: '',
            value2: '',
            value3: '',
            value4: ''
        }]);
    };

    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <table>
                <thead>
                    <tr>
                        <th>Sr no.</th>
                        <th>Sem</th>
                        <th>Details(Name of the Event/Conference/Symposium etc.)</th>
                        <th>Organizer</th>
                        <th>Date</th>
                        <th>Level(Uni/State/National)</th>
                        <th>Chages</th>
                    </tr>
                </thead>
                {content}
            </table >
            <button type="button" className='mt-2 bg-blue-800 text-white px-5 py-1 rounded-xl' onClick={handleAddFields}>
                + Add
            </button>
        </div>
    );
}
