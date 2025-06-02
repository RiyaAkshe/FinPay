import React from 'react';
import './Home.css'; 

const Home = () => {
    return (
        <main className="home-main-container">
           
            <section className="hero-section">
                <h1 className="hero-title">
                    Get Paid <span className="hero-title-highlight">Early</span>. Live Freely.
                </h1>
                <p className="hero-description">
                    Finpay helps you access your earnings sooner, manage your budget, and achieve your financial goals with ease.
                </p>
                <div className="hero-buttons">
                    <button className="hero-button primary">
                        Get Started
                    </button>
                    <button className="hero-button secondary">
                        Learn More
                    </button>
                </div>
            </section>

           
            <section className="features-section">
                <h2 className="features-title">How Finpay Works</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon-wrapper blue">
                            <img
                                className="feature-icon"
                                src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                                alt="Link Your Account Icon"
                            />
                        </div>
                        <h3 className="feature-card-title">Link Your Account</h3>
                        <p className="feature-card-description">Securely connect your bank account and payroll provider in minutes.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-wrapper green">
                            <img
                                className="feature-icon"
                                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                                alt="Request Early Pay Icon"
                            />
                        </div>
                        <h3 className="feature-card-title">Request Early Pay</h3>
                        <p className="feature-card-description">Access a portion of your earned wages before your payday, whenever you need it.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-wrapper purple">
                            <img
                                className="feature-icon"
                                src="https://cdn-icons-png.flaticon.com/512/864/864685.png"
                                alt="Repay Automatically Icon"
                            />
                        </div>
                        <h3 className="feature-card-title">Repay Automatically</h3>
                        <p className="feature-card-description">On payday, the advanced amount is automatically repaid from your paycheck.</p>
                    </div>
                </div>
            </section>

            
            <section className="benefits-section">
                <h2 className="benefits-title">Benefits of Finpay</h2>
                <div className="benefits-content">
                    <div className="benefits-image-container">
                        <img 
                            src="https://media.licdn.com/dms/image/v2/C5612AQGPIFg7Aj8mxQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520179389478?e=2147483647&v=beta&t=QWh02p_k1cS00ivwxHyrIHKHUBDUmbFvsVl37pGpcU0" 
                            alt="Financial Management" 
                            className="benefits-image" 
                        />
                    </div>
                    <div className="benefits-list-container">
                        <ul className="benefits-list">
                            <li className="benefit-item">
                                <div className="benefit-icon-wrapper">
                                    <svg className="benefit-icon" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.707 8.707a1 1 0 00-1.414-1.414L11 11.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="benefit-item-title">Avoid Overdraft Fees</h3>
                                    <p className="benefit-item-description">Access cash when you need it most, preventing costly overdrafts.</p>
                                </div>
                            </li>
                            <li className="benefit-item">
                                <div className="benefit-icon-wrapper">
                                    <svg className="benefit-icon" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.707 8.707a1 1 0 00-1.414-1.414L11 11.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="benefit-item-title">Improve Financial Health</h3>
                                    <p className="benefit-item-description">Gain better control over your cash flow and budget effectively.</p>
                                </div>
                            </li>
                            <li className="benefit-item">
                                <div className="benefit-icon-wrapper">
                                    <svg className="benefit-icon" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.707 8.707a1 1 0 00-1.414-1.414L11 11.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="benefit-item-title">No Hidden Fees or Interest</h3>
                                    <p className="benefit-item-description">Finpay offers a transparent model with no interest or hidden charges.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            
            <section className="testimonial-section">
                <h2 className="testimonial-title">What Our Users Say</h2>
                <p className="testimonial-text">
                    "Finpay has been a game-changer for my finances. Being able to access my earnings early has saved me from countless late fees and stress."
                </p>
                <p className="testimonial-author">- Jane Doe, Satisfied User</p>
            </section>

            
            <section className="cta-section">
                <h2 className="cta-title">Ready to Take Control of Your Finances?</h2>
                <p className="cta-description">
                    Join thousands of happy users who are already benefiting from Finpay. Sign up today and get paid early!
                </p>
                <button className="cta-button">
                    Get Started Now
                </button>
            </section>
        </main>
    );
};

export default Home;
