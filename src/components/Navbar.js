import React, { useState } from 'react';
import './Navbar.css';
import { FaHome, FaUserAlt, FaProjectDiagram, FaFileAlt } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode'); 
  };

  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <ul className="nav-links">
        <li><a href="#home"><FaHome /> Home</a></li>
        <li><a href="#about"><FaUserAlt /> About</a></li>
        <li><a href="#projects"><FaProjectDiagram /> Projects</a></li>
        <li><a href="#resume"><FaFileAlt /> Resume</a></li>
      </ul>
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? '🌙' : '☀️'}
      </div>
    </nav>
  );
};

export default Navbar;
