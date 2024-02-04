import React from 'react'
import { useState } from 'react';

export const StudetnDetails = () => {

    let initialValues = {
        fname: "",
        mname: "",
        lname: "",
        bdate: "",
        gender: "",
        acadmicyer: "",
        smobile: "",
        email: "",
        fathername: "",
        fmobile: "",
        foccupation: "",
        fincome: "",
        mothername: "",
        moccupation: "",
        siblings: "",
        gparents: "",
        paddress: "",
        permaddress: "",
        mtoung: "",
        min12: "",
        lschcoll: "",
        markob12: "",
        hobbies: ""
    }

    const [addDetails, setAddDetails] = useState([initialValues]);



    const changeHandler = (event) => {
        // console.log(event.target.name);
        let values = [...addDetails];
        if (event.target.name === "firstname") {
            values[0].fname = event.target.value;
        } else if (event.target.name === "lastname") {
            values[0].lname = event.target.value;
        }
        else if (event.target.name === "middlename") {
            values[0].mname = event.target.value;
        }
        else if (event.target.name === "acadmicyear") {
            values[0].acadmicyer = event.target.value;
        }
        else if (event.target.name === "bdate") {
            values[0].bdate = event.target.value;
        }
        else if (event.target.name === "gender") {
            values[0].gender = event.target.value;
        }
        else if (event.target.name === "mobileno") {
            values[0].smobile = event.target.value;
        }
        else if (event.target.name === "fathername") {
            values[0].fathername = event.target.value;
        }
        else if (event.target.name === "fathermonumber") {
            values[0].fmobile = event.target.value;
        }
        else if (event.target.name === "fatherincome") {
            values[0].fincome = event.target.value;
        }
        else if (event.target.name === "fatheroccupation") {
            values[0].foccupation = event.target.value;
        }
        else if (event.target.name === "email") {
            values[0].email = event.target.value;
        }
        else if (event.target.name === "mothername") {
            values[0].mothername = event.target.value;
        }
        else if (event.target.name === "moccupation") {
            values[0].moccupation = event.target.value;
        } else if (event.target.name === "siblings") {
            values[0].siblings = event.target.value;
        }
        else if (event.target.name === "grandparents") {
            values[0].gparents = event.target.value;
        }
        else if (event.target.name === "presentaddress") {
            values[0].paddress = event.target.value;
        } else if (event.target.name === "permanentaddress") {
            values[0].permaddress = event.target.value;
        }
        else if (event.target.name === "mothertongue") {
            values[0].mtoung = event.target.value;
        }
        else if (event.target.name === "medium_of_instruction") {
            values[0].min12 = event.target.value;
        }
        else if (event.target.name === "lastschoolcollege") {
            values[0].lschcoll = event.target.value;
        }
        else if (event.target.name === "markof12") {
            values[0].markob12 = event.target.value;
        }
        else {
            values[0].hobbies = event.target.value;
        }

        setAddDetails(values);
    }

    console.log(addDetails);

    return (
        <div className='max-w-7xl mx-auto'>
            <div className="rounded-t  mb-0 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-semibold">
                        Student Information
                    </h6>
                </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 bg-slate-200 ">
                <form className="shadow-md  px-8 pt-6 pb-8 mb-4 bg-white">

                    <div className="grid md:grid-cols-3 md:gap-6 mt-2">
                        <div className="w-full  px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">First Name</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" name="firstname" onChange={(e) => changeHandler(e)} required />
                        </div>
                        <div className="w-full  px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Middle Name</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" name="middlename" onChange={(e) => changeHandler(e)} required />
                        </div>
                        <div className="w-full  px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Last Name</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" name="lastname" onChange={(e) => changeHandler(e)} required />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 md:gap-6 mt-2">
                        <div className="w-full  px-4 ">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2" htmlFor="grid-password">
                                Birthdate
                            </label>
                            <input type="date" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="bdate" onChange={(e) => changeHandler(e)} value="lucky.jesse" />
                        </div>
                        <div className="w-full  px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2" htmlFor="grid-password">
                                acedmic Year
                            </label>
                            <input type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="acadmicyear" onChange={(e) => changeHandler(e)} />
                        </div>
                        <div className="w-full  px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Student's Mobile No.</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" name="mobileno" onChange={(e) => changeHandler(e)} required />
                        </div>
                        <div className="w-full  px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Email</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="email" name="email" onChange={(e) => changeHandler(e)} required />
                        </div>
                        <div className="w-full  px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Gender</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" name="gender" onChange={(e) => changeHandler(e)} required />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 md:gap-6 mt-2">
                        <div className="w-full  px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Name of Father</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" name="fathername" onChange={(e) => changeHandler(e)} required />
                        </div>
                        <div className="w-full  px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Father's Mobile No.</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" name="fathermonumber" onChange={(e) => changeHandler(e)} required />
                        </div>
                        <div className="w-full  px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Father's Occupation</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" name="fatheroccupation" onChange={(e) => changeHandler(e)} required />
                        </div>
                        <div className="w-full  px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Father's Income</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" name="fatherincome" onChange={(e) => changeHandler(e)} required />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 md:gap-6 mt-2">
                        <div className="w-full  px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Mother's Name</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" name="mothername" onChange={(e) => changeHandler(e)} required />
                        </div>
                        <div className="w-full  px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Mother's Occupation</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" name="moccupation" onChange={(e) => changeHandler(e)} required />
                        </div>
                        <div className="w-full  px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Mother tongue</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" name="mothertongue" onChange={(e) => changeHandler(e)} required />
                        </div>
                        <div className="w-full  px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Siblings</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" name="siblings" onChange={(e) => changeHandler(e)} />
                        </div>
                    </div>

                    <div className="w-full  px-4 mt-2">
                        <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Present Address</label>
                        <textarea className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="presentaddress" id="present_address" cols="30" rows="3" onChange={(e) => changeHandler(e)} required></textarea>
                    </div>

                    <div className="w-full  px-4 mt-2">
                        <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Grand Parents (If any specific area of Working)</label>
                        <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" name="grandparents" id="" onChange={(e) => changeHandler(e)} />
                    </div>

                    <div className="w-full  px-4 mt-2">
                        <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Permanent Address</label>
                        <textarea className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="permanentaddress" id="permanent_address" cols="30" rows="3" onChange={(e) => changeHandler(e)} required></textarea>
                    </div>

                    <div className="grid md:grid-cols-3 md:gap-6 mt-2">
                        <div className="w-full  px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Medium of Instruction in 12th Std</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" name="medium_of_instruction" onChange={(e) => changeHandler(e)} required />
                        </div>
                        <div className="w-full px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2" htmlFor="">Mark obtained in 12 Std :</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="number" name="markof12" id="" onChange={(e) => changeHandler(e)} />
                        </div>
                        <div className="w-full px-4">
                            <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2">Last school/college studied</label>
                            <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name="lastschoolcollege" type="text" onChange={(e) => changeHandler(e)} />
                        </div>
                    </div>

                    <div className="w-full  px-4 mt-2">
                        <label className="block uppercase text-blueGray-600 text-md font-semibold mb-2" htmlFor="">Hobbies</label>
                        <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" name="hobby" id="" onChange={(e) => changeHandler(e)} />
                    </div>

                    <button className="border-0 w-20 text-lg w-20 py-1 placeholder-blueGray-300 text-white slate-300 bg-blue-900 shadow focus:outline-none focus:ring ease-linear transition-all duration-150 mt-3" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
