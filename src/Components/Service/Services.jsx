import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { ImStatsBars } from "react-icons/im";
import { BiWorld } from "react-icons/bi";
import { FaCalendarCheck } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

import './Services.css'


const ServicesPage = () => {
  return (
    <section id="services" className="services">
      <div className="container">

        <div className="services-text">
          <h2>Servicios</h2>
          <p>Tengo conocimientos sólidos en HTML, CSS, JavaScript y React. Estoy en constante aprendizaje y mejora de mis habilidades para crear interfaces de usuario atractivas y funcionales. Además, cuento con capacidad de desarrollo back-end utilizando Java, Node.js, Express.js, Spring Boot y bases de datos SQL.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon"><FaLaptopCode /></div>
            <h3 className="title">Desarrollo Web</h3>
            <p className="description">Me apasiona aprender y mejorar. Puedo planificar soluciones para problemas y desarrollar código limpio y funcional.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><ImStatsBars/></div>
            <h3 className="title">Diseño Responsive</h3>
            <p className="description">Desarrollo sitios web adaptables para distintos dispositivos, con una experiencia de usuario fluida y optimizada para SEO.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><BiWorld/></div>
            <h3 className="title">Apariencia Creativa</h3>
            <p className="description">Me esfuerzo por diseñar sitios web accesibles, con una arquitectura de información clara y tiempos de carga rápidos para una navegación efectiva.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><CiImageOn/></div>
            <h3 className="title">Código Limpio</h3>
            <p className="description">Me aseguro de escribir código sencillo, entendible y bien estructurado, siguiendo buenas prácticas de desarrollo.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><VscSettings/></div>
            <h3 className="title">Soporte Rápido</h3>
            <p className="description">Estoy disponible para resolver problemas o realizar ajustes en horarios flexibles, adaptándome a las necesidades del proyecto.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
            <div className="icon"><FaCalendarCheck/></div>
            <h4 className="title">Identidad de Marca</h4>
            <p className="description"> Ayudo a crear una identidad visual coherente para tu marca, utilizando colores contrastantes y contenido bien estructurado para destacar.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServicesPage