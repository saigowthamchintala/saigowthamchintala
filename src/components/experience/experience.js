// src/components/Experience.js
import React from "react";
import "./experience.css";

// Import local images
import tcsLogo from "../../assets/companylogos/tcs-logo.png"; // Correct path based on your folder structure

const experiences = [
  {
    position: "Assistant Systems Engineer",
    company: "Tata Consultancy Services",
    companyLogo: tcsLogo, // Use the imported logo
    location: "Indore",
    startDate: "October 2022",
    endDate: "Present",
    responsibilities: [
      "Developed and maintained backend services and APIs using Node.js and Express.js, handling millions of requests per day with high efficiency and reliability.",
      "Implemented RESTful APIs to facilitate seamless communication between front-end and back-end systems, enhancing data flow and application functionality.",
    ],
  },
  // Additional experiences...
];

const Experience = () => {
  return (
    <section className="work-experience" id="experience">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experiences.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <div className="company-info">
                <img
                  src={job.companyLogo}
                  alt={`${job.company} Logo`}
                  className="company-logo"
                />
                <div>
                  <h3>{job.position}</h3>
                  <h4>{job.company}</h4>
                  <p>{job.location}</p>
                  <p>
                    <strong>Duration:</strong> {job.startDate} - {job.endDate}
                  </p>
                </div>
              </div>
              <ul>
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
