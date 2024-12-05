import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import products from '../components/products'; // Import the products data
import './Product.css'; // Styling for the product page

const Product = () => {
  return (
    <>
      <Header cart={[]} cartCount={0} />
      <main className="product-page" style={{ marginBottom: '4rem' }}>
        <h1 className="page-title">Our Products</h1>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <div className="product-meta">
                  <span className="product-rating">⭐ {product.rating}</span>
                  <span className="product-price">${product.price.toFixed(2)}</span>
                </div>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Product;
