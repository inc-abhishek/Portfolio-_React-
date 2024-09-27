// About.js
import React from 'react';
import './About.css'; // Importing the CSS file
import devImage from '../assets/indomay32.jpg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1>Know Who <span>I'M</span></h1>
          <p>
            Hi Everyone, I am <span className="highlight">Abhishek Pal</span> from <span className="highlight">India</span>.
            <br />I am currently a frontend developer and love working on creative projects.
            <br />I am Currently Learning MERN Stack From Online Bootcamp .<br/>
            <br />Apart from coding, some other activities that I love to do!
          </p>
          <ul className="activities">
            <li><span role="img" aria-label="games">🎮</span> Playing Games</li>
            <li><span role="img" aria-label="blogs">✍️</span> Reading Books </li>
            <li><span role="img" aria-label="travel">✈️</span> Travelling</li>
          </ul>
          <p className="quote">
            "Code is like humor. When you have to explain it, it’s bad!" <br />— Cory House .
          </p>
        </div>
        <div className="about-image">
       <img src={devImage} alt="Developer" />
       </div>
      </div>
    </section>
  );
};

export default About;

