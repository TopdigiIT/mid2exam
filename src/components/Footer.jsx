// src/components/Footer.jsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Left Section: Address */}
      <div style={styles.leftSection}>
        <p style={styles.address}>
          Dhaka-1349, Dhaka, Bangladesh<br />
          E-mail: miltonmind1@gmail.com; topdigiit@gmail.com; +8801713713620
        </p>
      </div>

      {/* Center Section: Rights Reserved */}
      <div style={styles.centerSection}>
        <p style={styles.rightsText}>© 2023 My Company Inc. All rights reserved.</p>
      </div>

      {/* Right Section: Social Media Icons */}
      <div style={styles.rightSection}>
        <a href="https://facebook.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    width: '100%',
    background: 'linear-gradient(90deg, #8f94fb, #4e54c8)', // Gradient background
    color: '#fff',
    padding: '10px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    boxSizing: 'border-box',
  },
  leftSection: {
    flex: 1, // Takes up equal space on the left side
  },
  address: {
    margin: 0,
    fontSize: '14px',
    lineHeight: '1.5',
  },
  centerSection: {
    flex: 1, // Takes up equal space in the center
    textAlign: 'center',
  },
  rightsText: {
    margin: 0,
    fontSize: '14px',
  },
  rightSection: {
    flex: 1, // Takes up equal space on the right side
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '15px',
  },
  icon: {
    color: '#fff',
    fontSize: '20px',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
};

export default Footer;
