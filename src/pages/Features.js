import React from 'react';
import './Features.css'; 

const Features = () => {
    return (
        <main className="features-main-container">
           
            <section className="features-hero-section">
                <h1 className="features-hero-title">
                    Powerful Features for Your <span className="features-hero-highlight">Financial Freedom</span>
                </h1>
                <p className="features-hero-description">
                    Finpay offers a suite of tools designed to give you control over your money, simplify your finances, and help you reach your goals.
                </p>
            </section>

           
            <section className="features-grid-section">
                <div className="features-grid">

                 
                    <div className="feature-item-card">
                        <div className="feature-item-icon-wrapper blue">
                            <img
                                className="feature-item-icon"
                                src="https://i0.wp.com/emeraldfin.com/wp-content/uploads/2024/08/how-early-wage-access-works.jpg?fit=1014%2C762&ssl=1"
                                alt="Early Wage Access"
                            />
                        </div>
                        <h3 className="feature-item-title">Early Wage Access</h3>
                        <p className="feature-item-description">
                            Access a portion of your earned wages before your official payday. Perfect for unexpected expenses or bridging the gap between paychecks.
                        </p>
                    </div>

                  
                    <div className="feature-item-card">
                        <div className="feature-item-icon-wrapper yellow">
                            <img
                                className="feature-item-icon"
                                src="https://www.aonflow.com/blog/wp-content/uploads/2024/03/seamlessly-integrate-multiple-software-systems-for-improved-efficiency.png"
                                alt="Seamless Integration"
                            />
                        </div>
                        <h3 className="feature-item-title">Seamless Integration</h3>
                        <p className="feature-item-description">
                            Integrate effortlessly with your existing systems and workflows.
                        </p>
                    </div>

                 
                    <div className="feature-item-card">
                        <div className="feature-item-icon-wrapper green">
                            <img
                                className="feature-item-icon"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvbpncywPWytV2HEXo7jRAkw11X96rSfYXbg&s"
                                alt="Budgeting Tools"
                            />
                        </div>
                        <h3 className="feature-item-title">Budgeting Tools</h3>
                        <p className="feature-item-description">
                            Track your spending, categorize expenses, and set financial goals with our intuitive budgeting features. Stay on top of your money.
                        </p>
                    </div>

                   
                    <div className="feature-item-card">
                        <div className="feature-item-icon-wrapper red">
                            <img
                                className="feature-item-icon"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZ0g3zOiN2wb9-meqTgC59v8kul03OZ5bwQ&s"
                                alt="Financial Insights"
                            />
                        </div>
                        <h3 className="feature-item-title">Financial Insights</h3>
                        <p className="feature-item-description">
                            Get personalized insights into your spending habits and financial health. Make informed decisions to improve your financial well-being.
                        </p>
                    </div>

                    
                    <div className="feature-item-card">
                        <div className="feature-item-icon-wrapper purple">
                            <img
                                className="feature-item-icon"
                                src="https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/front/thread/20250327/0335210210557549901/1825674076031549446/1825674076031549446.png"
                                alt="Secure & Private"
                            />
                        </div>
                        <h3 className="feature-item-title">Secure & Private</h3>
                        <p className="feature-item-description">
                            Your financial data is protected with bank-level encryption and security protocols. Your privacy is our top priority.
                        </p>
                    </div>

                    
                    <div className="feature-item-card">
                        <div className="feature-item-icon-wrapper blue">
                            <img
                                className="feature-item-icon"
                                src="https://www.instantpay.in/blog/wp-content/uploads/2024/06/main-feature-copy-1-e1718883107147.jpg"
                                alt="Automated Repayment"
                            />
                        </div>
                        <h3 className="feature-item-title">Automated Repayment</h3>
                        <p className="feature-item-description">
                            Enjoy hassle-free repayment. The advanced amount is automatically deducted from your next paycheck.
                        </p>
                    </div>

                </div>
            </section>

            
            <section className="features-cta-section">
                <h2 className="features-cta-title">Ready to Experience Finpay's Features?</h2>
                <p className="features-cta-description">
                    Sign up today and unlock the full potential of your earnings.
                </p>
                <button className="features-cta-button">
                    Get Started
                </button>
            </section>
        </main>
    );
};

export default Features;
