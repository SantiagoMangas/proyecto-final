import React from 'react';
import './Hero.css'; 

const Hero = () => {
  return (
    <section className="hero-container">
      <img
        className="profile-image"
        src="assets/profile-image.svg"
        alt="Profile Image"
      />
      <h1>Hi I'm Franklin</h1>

      <div className="content-text">
        <h2>Programador FullStack</h2>
        <h2>products, brands, and experience.</h2>
        <p>
          A Frontend Developer and Visual Designer with experience in web
          design, brand identity, and product design.
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
