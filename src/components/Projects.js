// Projects.js
import React from "react";
import './Projects.css';
import GeekfoodImage from '../assets/Screenshot 2024-09-27 115722.png';
import GeekoColourImage from '../assets/Screenshot 2024-09-27 120202.png';
import AmazonCloneImage from '../assets/Screenshot 2024-09-27 120517.png';

const projects = [
  {
    title: "Geekfood",
    description: "Geekfood is a sleek, modern homepage designed with a focus on responsiveness, aesthetic appeal, and user-friendly navigation. Developed using the latest web technologies, this project serves as a template for businesses, product showcases, or service-oriented websites, with customizable features and sections.",
    github: "https://github.com/inc-abhishek/React-Day-3-Geekfood-", 
    demo: "https://react-day-3-geekfood.vercel.app/", 
    image: GeekfoodImage, 
  },
  {
    title: "GEEK'O COLOUR",
    description: "GEEK'O COLOUR is a memory matching game with a 4x4 grid of colored boxes. Built with HTML, CSS, and JavaScript, it challenges players to find matching pairs. The game features automatic color shuffling, interactive feedback, and a simple restart mechanism.",
    github: "https://github.com/inc-abhishek/Pair-Game", 
    demo: "https://inc-abhishek.github.io/Pair-Game/", 
    image: GeekoColourImage, 
  },
  {
    title: "Amazon Clone",
    description: "Amazon Clone is a fully functional e-commerce website replica with features like product listings, cart functionality, user authentication, and payment integration. Developed using React, Firebase, and Stripe, it mimics the look and feel of Amazon’s shopping platform.",
    github: "https://github.com/inc-abhishek/Amazon-Clone-Web", 
    demo: "https://amazon-clone-web-six.vercel.app/", 
    image: AmazonCloneImage,  
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">My Recent <span className="highlight">Works</span></h2>
      <p className="projects-subheading">Here are a few projects I've worked on recently.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.github} className="project-link">GitHub</a>
              <a href={project.demo} className="project-link">Demo</a>
            </div>
          </div>
        ))}


        <br />
        <h4 className = "Last"> <h4 className = "Last"> * I WILL BE ADDING MORE PROJECTS SOON . STAY TUNED !   <br />
          * Also Resume Will be Added in The Navbar Soon.
        </h4></h4>
      </div>
    </section>
    
  );
};

export default Projects;
