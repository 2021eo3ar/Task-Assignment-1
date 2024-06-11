import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Lending Buddha</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#how-it-works">How it works</a></li>
                        <li><a href="#about-us">About us</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#advisory">Advisory</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#calculate-emi">Calculate EMI</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Lendors</h4>
                    <ul>
                        <li><a href="#why-lend">Why Lend</a></li>
                        <li><a href="#lenders-eligibility">Lenders Eligibility</a></li>
                        <li><a href="#how-to-lend">How to Lend</a></li>
                        <li><a href="#returns-fees">Returns & Fees</a></li>
                        <li><a href="#code-of-conduct">Lenders code of conduct</a></li>
                        <li><a href="#faq">Lenders FAQ</a></li>
                        <li><a href="#tutorials">Tutorial for Lenders</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Borrowers</h4>
                    <ul>
                        <li><a href="#why-borrow">Why Borrow</a></li>
                        <li><a href="#borrowers-eligibility">Borrowers Eligibility</a></li>
                        <li><a href="#effective-listing">How to create effective listing</a></li>
                        <li><a href="#loan-purpose">Purpose of Loan</a></li>
                        <li><a href="#repayment-rates">Repayment, Interest Rates</a></li>
                        <li><a href="#faq">Borrower FAQ</a></li>
                        <li><a href="#tutorials">Tutorial for Borrowers</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#terms-of-use">Terms of use</a></li>
                        <li><a href="#privacy-policy">Privacy policy</a></li>
                        <li><a href="#refund-policy">Refund and Cancellation policy</a></li>
                    </ul>
                </div>
                <div className="footer-section footer-subscribe">
                    <div className="social-icons">
                        <a href="#twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#google"><i className="fab fa-google"></i></a>
                        <a href="#instagram"><i className="fab fa-instagram"></i></a>
                    </div>
                    <form className="subscribe-form">
                        <input type="email" placeholder="Enter your email address" />
                        <button type="submit">Subscribe Now</button>
                    </form>
                    <p>Stay up to date with the latest news and offers from Lending Buddha</p>
                </div>
                <div className="footer-section footer-contact">
                    <p><i className="fas fa-envelope"></i> contactus@getlendingbuddha.online</p>
                    <p><i className="fas fa-phone"></i> +91-7060372107</p>
                    <p><i className="fas fa-map-marker-alt"></i> Address: Lending Buddha, H-183, Sector 63 Noida, 201301</p>
                </div>
                <div className="footer-bottom">
                    <p>Copyright © Lending Buddha 2022</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
