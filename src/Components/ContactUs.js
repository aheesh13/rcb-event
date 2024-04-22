import React from 'react';
import '../CustomCss/ContactUs.css'; 
const ContactUs = () => {
  return (
    <div className="content">
        <div className="contact-image">
        <img src="/Images/Img1.jpeg" alt="Contact Us" className="contact-img" />
      </div>
      
      <h2>Contact Us</h2>
      
      <div className="contact-details">
        <h3>WhatsApp Number</h3>
        <p>+91 9071949533</p>

        <h3>Email ID</h3>
        <p>royalcelebrationbonanza@gmail.com</p>

        <h3>Official Address</h3>
        <p>62/B, 4th Cross Road, Mysuru 570004, Karnataka, India</p>
      </div>
    </div>
  );
};

export default ContactUs;
