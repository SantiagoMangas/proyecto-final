import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import images from '../../constants/images';
import moon from '../Images/moon.svg';
import sun from '../Images/sun.svg';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cargar el tema guardado del localStorage cuando el componente se monta
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    setIsDarkMode(currentTheme === 'dark');
  }, []);

  // Manejar el cambio de tema
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
  };

  // Manejar el menú de hamburguesa
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar el menú cuando se hace clic en un enlace
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <h1 id="logo">
            <Link to="/">
              <img src={images.logo} alt="Logo" />
            </Link>
          </h1>
          
          {/* Menú de navegación */}
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><Link className="nav-link" to="/" onClick={closeMenu}>PROYECTOS</Link></li>
            <li><Link className="nav-link" to="/contact" onClick={closeMenu}>CONTACTAME</Link></li>
            <li><Link className="nav-link" to="/services" onClick={closeMenu}>SERVICIOS</Link></li>

            {/* Toggle switch para el tema */}
            <li className="theme-switch">
              <input 
                type="checkbox" 
                id="switch" 
                checked={isDarkMode} 
                onChange={toggleTheme} // Cambia el tema
              />
              <label className="toggle-icons" htmlFor="switch">
                <img className="moon" src={moon} alt="moon icon" />
                <img className="sun" src={sun} alt="sun icon" />
              </label>
            </li>
          </ul>

          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
