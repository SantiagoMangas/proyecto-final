import React from 'react';
import './Navbar.css';

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
            <li><a className="nav-link" href="#projects">PROJECTS</a></li>
            <li><a className="nav-link" href="#">CONTACT</a></li>
            <li><a className="nav-link" href="#">BLOG</a></li>
            <li>
              <a
                className="nav-link btn btn-primary"
                href=""
              >
                RESUME <i className="fas fa-arrow-right"></i>
              </a>
            </li>
          </ul>

          {/* Toggle switch */}
          <div className="theme-switch">
            <input type="checkbox" id="switch" />
            <label className="toggle-icons" htmlFor="switch">
              <img className="moon" src="assets/moon.svg" alt="moon icon" />
              <img className="sun" src="assets/sun.svg" alt="sun icon" />
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
