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