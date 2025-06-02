import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                
                <div className="footer-brand-section">
                    <div className="footer-brand-logo">
                        <svg className="footer-logo-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 2H4v8h12V6zM9 9a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd"></path>
                        </svg>
                        <span className="footer-brand-name">Finpay</span>
                    </div>
                    <p className="footer-description">
                        Simplifying your finances, one payment at a time. Get paid early and manage your money smarter.
                    </p>
                </div>

                
                <div className="footer-links-section">
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul>
                        <li><Link to="/" className="footer-link">Home</Link></li>
                        <li><Link to="/features" className="footer-link">Features</Link></li>
                        <li><Link to="/pricing" className="footer-link">Pricing</Link></li>
                        <li><Link to="/blog" className="footer-link">Blog</Link></li>
                        <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                    </ul>
                </div>

                
                <div className="footer-links-section">
                    <h3 className="footer-heading">Legal</h3>
                    <ul>
                        <li><a href="#" className="footer-link">Privacy Policy</a></li>
                        <li><a href="#" className="footer-link">Terms of Service</a></li>
                    </ul>
                </div>

                
            </div>
            <div className="footer-copyright">
                © 2023 Finpay. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;