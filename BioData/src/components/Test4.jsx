import React, { forwardRef, useEffect, useState } from "react";
import classes from './Test4.module.css'
import userIcon from '../assets/userIcon.png'



const Test4 = forwardRef(({ data }, ref) => {

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
        <div className={classes.container} ref={ref}>
            <div className='px-10 py-5 max-[650px]:p-8 max-[550px]:p-3 w-full h-full'>
                {/* top  */}
                <div className="flex justify-center mt-5 gap-1">
                    <div className="w-44 md:w-fit h-fit items-center flex flex-col justify-center gap-2 bg-red-100">
                        {!formData.image && <div className="w-40 h-52  flex justify-center items-center" style={{ background: "gray" }}>
                            <img src={userIcon} className="w-20 h-20" />
                        </div>}
                        {formData.image && <img
                            src={formData.image}
                            alt="Profile"
                            className="w-fit h-60"
                        />}
                        <p className="capitalize text-center text-md sm:text-xl md:text-2xl font-semibold">{formData.name ? formData.name : "Name"}</p>
                    </div>
                    {/* personal details */}
                    <div className="w-full max-[550px]:w-52">
                        <h2 className="text-xl font-semibold">Personal Details</h2>
                        <div className="mt-3 ml-5">
                            <div className="flex gap-2 mt-1">
                                <h3 className="text-md font-semibold w-fit">Birth data:
                                </h3>
                                <p className="text-md ">{formData.dateofbirth ? formattedDate : "xx/xx/xxxx"} </p>
                            </div>
                            <div className="flex gap-2 mt-1">
                                <h3 className="text-md font-semibold w-fit">Birth Place:
                                </h3>
                                <p className="text-md ">{formData.place ? formData.place : "Place"}</p>
                            </div>
                            <div className="flex gap-2 mt-1">
                                <h3 className="text-md font-semibold w-fit" >Religion:
                                </h3>
                                <p className="text-md ">{formData.cast ? formData.cast : "Cast"} </p>
                            </div>
                            <div className="flex gap-2 mt-1">
                                <h3 className="text-md font-semibold w-fit" >Height:
                                </h3>
                                <p className="text-md ">{formData.height ? formData.height : "Height"}</p>
                            </div>
                            <div className="flex gap-2 mt-1">
                                <h3 className="text-md font-semibold w-fit" >Blood Group:
                                </h3>
                                <p className="text-md ">{formData.blood ? formData.blood : "blood"}</p>
                            </div>
                            <div className="flex gap-2 mt-1">
                                <h3 className="text-md font-semibold w-fit" >Education:
                                </h3>
                                <p className="text-md " >{formData.education ? formData.education : "Education"}</p>
                            </div>
                            <div className="flex gap-2 mt-1">
                                <h3 className="text-md font-semibold w-fit" >Occupation:
                                </h3>
                                <p className="text-md w-full">{formData.occupation ? formData.occupation : "Occupation"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* bottom */}
                <div className="mt-5 ml-5 max-[650px]:ml-5">
                    {/* family details */}
                    <div className="">
                        <h2 className="text-xl font-semibold">Family Details</h2>
                        <div className="ml-5">
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-fit">Father name:
                                </h3>
                                <p className="text-md ">{formData.father ? formData.father : "Father name"}</p>
                            </div>
                            <div className="flex gap-2 mt-1 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-fit">Mother name:
                                </h3>
                                <p className="text-md ">{formData.mother ? formData.mother : "Mother name"}</p>
                            </div>
                            <div className="flex gap-2 mt-1 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-fit">Siblings:
                                </h3>
                                <p className="text-md ">{formData.siblings ? formData.siblings : "Siblings"}</p>
                            </div>
                            <div className="flex gap-2 mt-1 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-fit">Maternal:
                                </h3>
                                <p className="text-md ">{formData.maternal ? formData.maternal : "Maternal"}</p>
                            </div>
                            <div className="flex gap-2 mt-1 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-fit">Status:
                                </h3>
                                <p className="text-md ">{formData.status ? formData.status : "Satus"}</p>
                            </div>
                            <div className="flex gap-2 mt-1 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-fit">Property:
                                </h3>
                                <p className="text-md ">{formData.property ? formData.property : "Property"}</p>
                            </div>
                        </div>
                    </div>
                    {/* contact details */}
                    <div className="mt-5 md:mt-3">
                        <h2 className="text-xl font-semibold">Family Details</h2>
                        <div className="ml-5">
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-fit">Phone No:
                                </h3>
                                <p className="text-md ">{formData.contact ? formData.contact : "Contact"}</p>
                            </div>
                            <div className="flex gap-2 mt-1 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-fit">Address:
                                </h3>
                                <p className="text-md ">{formData.address ? formData.address : "Address"}</p>
                            </div>
                            <div className="flex gap-2 mt-1 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-fit">Email:
                                </h3>
                                <p className="text-md">{formData.email ? formData.email : "Email"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Test4;
