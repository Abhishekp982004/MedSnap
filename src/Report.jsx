import React, { useState, useEffect } from "react";

function Report() {
    const [files, setFiles] = useState([]);
    const [search, setSearch] = useState("");

    // Load files from localStorage when the component mounts
    useEffect(() => {
        const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
        setFiles(storedFiles);
    }, []);

    // Save files to localStorage whenever the files state changes
    useEffect(() => {
        localStorage.setItem("uploadedFiles", JSON.stringify(files));
    }, [files]);

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            const newFile = {
                name: uploadedFile.name,
                url: URL.createObjectURL(uploadedFile),
            };
            setFiles((prevFiles) => [...prevFiles, newFile]);
        }
    };

    const filteredFiles = files.filter((file) =>
        file.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div
            style={{
                height: "100vh",
                margin: 0,
                padding: 0,
                backgroundImage: "linear-gradient(to bottom right, #1e3a8a, #2563eb)", // Gradient background
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: "'Poppins', sans-serif",
                color: "#fff",
            }}
        >
            {/* Heading */}
            <h1
                style={{
                    marginTop: "30px",
                    textAlign: "center",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    textShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)", // Glowing effect
                }}
            >
                Report
            </h1>

            {/* Upload and Search Section */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: "20px",
                    width: "80%",
                }}
            >
                <button
                    style={{
                        padding: "12px 24px",
                        backgroundColor: "#3b82f6", // Vibrant blue button
                        color: "#fff",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 8px 15px rgba(59, 130, 246, 0.3)", // Hover glow
                        cursor: "pointer",
                        fontSize: "1.1rem",
                        transition: "all 0.3s ease",
                    }}
                    onClick={() => document.getElementById("file-input").click()}
                    onMouseOver={(e) => {
                        e.target.style.transform = "scale(1.05)";
                        e.target.style.boxShadow = "0 15px 25px rgba(59, 130, 246, 0.5)";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = "scale(1)";
                        e.target.style.boxShadow = "0 8px 15px rgba(59, 130, 246, 0.3)";
                    }}
                >
                    Upload File
                </button>
                <input
                    type="file"
                    id="file-input"
                    onChange={handleFileUpload}
                    style={{ display: "none" }}
                />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search files..."
                    style={{
                        padding: "12px",
                        width: "300px",
                        border: "2px solid #3b82f6",
                        borderRadius: "12px",
                        fontSize: "1rem",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                />
            </div>

            {/* Table Section */}
            {filteredFiles.length > 0 && (
                <table
                    style={{
                        width: "80%",
                        marginTop: "30px",
                        borderCollapse: "collapse",
                        backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent table
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)", // Elevated look
                        borderRadius: "15px",
                        overflow: "hidden",
                    }}
                >
                    <thead>
                        <tr>
                            {["File Name", "View", "Download"].map((heading, index) => (
                                <th
                                    key={index}
                                    style={{
                                        padding: "15px",
                                        backgroundColor: "#3b82f6", // Blue header
                                        color: "#fff",
                                        textAlign: "center",
                                        fontSize: "1.2rem",
                                        textShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)", // Header depth
                                    }}
                                >
                                    {heading}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredFiles.map((file, index) => (
                            <tr
                                key={index}
                                style={{
                                    backgroundColor: index % 2 === 0 ? "rgba(59, 130, 246, 0.1)" : "transparent",
                                    transition: "background-color 0.3s",
                                }}
                            >
                                <td
                                    style={{
                                        padding: "15px",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                        textAlign: "center",
                                        color: "#fff",
                                        fontSize: "1rem",
                                    }}
                                >
                                    {file.name}
                                </td>
                                <td
                                    style={{
                                        padding: "15px",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                        textAlign: "center",
                                    }}
                                >
                                    <button
                                        style={{
                                            padding: "8px 12px",
                                            backgroundColor: "#1e3a8a", // Button color
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "8px",
                                            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
                                            cursor: "pointer",
                                            transition: "transform 0.3s, box-shadow 0.3s",
                                        }}
                                        onClick={() => window.open(file.url, "_blank")}
                                        onMouseOver={(e) => {
                                            e.target.style.transform = "scale(1.1)";
                                            e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.4)";
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.transform = "scale(1)";
                                            e.target.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.3)";
                                        }}
                                    >
                                        View
                                    </button>
                                </td>
                                <td
                                    style={{
                                        padding: "15px",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                        textAlign: "center",
                                    }}
                                >
                                    <a href={file.url} download={file.name}>
                                        <button
                                            style={{
                                                padding: "8px 12px",
                                                backgroundColor: "#1e3a8a", // Button color
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: "8px",
                                                boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
                                                cursor: "pointer",
                                                transition: "transform 0.3s, box-shadow 0.3s",
                                            }}
                                            onMouseOver={(e) => {
                                                e.target.style.transform = "scale(1.1)";
                                                e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.4)";
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.transform = "scale(1)";
                                                e.target.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.3)";
                                            }}
                                        >
                                            Download
                                        </button>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Home Button */}
            <button
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    padding: "12px 24px",
                    backgroundColor: "#1e3a8a", // Button color
                    color: "#fff",
                    border: "none",
                    borderRadius: "50px",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                    cursor: "pointer",
                    transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onClick={() => (window.location.href = "/home")}
                onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.1)";
                    e.target.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.5)";
                }}
                onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
                }}
            >
                Home
            </button>
        </div>
    );
}

export default Report;