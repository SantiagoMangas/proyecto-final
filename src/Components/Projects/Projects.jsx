import React from 'react';
import { Project } from './Project';
import '../Projects/Projects.css';
import {images} from '../../constants/images';

const Projects = () => {
  const projectList = [
    {
      name: 'Proyecto Uno',
      technologies: 'React, CSS, HTML, JS',
      githubLink: '#', // Cambiar con el enlace git
      liveLink: '#', // Cambiar con el enlace del proyecto
    },
    {
      name: 'Proyecto Dos',
      technologies: 'React, CSS, HTML, JS',
      githubLink: '#',
      liveLink: '#',
    },
    {
      name: 'Proyecto Tres',
      technologies: 'React, CSS, HTML, JS',
      githubLink: '#',
      liveLink: '#',
    },
    {
      name: 'Proyecto Cuatro',
      technologies: 'React, CSS, HTML, JS',
      githubLink: '#',
      liveLink: '#',
    },
    {
      name: 'Proyecto Cinco',
      technologies: 'React, CSS, HTML, JS',
      githubLink: '#',
      liveLink: '#',
    },
    {
      name: 'Proyecto Seis',
      technologies: 'React, CSS, HTML, JS',
      githubLink: '#',
      liveLink: '#',
    },
  ];

  return (
    <section id="projects" className="project-container container">
      
      <div class="division"></div>

      <div className="content-text">
        <h2>Proyectos</h2>
        <p>Mira algunos de mis proyectos personales y de la universidad!</p>
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
      Ver más... <i className="fas fa-arrow-right"></i>
      </a>
    </section>
  );
};

export default Projects;
