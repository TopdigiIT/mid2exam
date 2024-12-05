// src/App.jsx

import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import products from './components/products'; // Import product data
import Banner from './components/Banner'; // Import Banner component
import Newsletter from './components/Newsletter'; // Import Newsletter component
import './App.css'; // Import App.css file



const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleCartClick = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <div id="root">
      <Header cart={cart} cartCount={cart.length} onCartClick={handleCartClick} isCartVisible={isCartVisible} />
      <main className="main-content">
        <Banner />
        <section className="product-section">
          <h3 className="product-section-title">Explore Our Products</h3>
          <ProductList products={products} onAddToCart={handleAddToCart} />
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
