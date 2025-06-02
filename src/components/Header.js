
import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-brand">
        <svg className="header-logo-icon" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 2H4v8h12V6z" clipRule="evenodd"></path>
        </svg>
        <a href="/" className="header-title">Finpay</a> 
      </div>

      <nav className="header-nav-desktop">
        <a href="/features" className="header-nav-link">Features</a>
        <a href="/pricing" className="header-nav-link">Pricing</a>
        <a href="/blog" className="header-nav-link">Blog</a>
        <a href="/contact" className="header-nav-link">Contact</a>
      </nav>

      <div className="header-actions-desktop">
        <button className="header-signin-btn">Sign In</button>
        <button className="header-getstarted-btn">Get Started</button>
      </div>

      <div className="header-mobile-toggle">
        <button className="header-mobile-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <svg className="header-mobile-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          ) : (
            <svg className="header-mobile-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm9 5a1 1 0 01-1 1H4a1 1 0 110-2h7a1 1 0 011 1z" clipRule="evenodd"></path>
            </svg>
          )}
        </button>
      </div>

     
      <div className={`header-mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <nav className="header-mobile-nav">
          <a href="/features" className="header-mobile-link">Features</a>
          <a href="/pricing" className="header-mobile-link">Pricing</a>
          <a href="/blog" className="header-mobile-link">Blog</a>
          <a href="/contact" className="header-mobile-link">Contact</a>
          <button className="header-mobile-signin-btn">Sign In</button>
          <button className="header-mobile-getstarted-btn">Get Started</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;