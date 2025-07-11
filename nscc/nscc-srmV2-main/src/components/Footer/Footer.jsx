import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>
        <div className="text-container">
          <span className="big-text big-text-left">SCC</span>
          <span className="big-text big-text-right">N</span>
          <div className="small-text">
            <p>Newton</p>
            <p>School</p>
            <p>Coding</p>
            <p>Club</p>
          </div>
          </div>
        </h1>
      </header>
      <footer className="footer-container">
        <div className="footer-content">
        <div className="left-column">
  <ul className="main-menu">
    <li><a href="#home">Home</a></li>
    <li><a href="#about-us">About Us</a></li>
    <li><a href="#domains">Domains</a></li>
    <li><a href="#events">Events</a></li>
    <li><a href="#sponsors">Sponsors</a></li>
    <li><a href="#our-team">Our Team</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#follow-us">Follow Us</a></li>
    <li><a href="#contact-us">Contact Us</a></li>
  </ul>
</div>
          <div className="right-column">
            <div className="contact">
              <h3>Contact Us</h3>
              <p>+91 9458896788</p>
              <p>+91 9458896088</p>
              <p>info@nsccsrm.tech</p>
            </div>
            <div className="location">
              <h3>Location</h3>
              <p>Potheri, SRM Nagar, Kattankulathur, Tamil Nadu 603203</p>
              <p>10am—6pm</p>
            </div>
            <div className="social-icons">
  <a href="https://www.instagram.com/nscc_srm/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "#E4405F" }}>
    <FaInstagram size={40} />
  </a>
  <a href="https://www.linkedin.com/company/newton-school-coding-club-srmist/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "#0077B5" }}>
    <FaLinkedin size={40} />
  </a>
  <a href="https://x.com/nsccsrm?lang=en" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: "#000000" }}>
  <FontAwesomeIcon icon={faXTwitter} size="1x" />
</a>
  
</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
