import React from 'react';
import './Hero.css';
import heroImage from '../assets/paliiiii.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">Hello, my name is Abhishek Pal</h1>
        <h2 className="hero-subheading">Building Cool Stuff Using React JS</h2>
        <p className="hero-description">
          I'm a front-end developer specializing in building responsive and user-friendly Web Applications. 
        </p>
        <div className="hero-buttons">
          <a href="https://www.linkedin.com/in/inc-abhishek/">Linkedin</a>
          <a href="https://github.com/inc-abhishek">Github</a>
        </div>
      </div>
      <div className="hero-image">
      <img src={heroImage} alt="Abhishek working on a project" />
      </div>
    </section>
  );
};

export default Hero;
