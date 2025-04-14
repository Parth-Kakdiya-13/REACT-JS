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

import classes from './Template02.module.css'

const marriageIcons = [
    diamond, diamondLine, flower, bird, rabbit, butterfly, set, stars, pandel, lines, group, ring
];

const Template02 = forwardRef(({ data }, ref) => {

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
        <div className="relative w-fit h-fit shadow-2xl max-md:mt-20 flex">
            <div className=" h-fit w-fit relative p-5" ref={ref}>
                <div
                    className={classes.container}

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
                    <div className={classes.leftDetails}>
                        {/* personal details */}
                        <div>
                            <h2 className="w-full font-light p-2" style={{ fontSize: "18px", color: "white", background: "#ff6ea3", fontWeight: "500" }}>Personal Details</h2>
                            <div className="mt-2 ml-10 max-[600px]:ml-5">
                                <div className="flex mt-5 max-[600px]:mt-2 items-center">
                                    <p style={{ color: "#454545", }} className=" w-full ">Birth data:
                                    </p>
                                    <p className="w-full">{formData.dateofbirth ? formattedDate : "xx/xx/xxxx"} </p>
                                </div>
                                <div className="flex mt-2 items-start">
                                    <p style={{ color: "#454545" }} className=" w-full ">Birth Place:
                                    </p>
                                    <p className="w-full">{formData.place ? formData.place : "Place"}</p>
                                </div>
                                <div className="flex mt-2 items-start">
                                    <p style={{ color: "#454545" }} className=" w-full ">Religion:
                                    </p>
                                    <p className="w-full">{formData.cast ? formData.cast : "Cast"} </p>
                                </div>
                                <div className="flex mt-2 items-start">
                                    <p style={{ color: "#454545" }} className=" w-full ">Height:
                                    </p>
                                    <p className="w-full">{formData.height ? formData.height : "Height"}</p>
                                </div>
                                <div className="flex mt-2 items-start">
                                    <p style={{ color: "#454545" }} className=" w-full ">Blood Group:
                                    </p>
                                    <p className="w-full">{formData.blood ? formData.blood : "blood"}</p>
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
                            <div className="mt-5 max-[600px]:mt-2 ml-10 max-[600px]:ml-5">
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
                            <div className="ml-10 max-[600px]:ml-5">
                                <div className="flex items-start mt-5  max-[600px]:mt-2">
                                    <p style={{ color: "#454545" }} className="w-full ">Phone No:
                                    </p>
                                    <p className="w-full">{formData.contact ? formData.contact : "Contact"}</p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <p style={{ color: "#454545" }} className="w-full">Address:
                                    </p>
                                    <p className="w-full">{formData.address ? formData.address : "Address"}</p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <p style={{ color: "#454545" }} className="w-full">Email:
                                    </p>
                                    <p className="w-full">{formData.email ? formData.email : "Email"}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className={classes.rightDetails} >
                        <div className="h-fit p-3 flex flex-col items-center justify-center" style={{ position: "relative", zIndex: "40", background: "rgba(255, 182, 0,0.5)" }}>
                            {!formData.image && <div className="w-full h-52 max-[600px]:h-44 flex justify-center items-center mx-5" style={{ background: "gray" }}>
                                <img src={userIcon} className="w-20 h-20" />
                            </div>}
                            {formData.image && <img
                                src={formData.image}
                                alt="Profile"
                                className="w-full h-fit"
                            />}
                        </div>

                        <div className="flex flex-col justify-center items-center text-center  w-full mt-5">
                            <h>{formData.name ? formData.name : "Name"}</h>
                            {/* <p style={{ fontSize: "14px", marginTop: "5px", textTransform: "capitalize" }}>
                                <p style={{ color: "gray", fontSize: "18px" }}>{formData.occupation ? formData.occupation : "Occupation"}</p>
                            </p> */}
                        </div>

                    </div>
                </div>
            </div>
            <button
                onClick={shuffleIcons}
                style={{
                    position: "absolute",
                    top: "-50px",
                    left: "calc(40%)",
                    // transform: "translateX(-50%)",
                    padding: "10px 20px",
                    background: "#FFD700",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                    boxShadow: "2px 3px 5px gray"
                }}
            >
                Shuffle Icons
            </button>
        </div>
    );
});

export default Template02;
