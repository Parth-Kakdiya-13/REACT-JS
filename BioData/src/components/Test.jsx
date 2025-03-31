import React, { forwardRef, useEffect, useState } from "react";
import profileImage from '../assets/pk_01.jpg';




const Test = forwardRef(({ data }, ref) => {

    //     const marriageIcons = [
    //     "https://cdn-icons-png.flaticon.com/128/929/929571.png", // Wedding Rings
    //     "https://cdn-icons-png.flaticon.com/128/2920/2920056.png", // Bride & Groom
    //     "https://cdn-icons-png.flaticon.com/128/3062/3062195.png", // Wedding Bells
    //     "https://cdn-icons-png.flaticon.com/128/2892/2892094.png", // Love Heart
    //     "https://cdn-icons-png.flaticon.com/128/3012/3012883.png", // Champagne Toast
    //     "https://cdn-icons-png.flaticon.com/128/2956/2956609.png", // Calendar with Heart
    //     "https://cdn-icons-png.flaticon.com/128/2315/2315377.png", // Groom Tuxedo
    //     "https://cdn-icons-png.flaticon.com/128/1385/1385301.png"  // Wedding Invitation
    // ];

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
        maternal: ""
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
            maternal: data.maternal
        })
    }, [data]);


    return (
        <div
            ref={ref}
            style={{
                width: "35rem",
                height: "50rem",
                display: "flex",
                background: "#fff",
                position: "relative",
                overflow: "hidden",
                padding: "20px"
            }}
        >
            {/* Render Random PNG Background Icons */}
            {/* {Array.from({ length: 13 }).map((_, i) => {
                const iconSrc = marriageIcons[Math.floor(Math.random() * marriageIcons.length)];
                return (
                    <img
                        key={i}
                        src={iconSrc}
                        alt="icon"
                        style={{
                            position: "absolute",
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: "50px",
                            height: "50px",
                            opacity: 0.2,
                            transform: `rotate(${Math.random() * 360}deg)`,
                        }}
                    />
                );
            })} */}

            {/* Left Sidebar */}
            <div style={{ width: "35%", textAlign: "center", display: "flex", gap: "10px", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
                <div className="w-44 h-auto p-5 flex flex-col items-center justify-center bg-black border border-black  rounded-b-xl rounded-tl-xl text-white">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="mt-5 w-44 h-40 mx-5 rounded-xl"
                    />
                </div>

                <div>
                    <h1 style={{ fontSize: "24px", marginTop: "10px", textTransform: "capitalize" }}>{formData.name ? formData.name : "Name"}</h1>
                    <p style={{ fontSize: "14px", marginTop: "5px", textTransform: "capitalize" }}>
                        {formData.occupation ? formData.occupation : "Occupation"}
                    </p>
                </div>

                <div className="w-44 h-full flex flex-col text-left bg-black text-white rounded-xl p-5 mt-5">
                    <h2 className="mt-5" style={{ fontSize: " 20px " }}>Contact Details</h2>
                    <p className="mt-5">Phone No:<br /> {formData.contact ? formData.contact : "Contact"}</p>
                    <p className="mt-5">Email:<br /> {formData.address ? formData.address : "Address"}</p>
                    <p className="mt-5">Email:<br /> {formData.email ? formData.email : "Email"}</p>
                </div>
            </div>

            {/* Right Content */}
            <div className="w-full">
                <div className="w-full h-16 rounded-r-xl bg-black">

                </div>
                <div style={{ margin: "20px" }}>
                    <h2 className="w-fit " style={{ fontSize: "20px", color: "gray" }}>Personal Details</h2>
                    <div className="ml-5 mt-2">
                        <p className="mt-2">Birth data: {formData.dateofbirth ? formData.dateofbirth : "xx/xx/xxxx"} </p>
                        <p className="mt-2">Birth Place: {formData.place ? formData.place : "Place"}</p>
                        <p className="mt-2">Religion: {formData.cast ? formData.cast : "Cast"} </p>
                        <p className="mt-2">Height: {formData.height ? formData.height : "Height"}</p>
                        <p className="mt-2">Blood Group: {formData.blood ? formData.blood : "blood"}</p>
                        <p className="mt-2">Education: {formData.education ? formData.education : "Education"}</p>
                        <p className="mt-2">Occupation: {formData.occupation ? formData.occupation : "Occupation"}</p>
                    </div>
                </div>
                <div style={{ margin: "20px" }}>
                    <h2 style={{ fontSize: "20px", color: "gray" }}>Family Details</h2>
                    <div className="ml-5 mt-2">
                        <p className="mt-2">Father name: {formData.father ? formData.father : "Father name"}</p>
                        <p className="mt-2">Mother name: {formData.mother ? formData.mother : "Mother name"}</p>
                        <p className="mt-2">Siblings: {formData.siblings ? formData.siblings : "Siblings"}</p>
                        <p className="mt-2">Maternal: {formData.maternal ? formData.maternal : "Maternal uncle"}</p>
                        <p className="mt-2">Status: {formData.status ? formData.status : "Satus"}</p>
                        <p className="mt-2">Property: {formData.property ? formData.property : "Property"}</p>
                    </div>
                </div>
            </div>
        </div >
    );
});

export default Test;
