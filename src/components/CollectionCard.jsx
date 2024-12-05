// src/components/CollectionCard.jsx

import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const CollectionCard = ({ collection }) => {
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
    <div style={styles.card}>
      <h3 style={styles.collectionTitle}>{collection.name}</h3>
      <p style={styles.description}>{collection.description}</p>
      <div style={styles.productsGrid}>
        {collection.products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h4>{product.name}</h4>
            {renderRating(product.rating)}
            <p style={styles.price}>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  collectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
  },
  productsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  productCard: {
    textAlign: 'center',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  productImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '5px',
  },
  price: {
    fontSize: '16px',
    color: '#333',
  },
};

export default CollectionCard;
