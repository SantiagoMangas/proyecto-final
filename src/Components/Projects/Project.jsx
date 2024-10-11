import React from 'react';
import '../Projects/Projects.css';

export const Project = ({ name, technologies, githubLink, liveLink }) => {
  return (
    <div className="card">
      <div className="project-info">
        <div className="project-bio">
          <h3>{name}</h3>
          <p>{technologies}</p>
        </div>
        <div className="project-link">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

