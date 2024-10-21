import React from 'react'
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="container">
        <a href="mailto:santimangas16@gmail.com">santimangas16@gmail.com</a>

        <div className="social">
          <a href="mailto:santimangas16@gmail.com" target="_blank"
            ><img src={images.email} alt="Email"
          /></a>
          <a href="#" target="_blank"><img src={images.twitter} alt="Twitter" /></a>
          <a href="#" target="_blank"
            ><img src={images.linkedln} alt="Linkedin"
          /></a>
          <a href="#" target="_blank"><img src={images.github} alt="GitHub" /></a>
        </div>

        <div className="attribution">
          <a
            href="https://github.com/SantiagoMangas/proyecto-final"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={images.logo}
              alt="attribution"
              width="75px"
            />
          </a>
        </div>
        <small>Copyright &copy; Santiago Mangas {year}, Todos los derechos reservados</small>
      </div>
    </footer>
  )
}

export default Footer