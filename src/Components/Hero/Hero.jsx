import React from 'react';
import './Hero.css'; 
import images from '../../constants/images';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-container">
      <img
        className="profile-image"
        src= {images.logoHero}
        alt="Profile Image"
      />
      <h1>Hola, soy Santiago</h1>

      <div className="content-text">
        <h2>Programador FullStack</h2>
        <h2 className='subtitle'>desarrollando experiencias digitales.</h2>
        <p>
          Desarrollo de aplicaciones web, diseño de interfaces de usuario, y la creación de experiencias interactivas.
        </p>
      </div>

      <Link 
        className="btn btn-secondary" // Asegúrate de que este estilo esté definido en tu CSS
        to="/contact" // Cambia esto a la ruta correcta
      >
        Contactame!
      </Link>
    </section>
  );
};

export default Hero;
