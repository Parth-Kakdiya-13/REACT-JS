import React, { useState } from 'react';
import './curricular.module.css'

export const SemesterWiseAcadmicRecordsOfUniversityLevel = () => {


    let initialvalues = [

        {
            sem: 1,
            sdg: "",
            hvhl: "",
            cap: "",
            vac: "",
            coc: "",
            c2p: "",
            ge: "",
            socialinternship: "",
            industrialtraining1: "",
            industrialtraining2: "",
            projectwork: ""
        },
        {
            sem: 2,
            sdg: "",
            hvhl: "",
            cap: "",
            vac: "",
            coc: "",
            c2p: "",
            ge: "",
            socialinternship: "",
            industrialtraining1: "",
            industrialtraining2: "",
            projectwork: ""
        },
        {
            sem: 3,
            sdg: "",
            hvhl: "",
            cap: "",
            vac: "",
            coc: "",
            c2p: "",
            ge: "",
            socialinternship: "",
            industrialtraining1: "",
            industrialtraining2: "",
            projectwork: ""
        },
        {
            sem: 4,
            sdg: "",
            hvhl: "",
            cap: "",
            vac: "",
            coc: "",
            c2p: "",
            ge: "",
            socialinternship: "",
            industrialtraining1: "",
            industrialtraining2: "",
            projectwork: ""
        },
        {
            sem: 5,
            sdg: "",
            hvhl: "",
            cap: "",
            vac: "",
            coc: "",
            c2p: "",
            ge: "",
            socialinternship: "",
            industrialtraining1: "",
            industrialtraining2: "",
            projectwork: ""
        },
        {
            sem: 6,
            sdg: "",
            hvhl: "",
            cap: "",
            vac: "",
            coc: "",
            c2p: "",
            ge: "",
            socialinternship: "",
            industrialtraining1: "",
            industrialtraining2: "",
            projectwork: ""
        },
        {
            sem: 7,
            sdg: "",
            hvhl: "",
            cap: "",
            vac: "",
            coc: "",
            c2p: "",
            ge: "",
            socialinternship: "",
            industrialtraining1: "",
            industrialtraining2: "",
            projectwork: ""
        },
        {
            sem: 8,
            sdg: "",
            hvhl: "",
            cap: "",
            vac: "",
            coc: "",
            c2p: "",
            ge: "",
            socialinternship: "",
            industrialtraining1: "",
            industrialtraining2: "",
            projectwork: ""
        },

    ];

    const [value, setValue] = useState(initialvalues);
    const [isEditing, setIsEditing] = useState(true);

    const changeHandler = (event, index) => {
        let values = [...value];
        if (event.target.name === "sdg") {
            values[index].sdg = event.target.value;
        } else if (event.target.name === "hvhl") {
            values[index].hvhl = event.target.value;
        }
        else if (event.target.name === "cap") {
            values[index].cap = event.target.value;
        }
        else if (event.target.name === "vac") {
            values[index].vac = event.target.value;
        }
        else if (event.target.name === "coc") {
            values[index].coc = event.target.value;
        }
        else if (event.target.name === "c2p") {
            values[index].c2p = event.target.value;
        }
        else if (event.target.name === "ge") {
            values[index].ge = event.target.value;
        }
        else if (event.target.name === "socialinternship") {
            values[index].socialinternship = event.target.value;
        }
        else if (event.target.name === "industrialtraining1") {
            values[index].industrialtraining1 = event.target.value;
        } else if (event.target.name === "industrialtraining2") {
            values[index].industrialtraining2 = event.target.value;
        } else {
            values[index].projectwork = event.target.value;
        }

        setValue(values);
    }

    console.log(value);

    const editingHandler = () => {
        setIsEditing((editing) => !editing)
    }

    let content;

    if (isEditing) {
        content = value.map((items, index) => {
            return <tr key={index}>
                <td className='text-md font-bold'>{items.sem}</td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='sdg' value={items.sdg} onChange={(e) => changeHandler(e, index)}>{items.sdg}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='hvhl' value={items.hvhl} onChange={(e) => changeHandler(e, index)}>{items.hvhl}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='cap' value={items.cap} onChange={(e) => changeHandler(e, index)}>{items.cap}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='vac' value={items.vac} onChange={(e) => changeHandler(e, index)}>{items.vac}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='coc' value={items.coc} onChange={(e) => changeHandler(e, index)}>{items.coc}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='c2p' value={items.c2p} onChange={(e) => changeHandler(e, index)}>{items.c2p}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='ge' value={items.ge} onChange={(e) => changeHandler(e, index)}>{items.ge}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='socialinternship' value={items.socialinternship} onChange={(e) => changeHandler(e, index)}>{items.socialinternship}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='industrialtraining1' value={items.industrialtraining1} onChange={(e) => changeHandler(e, index)}>{items.industrialtraining1}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='industrialtraining2' value={items.industrialtraining2} onChange={(e) => changeHandler(e, index)}>{items.industrialtraining2}</textarea></td>
                <td><textarea className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 uppercase' name='projectwork' value={items.projectwork} onChange={(e) => changeHandler(e, index)}>{items.projectwork}</textarea></td>
            </tr>
        })
    } else {
        content = value.map((items, index) => {
            return <tr key={index}>
                <td className='text-md font-bold'>{items.sem}</td>
                <td><p>{items.sdg}</p></td>
                <td><p>{items.hvhl}</p></td>
                <td><p>{items.cap}</p></td>
                <td><p>{items.vac}</p></td>
                <td><p>{items.coc}</p></td>
                <td><p>{items.c2p}</p></td>
                <td><p>{items.ge}</p></td>
                <td><p>{items.socialinternship}</p></td>
                <td><p>{items.industrialtraining1}</p></td>
                <td><p>{items.industrialtraining2}</p></td>
                <td><p>{items.projectwork}</p></td>
            </tr>
        })
    }


    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-center font-serif text-3xl py-5'>Semester Wise Acadmic Records Of University Level Mandatory Courses</h1>
            <div className='bg-slate-200 p-10'>
                <table>
                    <tbody>
                        <tr className='bg-slate-100'>
                            <th>SEM</th>
                            <th>SDG</th>
                            <th>HVHL</th>
                            <th>CAP</th>
                            <th>VAC</th>
                            <th>COC</th>
                            <th>C2P</th>
                            <th>GE</th>
                            <th>SOCIAL INTERNSHIP</th>
                            <th>INDUSTRIAL TRAINING 1</th>
                            <th>INDUSTRIAL TRAINING 2</th>
                            <th>PROJECT WORK</th>
                        </tr>
                        {content}
                    </tbody>
                </table>
                <button type='button' className={`px-5 py-1  mt-2 text-white ${isEditing ? 'bg-orange-500' : 'bg-blue-900'}`} onClick={editingHandler}>{isEditing ? 'Save' : 'Edit'}</button>
            </div>
        </div>
    )
}
