import React from 'react';
import './Blog.css'; 

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Understanding Early Wage Access: A Comprehensive Guide',
            date: 'October 26, 2023',
            author: 'Finpay Team',
            summary: 'Early wage access is changing how people manage their finances. Learn how it works and its benefits.',
            imageUrl: 'https://www.bamboohr.com/blog/media_14a6fdca3c2687d46ed8fc91a33753da1e7bdc51f.png?width=1200&format=pjpg&optimize=medium'
        },
        {
            id: 2,
            title: '5 Smart Ways to Budget Your Money Effectively',
            date: 'October 20, 2023',
            author: 'Sarah Chen',
            summary: 'Master your finances with these five practical budgeting tips that can help you save more and spend smarter.',
            imageUrl: 'https://www.growfinancial.org/wp-content/uploads/2022/10/October_NewsletterHeaders_Budgeting_Blog.png'
        },
        {
            id: 3,
            title: 'The Future of Personal Finance: What to Expect',
            date: 'October 15, 2023',
            author: 'John Davis',
            summary: 'Dive into the trends shaping the future of personal finance, from AI-powered tools to decentralized finance.',
            imageUrl: 'https://assets.upstox.com/content/assets/images/cms/2024410/personal%20finance.jpg'
        },
        {
            id: 4,
            title: 'Avoiding Overdraft Fees: Your Finpay Solution',
            date: 'October 10, 2023',
            author: 'Finpay Team',
            summary: 'Overdraft fees can be a huge drain on your finances. Discover how Finpay can help you avoid them.',
            imageUrl: 'https://www.thebalancemoney.com/thmb/KcYPr5rdYrToD_8xprI7WqkUMCU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/insufficient-funds-315343-final-89b1ea8eda2f41c7b2fbfeae44426e65.png'
        },
        {
            id: 5,
            title: 'Building a Rainy Day Fund: A Step-by-Step Guide',
            date: 'September 28, 2023',
            author: 'Emily White',
            summary: 'Learn the essential steps to build a robust emergency fund that can protect you from unexpected financial challenges.',
            imageUrl: 'https://www.cpf.gov.sg/content/dam/web/member/infohub/images/5%20tips%20on%20building%20an%20emergency%20fund%20for%20rainy%20days_cover.jpg'
        },
        {
            id: 6,
            title: 'The Benefits of Financial Literacy for Young Adults',
            date: 'September 22, 2023',
            author: 'David Green',
            summary: 'Financial literacy is crucial for young adults. Explore why it matters and how to get started.',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5evrDIFyhN6ieLoX6d_2zhKfXqv_xmcWNg&s'
        }
    ];

    return (
        <main className="blog-main-container">
            <section className="blog-hero-section">
                <h1 className="blog-hero-title">
                    Finpay <span className="blog-hero-highlight">Blog</span>
                </h1>
                <p className="blog-hero-description">
                    Stay updated with the latest financial tips, industry insights, and Finpay news.
                </p>
            </section>

            <section className="blog-posts-section">
                <div className="blog-posts-grid">
                    {blogPosts.map(post => (
                        <div key={post.id} className="blog-post-card">
                            <img src={post.imageUrl} alt={post.title} className="blog-post-image" />
                            <div className="blog-post-content">
                                <h3 className="blog-post-title">{post.title}</h3>
                                <p className="blog-post-meta">By {post.author} on {post.date}</p>
                                <p className="blog-post-summary">{post.summary}</p>
                                <a href="#" className="blog-post-read-more">Read More →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="blog-newsletter-section">
                <h2 className="blog-newsletter-title">Never Miss an Update!</h2>
                <p className="blog-newsletter-description">
                    Subscribe to our newsletter for exclusive content and early access to new features.
                </p>
                <form className="blog-newsletter-form">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="blog-newsletter-input"
                    />
                    <button
                        type="submit"
                        className="blog-newsletter-button"
                    >
                        Subscribe
                    </button>
                </form>
            </section>
        </main>
    );
};

export default Blog;
