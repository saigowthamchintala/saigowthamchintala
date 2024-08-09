// src/components/publications.js
import React from "react";
import "./publications.css";

const publications = [
  {
    title:
      "Polarization Effect Assessment of Sub-6 GHz Frequencies on Adult and Child Four-Layered Head Models",
    description:
      "Nowadays, with the extensive use of mobile phones, Electromagnetic (EM) radiation penetration from Radio Frequencies (RFs), particularly into the human head, is an issue that needs resolving. Some serious biological hazards occur inside the human body due to RF radiation accumulation. The RF radiation can be minimized by embodying shielding and coating materials on the front side of the mobile handset. The novelty of the proposed work is the use of mathematical analysis in calculating the Specific Absorption Rate (SAR) absorbed by planar four-layer adult and child head models when exposed to mobile smartphone RF radiation.",
    date: "August 2022",
    link: "http://dx.doi.org/10.48084/etasr.5096",
  },
  // Add more publications here
];

const Publications = () => {
  return (
    <section className="publications" id="publications">
      <video className="background-video" autoPlay muted loop>
        <source src="/watervideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>Publications</h2>
      <div className="publications-container">
        {publications.map((pub, index) => (
          <article key={index} className="publication-item">
            <h3>
              <a href={pub.link} target="_blank" rel="noopener noreferrer">
                {pub.title}
              </a>
            </h3>
            <p>{pub.description}</p>
            <p className="publication-date">{pub.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Publications;
