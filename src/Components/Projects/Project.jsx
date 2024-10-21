import React from 'react';
import '../Projects/Projects.css';
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

export const Project = ({ name, technologies, githubLink, liveLink }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <div className="project-bio">
          <h3>{name}</h3>
          <p>{technologies}</p>
        </div>
        <div className="project-link">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <FaGlobe />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

