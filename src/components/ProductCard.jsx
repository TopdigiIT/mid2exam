// ProductCard.jsx

import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} color="gold" />
        ))}
        {halfStar && <FaStarHalfAlt color="gold" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} color="gold" />
        ))}
      </div>
    );
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
      <h3>{product.name}</h3>
      {renderRating(product.rating)}
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => onAddToCart(product)}>Buy Now</button>
    </div>
  );
};

export default ProductCard;
