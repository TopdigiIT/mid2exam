// src/components/Banner.jsx

import React from 'react';
import products from './products'; // Import products to use the image from the first product

const Banner = () => {
  return (
    <section style={styles.bannerSection}>
      <h2 style={styles.sectionTitle}>Our Featured Cosmetic Products</h2>
      <p style={styles.placeholderText}>Stay tuned! Exciting new products are coming soon.</p>
      <img src={products[0].image} alt="Featured Cosmetic Product" style={styles.image} />
    </section>
  );
};

const styles = {
  bannerSection: {
    textAlign: 'center',
    marginBottom: '40px', // Adds space between banner and product section
  },
  sectionTitle: {
    fontSize: '50px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  placeholderText: {
    fontSize: '30px',
    color: '#555',
    marginBottom: '20px',
  },
  image: {
    width: '100%',                // Makes the image responsive within the section
    maxWidth: '400px',            // Limits the image size for larger screens
    height: 'auto',
    borderRadius: '8px',
  },
};

export default Banner;
