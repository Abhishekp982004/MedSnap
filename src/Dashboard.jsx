import React from 'react';
import Chart from './Chart'; // Import the Chart component

const Dashboard = () => {
  const styles = {
    dashboard: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    profileSection: {
      display: 'flex',
      alignItems: 'center',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      marginRight: '10px',
    },
    notificationIcon: {
      fontSize: '1.5rem',
    },
    userInfo: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: '20px',
    },
    infoBlock: {
      textAlign: 'center',
    },
    infoBlockHeader: {
      fontSize: '1.5rem',
      color: '#333',
    },
    healthMetrics: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
    },
    metricCard: {
      flex: 1,
      padding: '10px',
      borderRadius: '8px',
      textAlign: 'center',
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    heartRate: {
      marginBottom: '20px',
    },
    oxygenLevel: {
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.dashboard}>
      <header style={styles.header}>
        <div>
          <h1>Hi!</h1>
          <h2>William Johnson</h2>
        </div>
        <div style={styles.profileSection}>
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            style={styles.profilePicture}
          />
          <div style={styles.notificationIcon}>🔔</div>
        </div>
      </header>

      <div style={styles.userInfo}>
        <div style={styles.infoBlock}>
          <h3 style={styles.infoBlockHeader}>34</h3>
          <p>Age</p>
        </div>
        <div style={styles.infoBlock}>
          <h3 style={styles.infoBlockHeader}>180</h3>
          <p>Height(in cm)</p>
        </div>
        <div style={styles.infoBlock}>
          <h3 style={styles.infoBlockHeader}>78</h3>
          <p>Weight(in kg)</p>
        </div>
        <div style={styles.infoBlock}>
          <h3 style={styles.infoBlockHeader}>A+</h3>
          <p>Blood Type</p>
        </div>
      </div>

      <div style={styles.healthMetrics}>
        <div style={styles.metricCard}>
          <h4>Temperature</h4>
          <p>36.6°C</p>
          <span>-1.6%</span>
        </div>
        <div style={styles.metricCard}>
          <h4>Blood Sugar</h4>
          <p>120 / 160 mg/dL</p>
          <span>+2.1%</span>
        </div>
        <div style={styles.metricCard}>
          <h4>Blood Pressure</h4>
          <p>80 / 120 mmHg</p>
          <span>+0.4%</span>
        </div>
      </div>

      <div style={styles.heartRate}>
        <h3>Heart Rate</h3>
        <Chart /> {''}
      </div>

      <div style={styles.oxygenLevel}>
        <h4>Oxygen Level</h4>
        <p>95% SpO2</p>
        <span>+1.2%</span>
      </div>
    </div>
  );
};

export default Dashboard;