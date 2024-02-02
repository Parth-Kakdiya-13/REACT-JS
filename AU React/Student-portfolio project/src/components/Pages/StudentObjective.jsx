import React, { useState } from 'react';
import './CurricularActivities';

export const StudentObjective = () => {


    const activities = [
        {
            title: "Student's Career Objectives",
            firstYear: "13",
            secondYear: "23",
            thirdYear: "33",
            fourthYear: "44",
        },
        {
            title: "If interested in job - Type of Domain Area and Job profile he/she is interested to work",
            firstYear: "55",
            secondYear: "22",
            thirdYear: "33",
            fourthYear: "21",
        },
        {
            title: "Challenges preceived in achieving Career Objectives",
            firstYear: "11",
            secondYear: "12",
            thirdYear: "13",
            fourthYear: "14",
        },
        {
            title: "Planning and efforts towards achieving Objectives",
            firstYear: "22",
            secondYear: "23",
            thirdYear: "24",
            fourthYear: "25",
        },
    ]


    const [isEditing, setIsEditing] = useState(false);
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
                    <td><textarea value={items.firstYear} name='firstYear' onChange={(e) => changeHandler(e, index)} rows="4" cols="4" /></td>
                    <td><textarea value={items.secondYear} name='secondYear' onChange={(e) => changeHandler(e, index)} rows="4" cols="4" /></td>
                    <td><textarea value={items.thirdYear} name='thirdYear' onChange={(e) => changeHandler(e, index)} rows="4" cols="4" /></td>
                    <td><textarea value={items.fourthYear} name='fourthYear' onChange={(e) => changeHandler(e, index)} rows="4" cols="4" /></td>
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
            <table>
                <tbody>
                    <tr>
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
            <button type='button' className='px-5 py-1 bg-orange-500 mt-2 text-white' onClick={editingHandler}>{isEditing ? 'Save' : 'Edit'}</button>
        </div >
    )
}

