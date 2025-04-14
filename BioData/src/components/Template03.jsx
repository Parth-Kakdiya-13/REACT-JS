import React, { forwardRef, useEffect, useState, ref } from "react";
import classes from './Template03.module.css'
import userIcon from '../assets/userIcon.png'

const Template03 = forwardRef(({ data }, ref) => {

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
            <div className='p-10 max-[650px]:p-8 max-[550px]:p-3 w-full h-full mt-10'>
                {/* top  */}
                <div className="flex items-center justify-center gap-10 max-[550px]:gap-1">
                    <div className="w-96 h-fit flex flex-col justify-center gap-2">
                        <div style={{ border: "3px solid #814f00", padding: "5px" }}>
                            {!formData.image && <div className="w-full h-52  flex justify-center items-center" style={{ background: "gray" }}>
                                <img src={userIcon} className="w-20 h-20" />
                            </div>}
                            {formData.image && <img
                                src={formData.image}
                                alt="Profile"
                                className="w-full h-fit"
                            />}
                        </div>
                        <p className="capitalize text-center text-md sm:text-xl md:text-2xl font-semibold">{formData.name ? formData.name : "Name"}</p>
                    </div>
                    {/* personal details */}
                    <div className="w-full max-[550px]:w-52 max-[550px]:mx-5">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Personal Details</h2>
                        <div className="mt-3 ml-2 md:ml-5">
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-28 md:w-40">Birth data:
                                </h3>
                                <p className="text-md">{formData.dateofbirth ? formattedDate : "xx/xx/xxxx"} </p>
                            </div>
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-28 md:w-40">Birth Place:
                                </h3>
                                <p className="text-md ">{formData.place ? formData.place : "Place"}</p>
                            </div>
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-28 md:w-40" >Religion:
                                </h3>
                                <p className="text-md ">{formData.cast ? formData.cast : "Cast"} </p>
                            </div>
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-28 md:w-40" >Height:
                                </h3>
                                <p className="text-md ">{formData.height ? formData.height : "Height"}</p>
                            </div>
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-28 md:w-40" >Blood Group:
                                </h3>
                                <p className="text-md ">{formData.blood ? formData.blood : "blood"}</p>
                            </div>
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-28 md:w-40" >Education:
                                </h3>
                                <p className="text-md " >{formData.education ? formData.education : "Education"}</p>
                            </div>
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-28 md:w-40" >Occupation:
                                </h3>
                                <p className="text-md ">{formData.occupation ? formData.occupation : "Occupation"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* bottom */}
                <div className="mt-10 md:mt-5 max-[650px]:ml-10">
                    {/* family details */}
                    <div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Family Details</h2>
                        <div className="ml-2 md:ml-5">
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-40">Father name:
                                </h3>
                                <p className="text-md ">{formData.father ? formData.father : "Father name"}</p>
                            </div>
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-40">Mother name:
                                </h3>
                                <p className="text-md ">{formData.mother ? formData.mother : "Mother name"}</p>
                            </div>
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-40">Siblings:
                                </h3>
                                <p className="text-md ">{formData.siblings ? formData.siblings : "Siblings"}</p>
                            </div>
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-40">Maternal:
                                </h3>
                                <p className="text-md ">{formData.maternal ? formData.maternal : "Maternal"}</p>
                            </div>
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-40">Status:
                                </h3>
                                <p className="text-md ">{formData.status ? formData.status : "Satus"}</p>
                            </div>
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-40">Property:
                                </h3>
                                <p className="text-md ">{formData.property ? formData.property : "Property"}</p>
                            </div>
                        </div>
                    </div>
                    {/* contact details */}
                    <div className="mt-5">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Family Details</h2>
                        <div className="ml-2 md:ml-5">
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-40">Phone No:
                                </h3>
                                <p className="text-md ">{formData.contact ? formData.contact : "Contact"}</p>
                            </div>
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-40">Address:
                                </h3>
                                <p className="text-md ">{formData.address ? formData.address : "Address"}</p>
                            </div>
                            <div className="flex gap-2 mt-3 max-[550px]:mt-2">
                                <h3 className="text-md font-semibold w-40">Email:
                                </h3>
                                <p className="text-md ">{formData.email ? formData.email : "Email"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Template03;
