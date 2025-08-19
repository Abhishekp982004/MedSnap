import React, { useState, useEffect } from "react";

function Receipt() {
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
            const reader = new FileReader();
            reader.onload = () => {
                const newFile = {
                    name: uploadedFile.name,
                    base64: reader.result,
                };
                setFiles((prevFiles) => [...prevFiles, newFile]);
            };
            reader.readAsDataURL(uploadedFile);
        }
    };

    const handleDelete = (fileName) => {
        const updatedFiles = files.filter((file) => file.name !== fileName);
        setFiles(updatedFiles);
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
                backgroundImage: `linear-gradient(to bottom right, #1e3a8a, #2563eb)`,
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
                    textShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
                }}
            >
                Receipt
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
                        backgroundColor: "#2563eb",
                        color: "#fff",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 8px 15px rgba(37, 99, 235, 0.3)",
                        cursor: "pointer",
                        fontSize: "1.1rem",
                        transition: "all 0.3s ease",
                    }}
                    onClick={() => document.getElementById("file-input").click()}
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
                        border: "2px solid #2563eb",
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
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                        borderRadius: "15px",
                        overflow: "hidden",
                    }}
                >
                    <thead>
                        <tr>
                            {["File Name", "View", "Download", "Delete"].map((heading, index) => (
                                <th
                                    key={index}
                                    style={{
                                        padding: "15px",
                                        backgroundColor: "#2563eb",
                                        color: "#fff",
                                        textAlign: "center",
                                        fontSize: "1.2rem",
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
                                    backgroundColor: index % 2 === 0 ? "rgba(37, 99, 235, 0.1)" : "transparent",
                                    transition: "background-color 0.3s",
                                }}
                            >
                                <td
                                    style={{
                                        padding: "15px",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",
                                        textAlign: "center",
                                        color: "#fff",
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
                                            backgroundColor: "#1e3a8a",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => window.open(file.base64, "_blank")}
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
                                    <a href={file.base64} download={file.name}>
                                        <button
                                            style={{
                                                padding: "8px 12px",
                                                backgroundColor: "#1e3a8a",
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: "8px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Download
                                        </button>
                                    </a>
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
                                            backgroundColor: "#d32f2f",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => handleDelete(file.name)}
                                    >
                                        Delete
                                    </button>
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
                    backgroundColor: "#1e3a8a",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50px",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                    cursor: "pointer",
                }}
                onClick={() => (window.location.href = "/home")}
            >
                Home
            </button>
        </div>
    );
}

export default Receipt;