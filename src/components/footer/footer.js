import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope, // Added Gmail icon
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Connect with Me</h2>
        <ul className="social-icons">
          <li>
            <a
              href="https://www.facebook.com/chintala.gowtham.9"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="mailto:saigowtham30601@gmail.com" // Replace with your actual email address
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/saigowthamchintala"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/chintala_gowtham"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Chintala Sai Gowtham. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
