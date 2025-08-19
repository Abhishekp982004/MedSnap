import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFileAlt,
  FaReceipt,
  FaUser,
  FaUserMd,
  FaCalendarAlt,
  FaPrescriptionBottle,
  FaChartLine,
  FaAddressBook,
  FaHeartbeat
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundImage: `
        linear-gradient(135deg, #6a11cb 0%, #2575fc 100%), 
        url('https://via.placeholder.com/1500x1000?text=Abstract+Pattern')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      fontFamily: "'Roboto', sans-serif",
      textAlign: "center",
      color: "#fff",
      padding: "20px",
    },
    overlay: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      padding: "40px",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      width: "90%",
      maxWidth: "600px",
      transform: "translateZ(0)",
    },
    header: {
      fontSize: "2.8rem",
      fontWeight: "bold",
      color: "#6a11cb",
      textShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)",
      marginBottom: "20px",
    },
    subHeader: {
      fontSize: "1.2rem",
      marginBottom: "30px",
      color: "#555",
    },
    buttonContainer: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
    },
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "15px 20px",
      fontSize: "1rem",
      fontWeight: "500",
      color: "#FFF",
      backgroundImage: "linear-gradient(135deg, #6a11cb, #2575fc)",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3), inset 0 -4px 6px rgba(255, 255, 255, 0.2)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      gap: "10px",
    },
    buttonIcon: { fontSize: "1.5rem" },
    buttonHover: {
      transform: "translateY(-3px) scale(1.05)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)",
    },
  };

  const handleMouseOver = (e) => {
    e.target.style.transform = styles.buttonHover.transform;
    e.target.style.boxShadow = styles.buttonHover.boxShadow;
  };

  const handleMouseOut = (e) => {
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = styles.button.boxShadow;
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.header}>Welcome to MedSnap</h1>
        <p style={styles.subHeader}>Your gateway to seamless medical services.</p>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => navigate("/report")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <FaFileAlt style={styles.buttonIcon} /> Report
          </button>
          <button style={styles.button} onClick={() => navigate("/receipt")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <FaReceipt style={styles.buttonIcon} /> Receipt
          </button>
          <button style={styles.button} onClick={() => navigate("/profile")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <FaUser style={styles.buttonIcon} /> Profile
          </button>
          <button style={styles.button} onClick={() => navigate("/doctorprofile")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <FaUserMd style={styles.buttonIcon} /> Doctors
          </button>
          <button style={styles.button} onClick={() => navigate("/appointmentpage")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <FaCalendarAlt style={styles.buttonIcon} /> Appointments
          </button>
          <button style={styles.button} onClick={() => navigate("/pres")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <FaPrescriptionBottle style={styles.buttonIcon} /> Prescriptions
          </button>
          <button style={styles.button} onClick={() => navigate("/dashboard")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <FaChartLine style={styles.buttonIcon} /> Dashboard
          </button>
          <button style={styles.button} onClick={() => navigate("/contact")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <FaAddressBook style={styles.buttonIcon} /> Contact
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Home;