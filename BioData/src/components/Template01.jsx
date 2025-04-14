import React, { forwardRef, useEffect, useState } from "react";
import block from '../assets/block.png';
import userIcon from '../assets/userIcon.png'
import classes from './Template01.module.css'


const Template01 = forwardRef(({ data }, ref) => {


    const [formData, setFormData] = useState({
        name: "",
        dateofbirth: "",
        place: "",
        rashi: "",
        height: "",
        education: "",
        cast: "",
        occupation: "",
        father: "",
        mother: "",
        siblings: "",
        status: "",
        native: "",
        property: "",
        blood: "",
        maternal: "",
        image: null
    });

    useEffect(() => {
        setFormData({
            name: data.name,
            dateofbirth: data.dateofbirth,
            place: data.place,
            rashi: data.rashi,
            height: data.height,
            education: data.education,
            cast: data.cast,
            occupation: data.occupation,
            father: data.father,
            mother: data.mother,
            siblings: data.siblings,
            status: data.status,
            native: data.native,
            property: data.property,
            contact: data.contact,
            address: data.address,
            email: data.email,
            blood: data.blood,
            maternal: data.maternal,
            image: data.image
        })


    }, [data]);

    const date = new Date(formData.dateofbirth);
    const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });



    return (
        <div className="shadow-2xl w-fit h-fit">
            <div
                ref={ref}
                className={classes.container}
            // style={{
            //     width: "40rem",
            //     height: "55rem",
            //     display: "flex",
            //     alignItems: "center",
            //     justifyContent: "center",
            //     gap: "20px",
            //     position: "relative",
            //     overflow: "hidden",
            //     background: "#ffe9c0",
            //     padding: "10px"
            // }}
            >
                <div style={{ width: "100%", height: "100%", position: "relative", padding: "15px" }}>
                    <img className={classes.leftBlock} src={block} />
                    <img className={classes.rightBlock} src={block} />
                    <div style={{ width: "100%", height: "100%", border: "3px solid #15261c", padding: "10px" }}>
                        <div
                            className={classes.main}
                        // style={{
                        //     width: "100%", height: "100%", border: "1px solid #15261c", display: "flex",
                        //     alignItems: "center",
                        //     justifyContent: "center",
                        //     gap: "20px",
                        //     padding: "20px"
                        // }}
                        >
                            {/* Left Sidebar */}
                            <div className={classes.leftDetails}
                            //  style={{ width: "100%", fontSize: "16px", display: "flex", flexDirection: "column", gap: "20px" }}
                            >
                                {/* personal details */}
                                <div className="w-full">
                                    <h2>Personal Details</h2>
                                    <div className="mt-2">
                                        <div className="flex mt-5 max-[650px]:mt-0 items-center">
                                            <p style={{ color: "#454545", }} className="w-full max-[650px]:w-22">Birth data:
                                            </p>
                                            <span className="w-full max-[650px]:w-22">{formData.dateofbirth ? formattedDate : "xx/xx/xxxx"} </span>
                                        </div>
                                        <div className="flex mt-2 items-start">
                                            <p style={{ color: "#454545" }} className="w-full max-[650px]:w-22">Birth Place:
                                            </p>
                                            <span className="w-full max-[650px]:w-fit">{formData.place ? formData.place : "Place"}</span>
                                        </div>
                                        <div className="flex mt-2 items-start">
                                            <p style={{ color: "#454545" }} className="w-full max-[650px]:w-22 ">Religion:
                                            </p>
                                            <span className="w-full max-[650px]:w-fit">{formData.cast ? formData.cast : "Cast"} </span>
                                        </div>
                                        <div className="flex mt-2 items-start">
                                            <p style={{ color: "#454545" }} className="w-full max-[650px]:w-22 ">Height:
                                            </p>
                                            <span className="w-full max-[650px]:w-fit">{formData.height ? formData.height : "Height"}</span>
                                        </div>
                                        <div className="flex mt-2 items-start">
                                            <p style={{ color: "#454545" }} className="w-full max-[650px]:w-22 ">Blood Group:
                                            </p>
                                            <span className="w-full max-[650px]:w-fit">{formData.blood ? formData.blood : "blood"}</span>
                                        </div>
                                        <div className="flex mt-2 items-start">
                                            <p style={{ color: "#454545" }} className="w-full max-[650px]:w-22 ">Education:
                                            </p>
                                            <p className=" w-full max-[650px]:w-fit">{formData.education ? formData.education : "Education"}</p>
                                        </div>
                                        <div className="flex mt-2 items-start">
                                            <p style={{ color: "#454545" }} className="w-full max-[650px]:w-22">Occupation:
                                            </p>
                                            <p className="w-full max-[650px]:w-fit">{formData.occupation ? formData.occupation : "Occupation"}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* family details */}
                                <div className="w-full">
                                    <h2>Family Details</h2>
                                    <div className="mt-5 max-[650px]:mt-0">
                                        <div className=" flex items-start mt-2">
                                            <p style={{ color: "#454545" }} className="w-full max-[650px]:w-22">Father name:
                                            </p>
                                            <p className="w-full max-[650px]:w-fit">{formData.father ? formData.father : "Father name"}</p>
                                        </div>
                                        <div className=" flex items-start mt-2">
                                            <p style={{ color: "#454545" }} className="w-full max-[650px]:w-22">Mother name:
                                            </p>
                                            <p className="w-full max-[650px]:w-fit">{formData.mother ? formData.mother : "Mother name"}</p>
                                        </div>
                                        <div className=" flex items-start mt-2">
                                            <p style={{ color: "#454545" }} className="w-full max-[650px]:w-22">Siblings:
                                            </p>
                                            <p className="w-full max-[650px]:w-fit">{formData.siblings ? formData.siblings : "Siblings"}</p>
                                        </div>
                                        <div className=" flex items-start mt-2">
                                            <p style={{ color: "#454545" }} className="w-full max-[650px]:w-22">Maternal:
                                            </p>
                                            <p className="w-full max-[650px]:w-fit">{formData.maternal ? formData.maternal : "Maternal uncle"}</p>
                                        </div>
                                        <div className=" flex items-start mt-2">
                                            <p style={{ color: "#454545" }} className="w-full max-[650px]:w-22">Status:
                                            </p>
                                            <p className="w-full max-[650px]:w-fit">{formData.status ? formData.status : "Satus"}</p>
                                        </div>
                                        <div className=" flex items-start mt-2">
                                            <p style={{ color: "#454545" }} className="w-full max-[650px]:w-22">Property:
                                            </p>
                                            <p className="w-full max-[650px]:w-fit">{formData.property ? formData.property : "Property"}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* contact details */}
                                <div className="w-full h-full flex flex-col text-left mt-5 max-[650px]:mt-0 z-40" >
                                    <h2>Contact Details</h2>
                                    <div className="">
                                        <div className="flex items-start mt-5 max-[650px]:mt-2">
                                            <p style={{ color: "#454545" }} className="w-full max-[650px]:w-24">Phone No:
                                            </p>
                                            <span className="w-full max-[650px]:w-fit">{formData.contact ? formData.contact : "Contact"}</span>
                                        </div>
                                        <div className="flex items-start mt-2">
                                            <p style={{ color: "#454545" }} className="w-full max-[650px]:w-24">Address:
                                            </p>
                                            <span className="w-full max-[650px]:w-fit">{formData.address ? formData.address : "Address"}</span>
                                        </div>
                                        <div className="flex items-start mt-2">
                                            <p style={{ color: "#454545" }} className="w-full max-[650px]:w-24">Email:
                                            </p>
                                            <span className="w-full max-[650px]:w-22">{formData.email ? formData.email : "Email"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className={classes.rightDetails} style={{ fontSize: "16px", width: "60%", height: "100%", displa: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "200px" }}>
                                <div className="h-fit p-3 flex flex-col items-center justify-center" style={{ position: "relative", zIndex: "40", border: "5px solid #15261c", padding: "5px" }}>
                                    {!formData.image && <div className="w-full h-52 max-[650px]:h-44 max-md:h-40 flex justify-center items-center f-fit mx-5" style={{ background: "gray" }}>
                                        <img src={userIcon} className="w-fit h-20" />
                                    </div>}
                                    {formData.image && <img
                                        src={formData.image}
                                        alt="Profile"
                                        className="w-full h-fit mx-5"
                                    />}
                                </div>

                                <div className="flex flex-col justify-center items-center text-center w-full mt-5">
                                    <h1 ><span>{formData.name ? formData.name : "Name"}</span></h1>
                                    {/* <p style={{ fontSize: "14px", marginTop: "5px", textTransform: "capitalize" }}>
                                        <span style={{ color: "gray", fontSize: "18px" }}>{formData.occupation ? formData.occupation : "Occupation"}</span>
                                    </p> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Template01;
