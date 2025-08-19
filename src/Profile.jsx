import React, { useContext } from "react";
import { AppointmentContext } from "./AppointmentContext";

function Profile() {
  const { appointments } = useContext(AppointmentContext);

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h1 style={styles.sidebarTitle}></h1>
      </aside>
      <div style={styles.mainContent}>
        <header style={styles.header}>
          <h2 style={styles.pageTitle}>Profile</h2>
        </header>

        {/* My Appointments Section */}
        <div style={styles.appointments}>
          <h3>My Appointments</h3>
          {appointments.length > 0 ? (
            appointments.map((appointment, index) => (
              <div key={index} style={styles.appointmentDetails}>
                <p><strong>Name:</strong> {appointment.name}</p>
                <p><strong>Email:</strong> {appointment.email}</p>
                <p><strong>Phone:</strong> {appointment.phone}</p>
                <p><strong>Date:</strong> {appointment.date}</p>
                <p><strong>Time:</strong> {appointment.time}</p>
                <p><strong>Doctor:</strong> {appointment.doctor}</p>
                <hr />
              </div>
            ))
          ) : (
            <p>No appointments booked.</p>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { display: "flex", minHeight: "100vh" },
  sidebar: { width: "250px", backgroundColor: "#6A0DAD", color: "#fff" },
  sidebarTitle: { padding: "20px" },
  mainContent: { flex: 1, padding: "20px" },
  header: { marginBottom: "20px" },
  appointments: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  appointmentDetails: { lineHeight: "1.8" },
};

export default Profile;