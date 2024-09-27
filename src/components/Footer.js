
import React from 'react';
import './Footer.css';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        Design and Developed by <span className="name">Abhishek Pal</span> Geekster FS-20
      </p>
      <div className="social-icons">
        <a href="https://github.com/inc-abhishek" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://instagram.com/inc_abhishek" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/inc-abhishek/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="paljiabhishek184@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
