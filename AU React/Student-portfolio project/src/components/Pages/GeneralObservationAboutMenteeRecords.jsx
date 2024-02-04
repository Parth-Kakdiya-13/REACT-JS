import React, { useState } from 'react';

export const GeneralObservationAboutMenteeRecords = () => {

    let general_observation = [
        {
            title: "Communication Skill",
            sem_1: "",
            sem_2: "",
            sem_3: "",
            sem_4: "",
            sem_5: "",
            sem_6: "",
            sem_7: "",
            sem_8: ""
        },
        {
            title: "Discipline/Behaviour/Student-teacher interaction",
            sem_1: "",
            sem_2: "",
            sem_3: "",
            sem_4: "",
            sem_5: "",
            sem_6: "",
            sem_7: "",
            sem_8: ""
        },
        {
            title: "Professional attitude",
            sem_1: "",
            sem_2: "",
            sem_3: "",
            sem_4: "",
            sem_5: "",
            sem_6: "",
            sem_7: "",
            sem_8: ""
        },
        {
            title: "Quality of Interest and involvement in studies",
            sem_1: "",
            sem_2: "",
            sem_3: "",
            sem_4: "",
            sem_5: "",
            sem_6: "",
            sem_7: "",
            sem_8: ""
        },
        {
            title: "Physical Health/General Fitness",
            sem_1: "",
            sem_2: "",
            sem_3: "",
            sem_4: "",
            sem_5: "",
            sem_6: "",
            sem_7: "",
            sem_8: ""
        },
        {
            title: "Protected against Addiction(smoking/gaming etc)",
            sem_1: "",
            sem_2: "",
            sem_3: "",
            sem_4: "",
            sem_5: "",
            sem_6: "",
            sem_7: "",
            sem_8: ""
        },
        {
            title: "Harmony in Personal and Family Life",
            sem_1: "",
            sem_2: "",
            sem_3: "",
            sem_4: "",
            sem_5: "",
            sem_6: "",
            sem_7: "",
            sem_8: ""
        }
    ];


    const [data, setData] = useState(general_observation);

    const [isEditing, setIsEditing] = useState(true);

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
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sem_1' value={items.sem_1} onChange={(e) => changeHandler(e, index)}>{items.sem_1}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sem_2' value={items.sem_2} onChange={(e) => changeHandler(e, index)}>{items.sem_2}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sem_3' value={items.sem_3} onChange={(e) => changeHandler(e, index)}>{items.sem_3}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sem_4' value={items.sem_4} onChange={(e) => changeHandler(e, index)}>{items.sem_4}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sem_5' value={items.sem_5} onChange={(e) => changeHandler(e, index)}>{items.sem_5}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sem_6' value={items.sem_6} onChange={(e) => changeHandler(e, index)}>{items.sem_6}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sem_7' value={items.sem_7} onChange={(e) => changeHandler(e, index)}>{items.sem_7}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sem_8' value={items.sem_8} onChange={(e) => changeHandler(e, index)}>{items.sem_8}</textarea></td>
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
            <div className='bg-slate-200 p-10'>
                <table>
                    <tbody>
                        <tr className='bg-slate-100'>
                            <th rowSpan="2">Sr no.</th>
                            <th rowSpan="2">Details</th>
                            <th className='text-center' colSpan="8">Marking from 1 to 5</th>
                        </tr>
                        <tr className='bg-slate-200'>
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
            </div>
        </div>
    )
}
