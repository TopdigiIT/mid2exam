import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css'; // Create this CSS file for custom styling if needed

const Contact = () => {
  return (
    <>
      <Header cart={[]} cartCount={0} /> {/* Empty cart for Contact page */}
      <main className="contact-container">
        <section className="contact-hero">
          <h1>Get in Touch</h1>
          <p>We’re here to help and answer any question you might have.</p>
        </section>
        <section className="contact-content">
          <h2>Contact Us</h2>
          <p>
            If you have any questions, comments, or feedback, we’d love to hear from you. Feel free
            to reach out using the information below:
          </p>
          <p>
            <strong>Email:</strong> miltonmind1@gmail.com; topdigiit@gmail.com<br />
            <strong>Phone:</strong> +8801713713620<br />
            <strong>Address:</strong> Dhaka-1349, Dhaka, Bangladesh.
          </p>
          <form className="contact-form">
            <label>
              <span>Your Name</span>
              <input type="text" placeholder="Enter your name" required />
            </label>
            <label>
              <span>Your Email</span>
              <input type="email" placeholder="Enter your email" required />
            </label>
            <label>
              <span>Your Message</span>
              <textarea placeholder="Type your message here..." required></textarea>
            </label>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
