import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import parth from "../assets/pk_01.jpg";
// import flower from '../assets/icons8-flowers-100 (1).png'
import patern from '../assets/Patern01.png'
import subpatern from '../assets/PaternSub01.png'
import { DataForm } from "./DataForm";

export const Template1 = () => {
    const resumeRef = useRef(null);

    const [aside, setAside] = useState(false);

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
    })



    function fetchFormData(data) {
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
            email: data.email
        })
    }

    function sideBarHandler() {
        setAside(!aside)
    }

    const exportAsPDF = async () => {
        if (!resumeRef.current) return;

        const canvas = await html2canvas(resumeRef.current, {
            scale: 3, // High quality rendering
            useCORS: true,
            backgroundColor: "#fff",
        });

        const imgData = canvas.toDataURL("image/png");

        // Define width as standard A4 (794px at 96 DPI)
        const pdfWidth = 1000;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // Maintain aspect ratio

        const pdf = new jsPDF({
            orientation: "p",
            unit: "px",
            format: [pdfWidth, pdfHeight], // Dynamically set height
            compress: true,
        });

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("Marriage_BioData.pdf");
    };



    const exportAsImage = async (format) => {
        if (!resumeRef.current) return;

        const canvas = await html2canvas(resumeRef.current, {
            scale: 1,
            backgroundColor: "#ffffff",
            useCORS: true,
        });

        const link = document.createElement("a");
        link.href = canvas.toDataURL(`image/${format}`);
        link.download = `Marriage_BioData.${format}`;
        link.click();
    };

    return (
        <div className="w-full flex flex-col justify-center items-center mt-20 ">

            {!aside && <div className="absolute min-[900px]:hidden left-0 top-44 bg-black p-2 rounded-r-md flex items-center justify-center text-white" onClick={sideBarHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414" /></svg>
            </div>}
            <div className="flex justify-center gap-10 w-full relative">
                <div className={`relative w-1/3 max-[900px]:absolute max-[900px]:top-20 max-[900px]:w-96 max-[900px]:bg-white max-[900px]:z-50 max-[900px]:-left-full transition-all duration-300 ease-in-out max-[900px]:p-10 max-[900px]:shadow-2xl ${aside ? "max-[900px]:left-0" : " "}`}>
                    <div className="absolute min-[900px]:hidden right-3 top-3 z-50" onClick={sideBarHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4" /></svg>
                    </div>
                    <DataForm onChangeFormData={fetchFormData} />
                </div>
                <div ref={resumeRef} style={{ width: "28rem", minHeight: "38rem", padding: "50px", paddingBottom: "60px", border: "2px solid gray", position: "relative", }}>
                    {/* top row */}
                    <div style={{ position: "absolute", top: "-175px", left: "208px", transform: "rotate(90deg)" }}>
                        <img src={subpatern} style={{ width: "30px", height: "" }} />
                    </div>
                    {/* bottom row */}
                    <div style={{ position: "absolute", bottom: "-175px", left: "208px", transform: "rotate(90deg)" }}>
                        <img src={subpatern} style={{ width: "30px", height: "" }} />
                    </div>
                    {/* top left column */}
                    <div style={{ position: "absolute", top: "30px", left: "8px", transform: "" }}>
                        <img src={patern} style={{ width: "30px", height: "100%" }} />
                    </div>
                    {/* bottom left column */}
                    <div style={{ position: "absolute", bottom: "28px", left: "7.5px", transform: "" }}>
                        <img src={subpatern} style={{ width: "30px", height: "100%" }} />
                    </div>

                    {/* top left column */}
                    <div style={{ position: "absolute", top: "30px", right: "7px", transform: "" }}>
                        <img src={patern} style={{ width: "30px", height: "100%" }} />
                    </div>
                    {/* bottom right column */}
                    <div style={{ position: "absolute", bottom: "28px", right: "7px", transform: "" }}>
                        <img src={subpatern} style={{ width: "30px", height: "100%" }} />
                    </div>

                    <div style={{ display: "flex", gap: "20px" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ width: "100%", height: "auto" }}>
                                <img src={parth} alt="Parth" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                            </div>
                            <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px", textTransform: "capitalize" }}>{formData.name ? formData.name : "Your name"}</h3>
                            <p style={{ fontSize: "14px", color: "#555" }}>{formData.occupation ? formData.occupation : "occupation"}</p>
                        </div>

                        <div style={{ fontSize: "14px " }}>
                            <div style={{
                                width: "fit-content",
                                borderBottom: "2px solid black",
                                height: "fit-content",
                                color: "black",
                                fontSize: "1rem", // Equivalent to text-md
                                fontWeight: "600", // Equivalent to font-semibold
                                padding: "0.5rem",
                                marginBottom: "5px",
                                fontWeight: "bold" // Equivalent to p-2
                            }}>
                                <h2>Personal Details</h2>
                            </div>

                            <p style={{ color: "gray" }}><span style={{ color: "black" }}>Date of Birth:</span>{formData.dateofbirth ? formData.dateofbirth : "Date of birth"}</p>
                            <p style={{ color: "gray" }}><span style={{ color: "black" }}>Place of Birth:</span>{formData.place ? formData.place : "birth place"}</p>
                            <p style={{ color: "gray" }}><span style={{ color: "black" }}>Rashi:</span> {formData.rashi ? formData.rashi : "rashi"}</p>
                            <p style={{ color: "gray" }}><span style={{ color: "black" }}>Height:</span>{formData.height ? formData.height : "height"}</p>
                            <p style={{ color: "gray" }}><span style={{ color: "black" }}>Caste:</span>{formData.cast ? formData.cast : "cast"}</p>
                            <p style={{ color: "gray" }}><span style={{ color: "black" }}>Education:</span>{formData.education ? formData.education : "education"}</p>
                            <p style={{ color: "gray" }}><span style={{ color: "black" }}>Profession:</span>{formData.occupation ? formData.occupation : "occupation"}</p>
                        </div>
                    </div>

                    <div style={{ fontSize: "14px", marginTop: "10px" }}>
                        <div style={{
                            width: "fit-content",
                            borderBottom: "2px solid black",
                            height: "fit-content",
                            color: "black",
                            fontSize: "1rem", // Equivalent to text-md
                            fontWeight: "600", // Equivalent to font-semibold
                            padding: "0.5rem",
                            marginBottom: "5px",
                            fontWeight: "bold" // Equivalent to p-2
                        }}>
                            <h2>Family Details</h2>
                        </div>

                        <p style={{ color: "gray" }}><span style={{ color: "black" }}>Father's Name:</span>{formData.father ? formData.father : "xyz name"}</p>
                        <p style={{ color: "gray" }}><span style={{ color: "black" }}>Mother's Name:</span> {formData.mother ? formData.mother : "xyz name"}</p>
                        <p style={{ color: "gray" }}><span style={{ color: "black" }}>Siblings:</span>{formData.siblings ? formData.siblings : "pqr name"}</p>
                        <p style={{ color: "gray" }}><span style={{ color: "black" }}>Family Status:</span> {formData.status ? formData.status : "status"}</p>
                        <p style={{ color: "gray" }}><span style={{ color: "black" }}>Native Place:</span>{formData.native ? formData.native : "native"}</p>
                        <p style={{ color: "gray" }}><span style={{ color: "black" }}>Property:</span>{formData.property ? formData.property : "property"}</p>
                    </div>

                    {/* <h2 style={{ fontSize: "16px", fontWeight: "bold", marginTop: "20px" }}>
                        Partner Preferences
                    </h2>
                    <div style={{ fontSize: "14px", marginTop: "10px" }}>
                        <p style={{color:"gray"}}><span style={{color:"blac"k}}>Preferred Age:</span> 20 - 26 years</p>
                        <p style={{color:"gray"}}><span style={{color:"blac"k}}>Education:</span> Graduate / Post-Graduate</p>
                        <p style={{color:"gray"}}><span style={{color:"blac"k}}>Height:</span> 5'2" - 5'8"</p>
                        <p style={{color:"gray"}}><span style={{color:"blac"k}}>Profession:</span> Working / Non-Working</p>
                        <p style={{color:"gray"}}><span style={{color:"blac"k}}>Family Background:</span> Respectable & Cultured</p>
                    </div> */}

                    <div style={{ fontSize: "14px", marginTop: "10px" }}>
                        <div style={{
                            width: "fit-content",
                            borderBottom: "2px solid black",
                            height: "fit-content",
                            color: "black",
                            fontSize: "1rem", // Equivalent to text-md
                            fontWeight: "600", // Equivalent to font-semibold
                            padding: "0.5rem",
                            marginBottom: "5px",
                            fontWeight: "bold" // Equivalent to p-2
                        }}>
                            <h2>Contact Details</h2>
                        </div>

                        <p style={{ color: "gray" }}><span style={{ color: "black" }}>Phone:</span>{formData.contact ? formData.contact : "0000000000"}</p>
                        <p style={{ color: "gray" }}><span style={{ color: "black" }}>Email:</span> {formData.email ? formData.email : "abc@gmail.com"}</p>
                        <p style={{ color: "gray" }}><span style={{ color: "black" }}>Address:</span>{formData.address ? formData.address : "address"}</p>
                    </div>
                </div>
            </div>


            <div className="flex gap-5 mt-5 mb-20">
                <button onClick={exportAsPDF} style={{ padding: "10px 20px", border: "none", backgroundColor: "black", color: "white", fontWeight: "bold", cursor: "pointer" }}>
                    Download as PDF
                </button>
                <button onClick={() => exportAsImage("png")} style={{ padding: "10px 20px", border: "none", backgroundColor: "black", color: "white", fontWeight: "bold", cursor: "pointer" }}>
                    Download as PNG
                </button>
                <button onClick={() => exportAsImage("jpg")} style={{ padding: "10px 20px", border: "none", backgroundColor: "black", color: "white", fontWeight: "bold", cursor: "pointer" }}>
                    Download as JPG
                </button>
            </div>
        </div >
    );
};
