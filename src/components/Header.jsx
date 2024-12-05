// src/components/Header.jsx

import React, { useState, useEffect } from 'react';
import { FaGoogle, FaGithub, FaBars, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

const Header = ({ cart, cartCount }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthOptions, setShowAuthOptions] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [showCartSummary, setShowCartSummary] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleUserImageClick = () => {
    setShowAuthOptions((prev) => !prev);
  };

  const handleSignUp = (provider) => {
    setIsAuthenticated(true);
    setUserInfo({
      name: 'Momenul Islam',
      email: 'momenulpro@gmail.com',
    });
    setShowAuthOptions(false);
  };

  const handleLogOut = () => {
    setIsAuthenticated(false);
    setShowAuthOptions(false);
    setUserInfo({ name: '', email: '' });
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const handleCartClick = () => {
    setShowCartSummary((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="leftSection">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">MOMENUL ISLAM'S STORE</h1>
      </div>

      <div className="rightSection">
        {isMobile ? (
          <div className="menuIcon" onClick={() => setShowMenu(!showMenu)}>
            <FaBars />
          </div>
        ) : (
          <nav className="nav">
            <Link to="/" className="navLink">Home</Link>
            <Link to="/about" className="navLink">About</Link> {/* Ensure correct path */}
            <Link to="/contact" className="navLink">Contact</Link> {/* Ensure correct path */}
            <Link to="/product" className="navLink">Product</Link> {/* Ensure correct path */}
            <Link to="/blog" className="navLink">Blog</Link> {/* Ensure correct path */}
          </nav>
        )}

        <div className="cartContainer" onClick={handleCartClick}>
          <FaShoppingCart className="cartIcon" />
          {cartCount > 0 && <span className="cartCount">{cartCount}</span>}
        </div>

        {showCartSummary && (
          <div className="cartSummary">
            <h3>Cart Summary</h3>
            <p>Total Items: {cartCount}</p>
            <p>Total Price: ${totalPrice}</p>
            <ul className="cartItemsList">
              {cart.map((item, index) => (
                <li key={index} className="cartItem">
                  {item.name} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="userSection">
          <img
            src="AAA.png"
            alt="User"
            className="userImage"
            onClick={handleUserImageClick}
          />

          {showAuthOptions && (
            <div className="authMenu">
              {isAuthenticated ? (
                <div className="userInfo">
                  <div className="userName">{userInfo.name}</div>
                  <div className="userEmail">{userInfo.email}</div>
                  <button onClick={handleLogOut} className="logoutButton">Log Out</button>
                </div>
              ) : (
                <div>
                  <button onClick={() => handleSignUp("email")} className="authButton">Sign Up</button>
                  <div className="signUpWithContainer">
                    <span className="signUpText">Sign Up with</span>
                    <button onClick={() => handleSignUp("google")} className="iconButton">
                      <FaGoogle className="icon" />
                    </button>
                    <button onClick={() => handleSignUp("github")} className="iconButton">
                      <FaGithub className="icon" />
                    </button>
                  </div>
                  <hr className="separator" />
                  <button onClick={() => handleSignUp("signin")} className="authButton">Sign In</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {isMobile && showMenu && (
        <div className="overlayMenu" onClick={() => setShowMenu(false)}>
          <nav className="mobileNav" onClick={(e) => e.stopPropagation()}>
            <Link to="/" className="mobileNavLink">Home</Link>
            <Link to="/about" className="mobileNavLink">About</Link> {/* Ensure correct path */}
            <a href="/product" className="mobileNavLink">Product</a>
            <a href="/contact" className="mobileNavLink">Contact</a>
            <a href="/blogs" className="mobileNavLink">Blog</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
