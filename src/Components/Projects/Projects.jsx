import React from 'react';
import { Project } from './Project';
import '../Projects/Projects.css';

const Projects = () => {
  const projectList = [
    {
      name: 'Project One',
      technologies: 'React, Redux, SASS',
      githubLink: '#', // Reemplaza con el enlace real de GitHub
      liveLink: '#', // Reemplaza con el enlace del proyecto en vivo
    },
    {
      name: 'Project Two',
      technologies: 'React, Redux, SASS',
      githubLink: '#',
      liveLink: '#',
    },
    {
      name: 'Project Three',
      technologies: 'React, Redux, SASS',
      githubLink: '#',
    },
    {
      name: 'Project Four',
      technologies: 'React, Redux, SASS',
      githubLink: '#',
      liveLink: '#',
    },
    {
      name: 'Project Five',
      technologies: 'React, Redux, SASS',
      githubLink: '#',
      liveLink: '#',
    },
    {
      name: 'Project Six',
      technologies: 'React, Redux, SASS',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="project-container container">
      <div className="content-text">
        <h2>Projects</h2>
        <p>Check out some of my personal and paid projects</p>
      </div>

      {/* Renderizando la lista de proyectos dinámicamente */}
        <div className="project-grid">
          {projectList.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              technologies={project.technologies}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>

      <a href="#" className="btn btn-secondary" target="_blank">
        See More <i className="fas fa-arrow-right"></i>
      </a>

    </section>
  );
};

export default Projects;
