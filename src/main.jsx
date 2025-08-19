import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Profile from "./Profile";
import Report from "./Report";
import Receipt from "./Receipt";
import Pres from "./Pres";
import DoctorProfile from "./DoctorProfile";
import AppointmentPage from "./AppointmentPage";
import Dashboard from "./Dashboard";
import { ProfileProvider } from "./ProfileContext";
import { AppointmentProvider } from "./AppointmentContext";
import Contact from "./Contact.jsx";
import Chart from "./Chart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppointmentProvider>
      <ProfileProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/Receipt" element={<Receipt />} />
            <Route path="/AppointmentPage" element={<AppointmentPage />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Pres" element={<Pres />} />
            <Route path="/DoctorProfile" element={<DoctorProfile />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Chart" element={<Chart />} />
          </Routes>
        </Router>
      </ProfileProvider>
    </AppointmentProvider>
  </React.StrictMode>
);