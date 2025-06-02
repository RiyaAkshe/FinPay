import React from 'react';
import './Contact.css'; 

const Contact = () => {
    return (
        <main className="contact-main">
            <section className="contact-hero-section">
                <h1 className="contact-title">
                    Get in <span className="contact-title-highlight">Touch</span>
                </h1>
                <p className="contact-subtitle">
                    Have questions, feedback, or need support? We're here to help!
                </p>
            </section>

            <section className="contact-details-section">
                
                <div className="contact-form-container">
                    <h2 className="contact-form-title">Send Us a Message</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" id="name" name="name" className="form-input" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input type="email" id="email" name="email" className="form-input" placeholder="john.doe@example.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-input" placeholder="Inquiry about Finpay features" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea id="message" name="message" rows="5" className="form-textarea" placeholder="Type your message here..."></textarea>
                        </div>
                        <button type="submit" className="form-submit-button">
                            Send Message
                        </button>
                    </form>
                </div>

                
                <div className="contact-info-container">
                    <h2 className="contact-info-title">Our Contact Details</h2>
                    <div className="contact-info-list">
                        <div className="contact-info-item">
                            <div className="contact-icon-wrapper">
                                <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                            <div>
                                <p className="contact-info-label">Address:</p>
                                <p className="contact-info-text">123 Financial Lane, Suite 400, Fintech City, FC 12345</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-icon-wrapper">
                                <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="contact-info-label">Email:</p>
                                <p className="contact-info-text">support@finpay.com</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-icon-wrapper">
                                <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.31C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z" />
                                </svg>
                            </div>
                            <div>
                                <p className="contact-info-label">Phone:</p>
                                <p className="contact-info-text">+1 (800) 123-4567</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-map-section">
                <h2 className="contact-map-title">Find Us on the Map</h2>
                <div className="contact-map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.298275591322!2d144.9630573153163!3d-37.81720817975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642afc83c260f%3A0x5045675c2e118320!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678888888888!5m2!1sen!2sau"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map of Finpay Office"
                    ></iframe>
                </div>
            </section>
        </main>
    );
};

export default Contact;
