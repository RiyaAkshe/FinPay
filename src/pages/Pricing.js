import React from 'react';
import './Pricing.css'; 

const Pricing = () => {
    return (
        <main className="pricing-main-container">
            <section className="pricing-hero-section">
                <h1 className="pricing-hero-title">
                    Transparent <span className="pricing-hero-highlight">Pricing</span>. No Hidden Fees.
                </h1>
                <p className="pricing-hero-description">
                    Choose a plan that fits your financial needs. Finpay is committed to clear and upfront pricing.
                </p>
            </section>

            <section className="pricing-cards-section">
                <div className="pricing-cards-grid">
                    
                    <div className="pricing-card basic">
                        <h3 className="pricing-card-title">Basic</h3>
                        <p className="pricing-card-subtitle">Perfect for occasional early access</p>
                        <div className="pricing-card-price">
                            $0<span className="pricing-card-duration">/month</span>
                        </div>
                        <ul className="pricing-card-features">
                            <li className="feature-item-included">
                                <svg className="feature-icon-check" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                                </svg>
                                Limited early access
                            </li>
                            <li className="feature-item-included">
                                <svg className="feature-icon-check" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                                </svg>
                                Basic budgeting tools
                            </li>
                            <li className="feature-item-excluded">
                                <svg className="feature-icon-cross" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                </svg>
                                No financial insights
                            </li>
                            <li className="feature-item-excluded">
                                <svg className="feature-icon-cross" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                </svg>
                                Standard customer support
                            </li>
                        </ul>
                        <button className="pricing-card-button primary">
                            Choose Basic
                        </button>
                    </div>

                    
                    <div className="pricing-card pro">
                        <h3 className="pricing-card-title highlight">Pro</h3>
                        <p className="pricing-card-subtitle">Ideal for regular users seeking more control</p>
                        <div className="pricing-card-price">
                            $5<span className="pricing-card-duration">/month</span>
                        </div>
                        <ul className="pricing-card-features">
                            <li className="feature-item-included">
                                <svg className="feature-icon-check" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                                </svg>
                                Unlimited early access
                            </li>
                            <li className="feature-item-included">
                                <svg className="feature-icon-check" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                                </svg>
                                Advanced budgeting tools
                            </li>
                            <li className="feature-item-included">
                                <svg className="feature-icon-check" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                                </svg>
                                Basic financial insights
                            </li>
                            <li className="feature-item-included">
                                <svg className="feature-icon-check" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                                </svg>
                                Priority customer support
                            </li>
                        </ul>
                        <button className="pricing-card-button primary">
                            Choose Pro
                        </button>
                    </div>

                   
                    <div className="pricing-card premium">
                        <h3 className="pricing-card-title">Premium</h3>
                        <p className="pricing-card-subtitle">For complete financial mastery</p>
                        <div className="pricing-card-price">
                            $10<span className="pricing-card-duration">/month</span>
                        </div>
                        <ul className="pricing-card-features">
                            <li className="feature-item-included white">
                                <svg className="feature-icon-check white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                                </svg>
                                Unlimited early access
                            </li>
                            <li className="feature-item-included white">
                                <svg className="feature-icon-check white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                                </svg>
                                Comprehensive budgeting tools
                            </li>
                            <li className="feature-item-included white">
                                <svg className="feature-icon-check white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                                </svg>
                                Advanced financial insights
                            </li>
                            <li className="feature-item-included white">
                                <svg className="feature-icon-check white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                                </svg>
                                Dedicated personal advisor
                            </li>
                        </ul>
                        <button className="pricing-card-button premium-button">
                            Choose Premium
                        </button>
                    </div>
                </div>
            </section>

            <section className="pricing-cta-section">
                <h2 className="pricing-cta-title">Still Not Sure Which Plan is Right for You?</h2>
                <p className="pricing-cta-description">
                    Contact our sales team for a personalized recommendation or check out our FAQ.
                </p>
                <div className="pricing-cta-buttons">
                    <button className="pricing-cta-button primary">
                        Contact Us
                    </button>
                    <button className="pricing-cta-button secondary">
                        View FAQ
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Pricing;