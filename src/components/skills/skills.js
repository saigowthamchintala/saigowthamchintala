// src/components/Skills.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faGithub,
  faDocker,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons"; // For database-related skills
import "./skills.css";

// Define skills in categories
const categories = {
  Frontend: [
    { name: "HTML 5", icon: faHtml5 },
    { name: "CSS 3", icon: faCss3Alt },
    { name: "JavaScript", icon: faJs },
    { name: "React.js", icon: faReact },
  ],
  Backend: [
    { name: "Node.js", icon: faNodeJs },
    { name: "Docker", icon: faDocker },
    { name: "Database", icon: faDatabase },
  ],
  "Version Control": [{ name: "Git & GitHub", icon: faGithub }],
  Cloud: [{ name: "AWS", icon: faAws }],
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skill-grid">
          {Object.keys(categories).map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <ul className="skills-list">
                {categories[category].map((skill, index) => (
                  <li key={index} className="skill-item">
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
