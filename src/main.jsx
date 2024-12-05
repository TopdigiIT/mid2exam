// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Blog from './components/Blog';
import './index.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </Router>



);
