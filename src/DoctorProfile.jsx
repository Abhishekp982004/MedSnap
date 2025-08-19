import React from 'react';

const doctors = [
  {
    name: 'DR. BAILEY DUPONT',
    description:
      'I am a doctor in the handling of the COVID-19 vaccination. I have a lot of experience in the field of pandemics, from handling viruses to vaccines.',
    stats: [
      { year: 2021, percentage: 67, color: '#FF6B6B' },
      { year: 2022, percentage: 75, color: '#1C92FF' }
    ],
    image: 'bailey.jpg'
  },
  {
    name: 'DR. Pushparaja Reddy',
    description:
      'Specialist in internal medicine with expertise in diabetes management and patient education. Over 10 years of experience.',
    stats: [
      { year: 2021, percentage: 80, color: '#FF6B6B' },
      { year: 2022, percentage: 85, color: '#1C92FF' }
    ],
    image: 'pusharaja.jpg'
  }
  // Add more doctor objects as needed
];

const DoctorsProfile = () => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* Home Button */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <button
          style={{
            backgroundColor: '#1C92FF',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onClick={() => (window.location.href = '/home')}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#FF6B6B')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#1C92FF')}
        >
          Home
        </button>
      </div>

      {/* Doctors Profiles */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center'
        }}
      >
        {doctors.map((doctor, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              padding: '20px',
              width: '350px',
              margin: '10px'
            }}
          >
            <div style={{ flex: 1, padding: '20px' }}>
              <h2
                style={{
                  color: '#FF6B6B',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}
              >
                Doctor Profile
              </h2>
              <h1
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginTop: '10px'
                }}
              >
                {doctor.name}
              </h1>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  margin: '20px 0'
                }}
              >
                {doctor.stats.map((stat, statIndex) => (
                  <div key={statIndex} style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        border: `4px solid ${stat.color}`,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '14px'
                      }}
                    >
                      {stat.percentage}%
                    </div>
                    <p style={{ margin: '10px 0 0', fontSize: '12px' }}>
                      {stat.year}
                    </p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '14px', margin: '10px 0' }}>
                {doctor.description}
              </p>
            </div>
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                style={{
                  borderRadius: '10px',
                  width: '100%',
                  maxWidth: '250px',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsProfile;
