import React from 'react';
import './Navbar.css';
import moon from '../Images/moon.svg';
import sun from '../Images/sun.svg';

const Navbar = () => {
  return (
    <header id="hero">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          {/* Logo */}
          <h1 id="logo">
            <a href="">
              <img src="" alt="Logo" />
            </a>
          </h1>
          {/* Navbar links */}
          <ul className="nav-menu">
            <li><a className="nav-link" href="#projects">PROYECTOS</a></li>
            <li><a className="nav-link" href="#">CONTACTAME</a></li>
            <li><a className="nav-link" href="#">SERVICIO</a></li>
          </ul>

          {/* Toggle switch */}
          <div className="theme-switch">
            <input type="checkbox" id="switch" />
            <label className="toggle-icons" htmlFor="switch">
              <img className="moon" src= {moon} alt="moon icon" />
              <img className="sun" src= {sun} alt="sun icon" />
            </label>
          </div>

          {/* Hamburger menu */}
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
