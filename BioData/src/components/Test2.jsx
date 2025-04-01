import React, { forwardRef, useEffect, useState } from "react";
import userIcon from '../assets/userIcon.png'

import diamond from '../assets/diamond.png';
import diamondLine from '../assets/diamondLine.png';
import flower from '../assets/flower.png';
import bird from '../assets/bird.png';
import rabbit from '../assets/rabbit.png';
import butterfly from '../assets/butterfly.png';
import set from '../assets/set.png';
import stars from '../assets/stars.png';
import pandel from '../assets/pandel.png';
import lines from '../assets/lines.png';
import group from '../assets/group.png';
import ring from '../assets/ring.png';

const marriageIcons = [
    diamond, diamondLine, flower, bird, rabbit, butterfly, set, stars, pandel, lines, group, ring
];

const Test2 = forwardRef(({ data }, ref) => {

    const [icons, setIcons] = useState(generateRandomIcons);



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

    function generateRandomIcons() {
        return Array.from({ length: 13 }).map(() => ({
            src: marriageIcons[Math.floor(Math.random() * marriageIcons.length)],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 30 + 30}px`,
            rotation: `${Math.random() * 360}deg`,
        }));
    }

    function shuffleIcons() {
        setIcons(generateRandomIcons());
    }


    const date = new Date(formData.dateofbirth);
    const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    console.log(data.image)

    return (
        <div className="relative w-fit h-fit shadow-2xl">
            <div className=" h-fit w-fit relative p-5" ref={ref}>
                <div
                    style={{
                        width: "40rem",
                        height: "55rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "30px",
                        position: "relative",
                        overflow: "hidden",
                        // padding: "0 50px",
                        border: "3px solid #ff6ea3",
                        // margin: "50px"
                    }}
                >

                    {/* Render Random PNG Background Icons */}
                    {icons.map((icon, i) => (
                        <img
                            key={i}
                            src={icon.src}
                            alt="icon"
                            style={{
                                position: "absolute",
                                top: icon.top,
                                left: icon.left,
                                width: icon.size,
                                height: "auto",
                                opacity: 0.3,
                                transform: `rotate(${icon.rotation})`,
                                pointerEvents: "none",
                                zIndex: "-1"
                            }}
                        />
                    ))}

                    {/* Left Sidebar */}
                    <div style={{ width: "100%", fontSize: "16px", display: "flex", flexDirection: "column" }}>
                        {/* personal details */}
                        <div>
                            <h2 className="w-full font-light p-2" style={{ fontSize: "18px", color: "white", background: "#ff6ea3", fontWeight: "500" }}>Personal Details</h2>
                            <div className="mt-2 ml-10">
                                <div className="flex mt-5 items-center">
                                    <p style={{ color: "#454545", }} className=" w-full ">Birth data:
                                    </p>
                                    <span className="w-full">{formData.dateofbirth ? formattedDate : "xx/xx/xxxx"} </span>
                                </div>
                                <div className="flex mt-2 items-start">
                                    <p style={{ color: "#454545" }} className=" w-full ">Birth Place:
                                    </p>
                                    <span className="w-full">{formData.place ? formData.place : "Place"}</span>
                                </div>
                                <div className="flex mt-2 items-start">
                                    <p style={{ color: "#454545" }} className=" w-full ">Religion:
                                    </p>
                                    <span className="w-full">{formData.cast ? formData.cast : "Cast"} </span>
                                </div>
                                <div className="flex mt-2 items-start">
                                    <p style={{ color: "#454545" }} className=" w-full ">Height:
                                    </p>
                                    <span className="w-full">{formData.height ? formData.height : "Height"}</span>
                                </div>
                                <div className="flex mt-2 items-start">
                                    <p style={{ color: "#454545" }} className=" w-full ">Blood Group:
                                    </p>
                                    <span className="w-full">{formData.blood ? formData.blood : "blood"}</span>
                                </div>
                                <div className="flex mt-2 items-start">
                                    <p style={{ color: "#454545" }} className=" w-full ">Education:
                                    </p>
                                    <p className=" w-full">{formData.education ? formData.education : "Education"}</p>
                                </div>
                                <div className="flex mt-2 items-start">
                                    <p style={{ color: "#454545" }} className=" w-full ">Occupation:
                                    </p>
                                    <p className="w-full">{formData.occupation ? formData.occupation : "Occupation"}</p>
                                </div>
                            </div>
                        </div>
                        {/* family details */}
                        <div>
                            <h2 className="font-light p-2 mt-5" style={{ fontSize: "20px", color: "white", background: "#ff6ea3", fontWeight: "500" }}>Family Details</h2>
                            <div className="mt-5 ml-10">
                                <div className=" flex items-start mt-2">
                                    <p style={{ color: "#454545" }} className="w-full ">Father name:
                                    </p>
                                    <p className="w-full">{formData.father ? formData.father : "Father name"}</p>
                                </div>
                                <div className=" flex items-start mt-2">
                                    <p style={{ color: "#454545" }} className="w-full ">Mother name:
                                    </p>
                                    <p className="w-full">{formData.mother ? formData.mother : "Mother name"}</p>
                                </div>
                                <div className=" flex items-start mt-2">
                                    <p style={{ color: "#454545" }} className="w-full ">Siblings:
                                    </p>
                                    <p className="w-full">{formData.siblings ? formData.siblings : "Siblings"}</p>
                                </div>
                                <div className=" flex items-start mt-2">
                                    <p style={{ color: "#454545" }} className="w-full ">Maternal:
                                    </p>
                                    <p className="w-full">{formData.maternal ? formData.maternal : "Maternal uncle"}</p>
                                </div>
                                <div className=" flex items-start mt-2">
                                    <p style={{ color: "#454545" }} className="w-full ">Status:
                                    </p>
                                    <p className="w-full">{formData.status ? formData.status : "Satus"}</p>
                                </div>
                                <div className=" flex items-start mt-2">
                                    <p style={{ color: "#454545" }} className="w-full ">Property:
                                    </p>
                                    <p className="w-full">{formData.property ? formData.property : "Property"}</p>
                                </div>
                            </div>
                        </div>
                        {/* contact details */}
                        <div className=" h-full flex flex-col text-left mt-5 z-40" >
                            <h2 className=" font-light p-2" style={{ fontSize: " 20px", color: "white", background: "#ff6ea3", fontWeight: "500" }}>Contact Details</h2>
                            <div className="ml-10">
                                <div className="flex items-start mt-5">
                                    <p style={{ color: "#454545" }} className="w-full ">Phone No:
                                    </p>
                                    <span className="w-full">{formData.contact ? formData.contact : "Contact"}</span>
                                </div>
                                <div className="flex items-start mt-2">
                                    <p style={{ color: "#454545" }} className="w-full">Address:
                                    </p>
                                    <span className="w-full">{formData.address ? formData.address : "Address"}</span>
                                </div>
                                <div className="flex items-start mt-2">
                                    <p style={{ color: "#454545" }} className="w-full">Email:
                                    </p>
                                    <span className="w-full">{formData.email ? formData.email : "Email"}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div style={{ paddingRight: "20px", fontSize: "16px", width: "70%", height: "100%", displa: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "200px" }}>
                        <div className="h-fit p-3 flex flex-col items-center justify-center" style={{ position: "relative", zIndex: "40", background: "rgba(255, 182, 0,0.5)" }}>
                            {!formData.image && <div className="w-full h-52 flex justify-center items-center f-fit mx-5" style={{ background: "gray" }}>
                                <img src={userIcon} className="w-20 h-20" />
                            </div>}
                            {formData.image && <img
                                src={formData.image}
                                alt="Profile"
                                className="w-full h-fit mx-5"
                            />}
                        </div>

                        <div className="flex flex-col justify-center items-center text-center  w-full mt-5">
                            <h1 style={{ fontSize: "24px", textTransform: "capitalize" }}><span>{formData.name ? formData.name : "Name"}</span></h1>
                            <p style={{ fontSize: "14px", marginTop: "5px", textTransform: "capitalize" }}>
                                <span style={{ color: "gray", fontSize: "18px" }}>{formData.occupation ? formData.occupation : "Occupation"}</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <button
                onClick={shuffleIcons}
                style={{
                    position: "absolute",
                    top: "-40px",
                    left: "0",
                    // transform: "translateX(-50%)",
                    padding: "10px 20px",
                    background: "#FFD700",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold"
                }}
            >
                Shuffle Icons
            </button>
        </div>
    );
});

export default Test2;
