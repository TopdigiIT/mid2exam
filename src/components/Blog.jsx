import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Blog.css';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';

const blogs = [
  {
    id: 1,
    title: 'The Art of Skincare',
    image: image1,
    description: 'Discover the secrets to radiant and healthy skin with our skincare tips.',
  },
  {
    id: 2,
    title: 'Top Cosmetic Trends 2024',
    image: image2,
    description: 'Stay ahead of the game with the latest cosmetic trends for the upcoming year.',
  },
  {
    id: 3,
    title: 'Building a Beauty Routine',
    image: image3,
    description: 'Learn how to create a personalized beauty routine that suits your lifestyle.',
  },
  {
    id: 4,
    title: 'Natural Ingredients in Cosmetics',
    image: image4,
    description: 'Explore the benefits of using cosmetics made with natural ingredients.',
  },
  {
    id: 5,
    title: 'Makeup Tips for Beginners',
    image: image5,
    description: 'A comprehensive guide for beginners to start their makeup journey.',
  },
];

const Blog = () => {
  return (
    <>
      <Header cart={[]} cartCount={0} />
      <main className="blog-container">
        <section className="blog-hero">
          <h1>Our Blog</h1>
          <p>Explore the latest trends, tips, and insights from the world of beauty and skincare.</p>
        </section>
        <section className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-details">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-description">{blog.description}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
