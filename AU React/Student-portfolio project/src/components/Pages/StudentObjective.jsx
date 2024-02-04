import React, { useState } from 'react';
import './CurricularActivities';

export const StudentObjective = () => {


    const activities = [
        {
            title: "Student's Career Objectives",
            firstYear: "",
            secondYear: "",
            thirdYear: "",
            fourthYear: "",
        },
        {
            title: "If interested in job - Type of Domain Area and Job profile he/she is interested to work",
            firstYear: "",
            secondYear: "",
            thirdYear: "",
            fourthYear: "",
        },
        {
            title: "Challenges preceived in achieving Career Objectives",
            firstYear: "",
            secondYear: "",
            thirdYear: "",
            fourthYear: "",
        },
        {
            title: "Planning and efforts towards achieving Objectives",
            firstYear: "",
            secondYear: "",
            thirdYear: "",
            fourthYear: "",
        },
    ]


    const [isEditing, setIsEditing] = useState(true);
    const [adddetails, setAddDetails] = useState(activities)

    const changeHandler = (event, index) => {
        console.log(event.target.name);
        let values = [...adddetails];
        if (event.target.name === "firstYear") {
            values[index].firstYear = event.target.value;
        } else if (event.target.name === "secondYear") {
            values[index].secondYear = event.target.value;
        } else if (event.target.name === "thirdYear") {
            values[index].thirdYear = event.target.value;
        } else {
            values[index].fourthYear = event.target.value;
        }
        setAddDetails(values)
    }

    // console.log(adddetails);

    let content;

    const editingHandler = () => {
        setIsEditing((editing) => !editing)
    }

    if (isEditing) {
        content = adddetails.map((items, index) => {
            return (
                <tr key={index}>
                    <td className='w-10 text-md font-bold'>{index + 1}</td>
                    <td className='w-40 text-md font-bold'>{items.title}</td>
                    <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' value={items.firstYear} name='firstYear' onChange={(e) => changeHandler(e, index)} rows="4" cols="4" /></td>
                    <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' value={items.secondYear} name='secondYear' onChange={(e) => changeHandler(e, index)} rows="4" cols="4" /></td>
                    <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' value={items.thirdYear} name='thirdYear' onChange={(e) => changeHandler(e, index)} rows="4" cols="4" /></td>
                    <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' value={items.fourthYear} name='fourthYear' onChange={(e) => changeHandler(e, index)} rows="4" cols="4" /></td>
                </tr>
            )
        })
    } else {
        content = adddetails.map((items, index) => {
            return (
                <tr key={index}>
                    <td className='w-10 font-bold text-md'>{index + 1}</td>
                    <td className='w-40 text-md font-bold'>{items.title}</td>
                    <td><p>{items.firstYear}</p></td>
                    <td><p>{items.secondYear}</p></td>
                    <td><p>{items.thirdYear}</p></td>
                    <td><p>{items.fourthYear}</p></td>
                </tr>
            )
        })
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-center font-serif text-3xl py-5'>Student's Career Objective & Planning Record</h1>
            <div className='bg-slate-200 p-10'>
                <table>
                    <tbody>
                        <tr className='bg-slate-100'>
                            <th>Sr. no</th>
                            <th>Parameter</th>
                            <th>First Year</th>
                            <th>Second Year</th>
                            <th>Third Year</th>
                            <th>Fourth Year</th>
                        </tr>
                        {content}
                    </tbody>
                </table>
                <div className='flex flex-col items-start'>
                    <span className='text-sm text-slate-500 py-2'>To be filled once in a Year (Begining of the Acadmic Year or at the end of the Acadmic Year)</span>
                    <button type='button' className={`px-5 py-1  mt-2 text-white ${isEditing ? 'bg-orange-500' : 'bg-blue-900'}`} onClick={editingHandler}>{isEditing ? 'Save' : 'Edit'}</button>
                </div>
            </div>
        </div >
    )
}
