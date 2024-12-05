import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <>
      <Header cart={[]} cartCount={0} /> {/* Empty cart for About page */}
      <main className="about-container">
        <section className="about-hero">
          <h1>Welcome to Our World</h1>
          <p>Your journey into premium quality and innovation starts here.</p>
        </section>
        <section className="about-content">
          <h2>About Us</h2>
          <p>
            Our journey began with a mission to provide top-notch products and exceptional service.
            We take pride in delivering value, fostering innovation, and building lasting relationships
            with our customers.
          </p>
          <p>
            Whether you’re here to explore, shop, or connect, we are delighted to have you as part of our community. 
            Thank you for choosing us and trusting us with your needs.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
