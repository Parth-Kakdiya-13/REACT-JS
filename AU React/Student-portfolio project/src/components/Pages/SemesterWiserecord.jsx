import React, { useState } from 'react';
import './curricular.module.css';


export const SemesterWiserecord = () => {

    const initialTitles = [
        {
            title: "Fees Paid",
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
            title: "Attendence",
            sem_1: "",
            sem_2: "",
            sem_3: "",
            sem_4: "",
            sem_5: "",
            sem_6: "",
            sem_7: "",
            sem_8: ""
        }, {
            title: "CIA-1",
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
            title: "CIA-2",
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
            title: "SPI",
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
            title: "CPI",
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
            title: "Backlog (In nos.)",
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
            title: "Backlog Cleared in Summer / Winter AY. No.of courses cleared",
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


    const [addData, setAddData] = useState(initialTitles);
    const [isEditing, setIsEditing] = useState(true);

    const changeHandler = (event, index) => {
        let values = [...addData];
        if (event.target.name === "sem1") {
            values[index].sem_1 = event.target.value;
        } else if (event.target.name === "sem2") {
            values[index].sem_2 = event.target.value;
        } else if (event.target.name === "sem3") {
            values[index].sem_3 = event.target.value;
        } else if (event.target.name === "sem4") {
            values[index].sem_4 = event.target.value;
        } else if (event.target.name === "sem5") {
            values[index].sem_5 = event.target.value;
        } else if (event.target.name === "sem6") {
            values[index].sem_6 = event.target.value;
        } else if (event.target.name === "sem7") {
            values[index].sem_7 = event.target.value;
        } else if (event.target.name === "sem8") {
            values[index].sem_8 = event.target.value;
        }
        setAddData(values)
    }

    // console.log(addData);
    let content;

    const editingHandler = () => {
        setIsEditing((editing) => !editing)
    }

    if (isEditing) {
        content = addData.map((data, index) => {
            return <tr key={index}>
                {/* <td>{index + 1}</td> */}
                <td className='w-40 text-md font-bold'>{data.title}</td>
                <td className='w-26 h-20'><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sem1' rows='3' cols='4' value={data.sem_1} onChange={(e) => changeHandler(e, index)}>{data.sem_1}</textarea></td>
                <td className='w-26 h-20'><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sem2' rows='3' cols='4' value={data.sem_2} onChange={(e) => changeHandler(e, index)}>{data.sem_2}</textarea></td>
                <td className='w-26 h-20'><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sem3' rows='3' cols='4' value={data.sem_3} onChange={(e) => changeHandler(e, index)}>{data.sem_3}</textarea></td>
                <td className='w-26 h-20'><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sem4' rows='3' cols='4' value={data.sem_4} onChange={(e) => changeHandler(e, index)}>{data.sem_4}</textarea></td>
                <td className='w-26 h-20'><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sem5' rows='3' cols='4' value={data.sem_5} onChange={(e) => changeHandler(e, index)}>{data.sem_5}</textarea></td>
                <td className='w-26 h-20'><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sem6' rows='3' cols='4' value={data.sem_6} onChange={(e) => changeHandler(e, index)}>{data.sem_6}</textarea></td>
                <td className='w-26 h-20'><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sem7' rows='3' cols='4' value={data.sem_7} onChange={(e) => changeHandler(e, index)}>{data.sem_7}</textarea></td>
                <td className='w-26 h-20'><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sem8' rows='3' cols='4' value={data.sem_8} onChange={(e) => changeHandler(e, index)}>{data.sem_8}</textarea></td>
            </tr>
        })
    } else {
        content = addData.map((data, index) => {
            return <tr key={index}>
                {/* <td>{index + 1}</td> */}
                <td className='w-40 text-md font-bold'>{data.title}</td>
                <td className='w-26 h-20'><p>{data.sem_1}</p></td>
                <td className='w-26 h-20'><p>{data.sem_2}</p></td>
                <td className='w-26 h-20'><p>{data.sem_3}</p></td>
                <td className='w-26 h-20'><p>{data.sem_4}</p></td>
                <td className='w-26 h-20'><p>{data.sem_5}</p></td>
                <td className='w-26 h-20'><p>{data.sem_6}</p></td>
                <td className='w-26 h-20'><p>{data.sem_7}</p></td>
                <td className='w-26 h-20'><p>{data.sem_8}</p></td>
            </tr>
        })
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-center font-serif text-3xl py-5'>Semester Wise Acadmic Records</h1>
            <div className='bg-slate-200 p-10'>
                <table>
                    <tbody>
                        <tr className='bg-slate-100'>
                            <th></th>
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
