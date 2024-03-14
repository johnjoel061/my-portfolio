import React from 'react';
import './contact.css';

const contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p><i className="fa-solid fa-paper-plane"></i> alfabetejohnjoel@gmail.com</p>
              <p><i className="fa-solid fa-square-phone-flip"></i>+63-938-0828-620</p>
              <div className="social-icons">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              </div>
              <a href="assets/John Joel C. Alfabete CV.pdf" className="contact-btn contact-btn2" download>Download CV</a>
            </div>
            <div className="contact-right">
              <form action="">
                <input type="text" name="Name" placeholder="Your Name" required />
                <input type="email" name="Email" placeholder="Your Email" required />
                <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                <button type="submit" className="contact-btn contact-btn2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
