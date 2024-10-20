import React from 'react';
import './Hero.css'; 
import logo from '../Images/logo_prueba.jpeg';

const Hero = () => {
  return (
    <section className="hero-container">
      <img
        className="profile-image"
        src= {logo}
        alt="Profile Image"
      />
      <h1>Hola, soy Santiago</h1>

      <div className="content-text">
        <h2>Programador FullStack</h2>
        <h2>desarrollando experiencias digitales.</h2>
        <p>
          Desarrollo de aplicaciones web, diseño de interfaces de usuario, y la creación de experiencias interactivas.
        </p>
      </div>

      <a
        href=""
        className="btn btn-secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contactame!
      </a>
    </section>
  );
};

export default Hero;
