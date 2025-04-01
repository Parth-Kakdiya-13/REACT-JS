import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import { DataForm } from "./DataForm";
import Test from "./Test";
import Test2 from "./Test2";
import { Button } from "./Button";

export const Template = ({ tId }) => {
    const resumeRef = useRef(null);

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

    const [bar, setBar] = useState(false)

    function sideBarHandler() {
        setBar(!bar);
    }



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
            email: data.email,
            blood: data.blood,
            maternal: data.maternal
        })
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
        const pdfWidth = 600;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // Maintain aspect ratio

        const pdf = new jsPDF({
            orientation: "p",
            unit: "px",
            format: [pdfWidth, pdfHeight], // Dynamically set height
            compress: true,
        });

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(formData.name);
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
        link.download = `${formData.name}.${format}`;
        link.click();
    };

    const templatesArray = [
        {
            id: "t1",
            template: <Test2 ref={resumeRef} data={formData} />
        },
        {
            id: "t2",
            template: <Test ref={resumeRef} data={formData} />
        },

    ]

    return (
        <div className="w-full flex flex-col justify-center items-center mt-20">
            <div className="flex justify-center gap-10 max-[900px]:gap-0 w-full ">
                <div>
                    {!bar && <span className="min-[900px]:hidden fixed top-24 left-0 bg-black text-white rounded-r-lg p-2 z-50 transition-all duration-300 ease-in-out" onClick={sideBarHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414" /></svg>
                    </span>}
                </div>
                <div className={`w-1/3 max-[900px]:w-96 max-sm:w-fit max-[900px]:fixed transition-all duration-300 ease-in-out max-[900px]:-left-full ${bar ? "max-[900px]:left-0" : " "}  top-24 max-[900px]:bg-white max-[900px]:p-8 max-[900px]:shadow-2xl max-[900px]:z-50`}>
                    {bar && <span className="min-[900px]:hidden absolute top-2 right-2 z-50" onClick={sideBarHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4" /></svg>
                    </span>}
                    <DataForm onChangeFormData={fetchFormData} />
                </div>

                {templatesArray.map((template) => {
                    if (template.id === tId) {
                        return template.template
                    }
                })}
            </div>


            <div className="flex gap-5 mt-5 mb-20 max-sm:flex-col">
                <Button classes="bg-red-500/50 hover:bg-red-500" onClick={exportAsPDF} >
                    Download as PDF
                </Button>
                <Button classes="bg-green-500/50 hover:bg-green-500" onClick={() => exportAsImage("png")} >
                    Download as PNG
                </Button>
                <Button classes="bg-blue-500/50 hover:bg-blue-500" onClick={() => exportAsImage("jpg")} >
                    Download as JPG
                </Button>
            </div>
        </div >
    );
};
