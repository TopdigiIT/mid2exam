// src/components/Newsletter.jsx

import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle the subscription logic (e.g., send email to the backend)
    setMessage('Thank you for subscribing!');
    setEmail(''); // Clear the input field after submission
  };

  return (
    <section className="newsletter-section" style={{ marginBottom: '2rem' }}>
      <h3>Subscribe to Our Newsletter</h3>
      <p>Get the latest updates on new products and promotions.</p>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="newsletter-input"
        />
        <button type="submit" className="newsletter-button">Subscribe</button>
      </form>
      {message && <p className="newsletter-message">{message}</p>}
      
    </section>
  );
};

export default Newsletter;
