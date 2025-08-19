import React from 'react';

const Contact = () => {
  const contacts = [
    {
      name: 'Adyanth S',
      email: 'adyanth.s@gmail.com',
      phone: '(+91)63600 60718',
    },
    {
      name: 'Adyaa G B',
      email: 'adyaagb75@gmail.com', 
      phone: '(+91)95911 69996',
    },
    {
      name: 'Abhishek P',
      email: '982004abhishek@gmail.com',
      phone: '(+91)94813 31825',
    },
  ];

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '40px auto',
    },
    title: {
      fontSize: '1.8rem',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#333',
    },
    contactCard: {
      padding: '15px',
      marginBottom: '15px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    contactName: {
      fontSize: '1.2rem',
      marginBottom: '5px',
      color: '#555',
    },
    contactInfo: {
      marginBottom: '5px',
      color: '#777',
    },
    message: {
      marginTop: '20px',
      padding: '10px',
      backgroundColor: '#eaf7ff',
      borderRadius: '8px',
      textAlign: 'center',
      color: '#007bff',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact Us</h2>
      {contacts.map((contact, index) => (
        <div key={index} style={styles.contactCard}>
          <div style={styles.contactName}>{contact.name}</div>
          <div style={styles.contactInfo}>📧 {contact.email}</div>
          <div style={styles.contactInfo}>📞 {contact.phone}</div>
        </div>
      ))}
      <div style={styles.message}>
        If you have any questions, feel free to reach out to any of the contacts above!
      </div>
    </div>
  );
};

export default Contact;