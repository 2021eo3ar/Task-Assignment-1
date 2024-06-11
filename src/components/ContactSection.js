// Contact.js
import React from 'react';
import './ContactSection.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>+91-7060372107</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>C/O We Work, H-183 Sector 63 Noida</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>contactus@getlendingbuddha.online</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-twitter"></i>
            <p>Follow @ LendingBuddha</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-facebook"></i>
            <p>
              <iframe
                src="https://www.facebook.com/plugins/like.php?href=https://www.facebook.com/getlendingbuddha&width=450&layout=button_count&action=like&size=small&share=true&height=21&appId"
                width="450"
                height="21"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
