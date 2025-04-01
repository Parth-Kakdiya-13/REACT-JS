import React, { forwardRef, useEffect, useState } from "react";
import profileImage from '../assets/pk_01.jpg';
import block from '../assets/block.png';




const Test = forwardRef(({ data }, ref) => {
    // 15261c
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
        <div className="shadow-2xl w-fit h-fit">
            <div
                ref={ref}
                style={{
                    width: "40rem",
                    height: "55rem",
                    display: "flex",
                    padding: "10px",
                    background: "#ffe9c0"
                }}
            >
                <div style={{ width: "100%", height: "100%", position: "relative", padding: "20px" }}>
                    <div style={{ width: "100%", height: "100%", border: "3px solid #15261c", padding: "10px" }}>
                        <div style={{ width: "100%", height: "100%", border: "1px solid #15261c" }}>
                            <img src={block} style={{ width: "200px", position: "absolute", left: "0", top: "0" }} />
                            <img src={block} style={{ width: "200px", position: "absolute", right: "0", bottom: "0", transform: "rotate(180deg)" }} />
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px", margin: "30px", fontSize: "20px", position: "relative", padding: "10px" }}>
                                {/* personal details */}
                                <div>
                                    <img src={profileImage} style={{ width: "150px", height: "200px", position: "absolute", top: "50px", right: "-15px" }} alt="profileimage" />
                                    <h2 style={{ fontSize: "20px", color: "#15261c", textAlign: "center", fontWeight: "500" }}>Personal Details</h2>
                                    <div>
                                        <div style={{ display: "flex", marginTop: "10px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Name:
                                            </p>
                                            <span style={{ fontSize: "16px", textTransform: "capitalize" }}>{formData.name ? formData.name : "Name"}</span>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Birth data:
                                            </p>
                                            <span style={{ fontSize: "16px" }}>{formData.dateofbirth ? formData.dateofbirth : "xx/xx/xxxx"} </span>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Birth Place:
                                            </p>
                                            <span style={{ fontSize: "16px" }}>{formData.place ? formData.place : "Place"}</span>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Religion:
                                            </p>
                                            <span style={{ fontSize: "16px" }}>{formData.cast ? formData.cast : "Cast"} </span>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Height:
                                            </p>
                                            <span style={{ fontSize: "16px" }}>{formData.height ? formData.height : "Height"}</span>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Blood Group:
                                            </p>
                                            <span style={{ fontSize: "16px" }}>{formData.blood ? formData.blood : "blood"}</span>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Education:
                                            </p>
                                            <p style={{ fontSize: "16px" }}>{formData.education ? formData.education : "Education"}</p>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Occupation:
                                            </p>
                                            <p style={{ fontSize: "16px" }}>{formData.occupation ? formData.occupation : "Occupation"}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* family details */}
                                <div>
                                    <h2 style={{ fontSize: "20px", textAlign: "center", fontWeight: "500" }}>Family Details</h2>
                                    <div>
                                        <div style={{ display: "flex", marginTop: "10px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Father name:
                                            </p>
                                            <span style={{ fontSize: "16px" }}>{formData.father ? formData.father : "Father name"}</span>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Mother name:
                                            </p>
                                            <span style={{ fontSize: "16px" }}>{formData.mother ? formData.mother : "Mother name"}</span>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Siblings:
                                            </p>
                                            <span style={{ fontSize: "16px" }}>{formData.siblings ? formData.siblings : "Siblings"}</span>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Maternal:
                                            </p>
                                            <span style={{ fontSize: "16px" }}>{formData.maternal ? formData.maternal : "Maternal uncle"}</span>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Status:
                                            </p>
                                            <span style={{ fontSize: "16px" }}>{formData.status ? formData.status : "Satus"}</span>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Native:
                                            </p>
                                            <span style={{ fontSize: "16px" }}>{formData.native ? formData.native : "Native"}</span>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Property:
                                            </p>
                                            <span style={{ fontSize: "16px" }}>{formData.property ? formData.property : "Property"}</span>
                                        </div>
                                    </div>
                                </div>
                                {/* contact details */}
                                <div>
                                    <h2 style={{ fontSize: "20px", textAlign: "center", fontWeight: "500" }}>Contact Details</h2>
                                    <div>
                                        <div style={{ display: "flex", marginTop: "10px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Phone number:
                                            </p>
                                            <span style={{ fontSize: "16px" }}>{formData.contact ? formData.contact : "Number"}</span>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Email name:
                                            </p>
                                            <span style={{ fontSize: "16px" }}>{formData.email ? formData.email : "Email"}</span>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "5px" }}>
                                            <p style={{ width: "120px", fontSize: "16px" }}>Address:
                                            </p>
                                            <span style={{ fontSize: "16px", width: "300px" }}>{formData.address ? formData.address : "Address"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
});

export default Test;
