import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import parth from "../assets/pk_01.jpg";
import flower from '../assets/icons8-flowers-100 (1).png'

export const Template1 = () => {
    const resumeRef = useRef(null);



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
        <div className=" flex flex-col justify-center items-center mt-20">
            <div ref={resumeRef} style={{ width: "28rem", minHeight: "38rem", padding: "50px", backgroundColor: "", position: "relative" }}>
                <div style={{ position: "absolute", top: "8px", left: "8px", transform: "rotate(90deg)" }}>
                    <img src={flower} style={{ width: "40px", height: "40px" }} />
                </div>
                <div style={{ position: "absolute", top: "8px", right: "8px", transform: "rotate(180deg)" }}>
                    <img src={flower} style={{ width: "40px", height: "40px" }} />
                </div>
                <div style={{ position: "absolute", bottom: "8px", left: "8px", transform: "rotate(0deg)" }}>
                    <img src={flower} style={{ width: "40px", height: "40px" }} />
                </div>
                <div style={{ position: "absolute", bottom: "8px", right: "8px", transform: "rotate(250deg)" }}>
                    <img src={flower} style={{ width: "40px", height: "40px" }} />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ width: "100%", height: "auto" }}>
                            <img src={parth} alt="Parth" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </div>
                        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}>Parth Patel</h3>
                        <p style={{ fontSize: "14px", color: "#555" }}>Software Developer</p>
                    </div>

                    <div style={{ fontSize: "14px" }}>
                        <p><strong>Gender:</strong> Male</p>
                        <p><strong>Date of Birth:</strong> 16th July 2002</p>
                        <p><strong>Place of Birth:</strong> Rajkot</p>
                        <p><strong>Rashi:</strong> Kanya</p>
                        <p><strong>Height:</strong> 175 cm</p>
                        <p><strong>Caste:</strong> Patel</p>
                        <p><strong>Education:</strong> MCA (Master of Computer Applications)</p>
                        <p><strong>College:</strong> Atmiya University</p>
                        <p><strong>School:</strong> Murlidhar Vidhyalay</p>
                        <p><strong>Profession:</strong> Software Developer</p>
                    </div>
                </div>

                <h2 style={{ fontSize: "16px", fontWeight: "bold", marginTop: "20px" }}>
                    Family Details
                </h2>
                <div style={{ fontSize: "14px", marginTop: "10px" }}>
                    <p><strong>Father's Name:</strong> Mr. XYZ Patel (Businessman)</p>
                    <p><strong>Mother's Name:</strong> Mrs. ABC Patel (Homemaker)</p>
                    <p><strong>Siblings:</strong> 1 Sister (Married)</p>
                    <p><strong>Family Status:</strong> Upper Middle Class</p>
                    <p><strong>Native Place:</strong> Gujarat, India</p>
                </div>

                <h2 style={{ fontSize: "16px", fontWeight: "bold", marginTop: "20px" }}>
                    Partner Preferences
                </h2>
                <div style={{ fontSize: "14px", marginTop: "10px" }}>
                    <p><strong>Preferred Age:</strong> 20 - 26 years</p>
                    <p><strong>Education:</strong> Graduate / Post-Graduate</p>
                    <p><strong>Height:</strong> 5'2" - 5'8"</p>
                    <p><strong>Profession:</strong> Working / Non-Working</p>
                    <p><strong>Family Background:</strong> Respectable & Cultured</p>
                </div>

                <h2 style={{ fontSize: "16px", fontWeight: "bold", marginTop: "20px" }}>
                    Contact Information
                </h2>
                <div style={{ fontSize: "14px", marginTop: "10px" }}>
                    <p><strong>Phone:</strong> +91 98765 43210</p>
                    <p><strong>Email:</strong> parth.patel@example.com</p>
                    <p><strong>Address:</strong> Rajkot, Gujarat, India</p>
                </div>
            </div>

            <div className="flex gap-5">
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
