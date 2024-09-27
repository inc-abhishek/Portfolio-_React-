// tech.js
import React from "react";
import { FaJava ,  FaRobot ,FaHtml5, FaCss3Alt, FaSass, FaReact, FaJsSquare } from "react-icons/fa"; 
import { SiRedux, SiTailwindcss } from "react-icons/si"; 
import './tech.css';  // Import the CSS file

const skills = [
  { name: "DSA - JAVA", icon: <FaJava className="skill-icon" /> }, 
  { name: "AI For More Productivity", icon: <FaRobot className="skill-icon" /> },
  { name: "HTML", icon: <FaHtml5 className="skill-icon" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon" /> },
  { name: "Sass", icon: <FaSass className="skill-icon" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="skill-icon" /> },
  { name: "JavaScript", icon: <FaJsSquare className="skill-icon" /> },
  { name: "React", icon: <FaReact className="skill-icon" /> },
  { name: "Redux", icon: <SiRedux className="skill-icon" /> },       
   
];

const Tech = () => {
  return (
    <section className="skillset-section">
      <h2 className="skillset-heading">Professional Skillset</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon} 
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
