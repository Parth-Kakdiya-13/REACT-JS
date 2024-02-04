import React, { useState } from 'react';

export const GeneralObservationAboutMenteeRecords = () => {

    let general_observation = [
        {
            title: "Communication Skill",
            sem_1: "Enter value...",
            sem_2: "Enter value...",
            sem_3: "Enter value...",
            sem_4: "Enter value...",
            sem_5: "Enter value...",
            sem_6: "Enter value...",
            sem_7: "Enter value...",
            sem_8: "Enter value..."
        },
        {
            title: "Discipline/Behaviour/Student-teacher interaction",
            sem_1: "Enter value...",
            sem_2: "Enter value...",
            sem_3: "Enter value...",
            sem_4: "Enter value...",
            sem_5: "Enter value...",
            sem_6: "Enter value...",
            sem_7: "Enter value...",
            sem_8: "Enter value..."
        },
        {
            title: "Professional attitude",
            sem_1: "Enter value...",
            sem_2: "Enter value...",
            sem_3: "Enter value...",
            sem_4: "Enter value...",
            sem_5: "Enter value...",
            sem_6: "Enter value...",
            sem_7: "Enter value...",
            sem_8: "Enter value..."
        },
        {
            title: "Quality of Interest and involvement in studies",
            sem_1: "Enter value...",
            sem_2: "Enter value...",
            sem_3: "Enter value...",
            sem_4: "Enter value...",
            sem_5: "Enter value...",
            sem_6: "Enter value...",
            sem_7: "Enter value...",
            sem_8: "Enter value..."
        },
        {
            title: "Physical Health/General Fitness",
            sem_1: "Enter value...",
            sem_2: "Enter value...",
            sem_3: "Enter value...",
            sem_4: "Enter value...",
            sem_5: "Enter value...",
            sem_6: "Enter value...",
            sem_7: "Enter value...",
            sem_8: "Enter value..."
        },
        {
            title: "Protected against Addiction(smoking/gaming etc)",
            sem_1: "Enter value...",
            sem_2: "Enter value...",
            sem_3: "Enter value...",
            sem_4: "Enter value...",
            sem_5: "Enter value...",
            sem_6: "Enter value...",
            sem_7: "Enter value...",
            sem_8: "Enter value..."
        },
        {
            title: "Harmony in Personal and Family Life",
            sem_1: "Enter value...",
            sem_2: "Enter value...",
            sem_3: "Enter value...",
            sem_4: "Enter value...",
            sem_5: "Enter value...",
            sem_6: "Enter value...",
            sem_7: "Enter value...",
            sem_8: "Enter value..."
        }
    ];


    const [data, setData] = useState(general_observation);

    const [isEditing, setIsEditing] = useState(false);

    const editingHandler = () => {
        setIsEditing((editing) => !editing)
    }


    const changeHandler = (event, index) => {
        let values = [...data];
        if (event.target.name === "sem_1") {
            values[index].sem_1 = event.target.value;
        } else if (event.target.name === "sem_2") {
            values[index].sem_2 = event.target.value;
        } else if (event.target.name === "sem_3") {
            values[index].sem_3 = event.target.value;
        } else if (event.target.name === "sem_4") {
            values[index].sem_4 = event.target.value;
        } else if (event.target.name === "sem_5") {
            values[index].sem_5 = event.target.value;
        } else if (event.target.name === "sem_6") {
            values[index].sem_6 = event.target.value;
        } else if (event.target.name === "sem_7") {
            values[index].sem_7 = event.target.value;
        } else {
            values[index].sem_8 = event.target.value;
        }
        setData(values);
    }

    console.log(data);

    let content;

    if (isEditing) {
        content = data.map((items, index) => {
            return <tr key={index}>
                <td className=' text-md font-bold'>{index + 1}</td>
                <td className='w-40 text-md font-bold'>{items.title}</td>
                <td><textarea name='sem_1' value={items.sem_1} onChange={(e) => changeHandler(e, index)}>{items.sem_1}</textarea></td>
                <td><textarea name='sem_2' value={items.sem_2} onChange={(e) => changeHandler(e, index)}>{items.sem_2}</textarea></td>
                <td><textarea name='sem_3' value={items.sem_3} onChange={(e) => changeHandler(e, index)}>{items.sem_3}</textarea></td>
                <td><textarea name='sem_4' value={items.sem_4} onChange={(e) => changeHandler(e, index)}>{items.sem_4}</textarea></td>
                <td><textarea name='sem_5' value={items.sem_5} onChange={(e) => changeHandler(e, index)}>{items.sem_5}</textarea></td>
                <td><textarea name='sem_6' value={items.sem_6} onChange={(e) => changeHandler(e, index)}>{items.sem_6}</textarea></td>
                <td><textarea name='sem_7' value={items.sem_7} onChange={(e) => changeHandler(e, index)}>{items.sem_7}</textarea></td>
                <td><textarea name='sem_8' value={items.sem_8} onChange={(e) => changeHandler(e, index)}>{items.sem_8}</textarea></td>
            </tr>
        })
    } else {
        content = data.map((items, index) => {
            return <tr key={index}>
                <td className=' text-md font-bold'>{index + 1}</td>
                <td className='w-40 text-md font-bold'>{items.title}</td>
                <td><p>{items.sem_1}</p></td>
                <td><p>{items.sem_2}</p></td>
                <td><p>{items.sem_3}</p></td>
                <td><p>{items.sem_4}</p></td>
                <td><p>{items.sem_5}</p></td>
                <td><p>{items.sem_6}</p></td>
                <td><p>{items.sem_7}</p></td>
                <td><p>{items.sem_8}</p></td>
            </tr>
        })
    }


    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-center font-serif text-3xl py-5'>General Observation And Mantee Records(Confidential)</h1>
            <table>
                <tbody>
                    <tr>
                        <th rowSpan="2">Sr no.</th>
                        <th rowSpan="2">Details</th>
                        <th className='text-center' colSpan="8">Marking from 1 to 5</th>
                    </tr>
                    <tr>
                        <th>Sem-1</th>
                        <th>Sem-2</th>
                        <th>Sem-3</th>
                        <th>Sem-4</th>
                        <th>Sem-5</th>
                        <th>Sem-6</th>
                        <th>Sem-7</th>
                        <th>Sem-8</th>
                    </tr>
                    {content}
                </tbody>
            </table>
            <button type='button' className={`px-5 py-1  mt-2 text-white ${isEditing ? 'bg-orange-500' : 'bg-blue-900'}`} onClick={editingHandler}>{isEditing ? 'Save' : 'Edit'}</button>
        </div >
    )
}
