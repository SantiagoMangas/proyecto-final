import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <section id="resume" className="resume">
    <div className="container">

      <div className="services-text">
        <h2>Resumen de mi</h2>
        <p> Persona comprometida, con conocimientos en desarrollo web front-end y back-end. Capaz de trabajar en equipo y siempre dispuesto a aprender y mejorar en nuevas tecnologías. Siempre estoy dispuesto para trabajar en equipo y lograr resultados eficientes, con el objetivo de aportar valor en cada proyecto en el que participo.</p>
      </div>

      <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Educación</h3>
            <div className="resume-item">
              <h4>Técnico Universitario en Programación.</h4>
              <p className="resume-date">2023 - 2024</p>
              <p>
                <em>
                  <a rel="noopener" href="https://www.frbb.utn.edu.ar/frbb/sacad/carreras/tup/" target="_blank">Universidad Tecnológica Nacional - Bahia Blanca.</a>
                </em>
              </p>
              <h4>Escuela Primaria y Secundaria. Instituto Almafuerte. Puan</h4>
              <p className="resume-date">2023 - 2024</p>
              <p>
                <em>
                  <a rel="noopener" href="https://www.facebook.com/p/Instituto-Almafuerte-Nivel-Secundario-100063693335140/?locale=es_LA" target="_blank">Graduado de Bachiller en Economía y Administración.</a>
                </em>
              </p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Certificaciones</h3>
            <div className="resume-item">
              <h4>Desarrollo Full Stack</h4>
              <p className="resume-date">2023 - 2024 (8 meses)</p>
              <p><em>Diplomatura en Programación web full stack Developer | UTN BS. AS.</em></p>
              <ul>
                <li>Certificado: <a rel="noopener" href="" target="_blank">------</a></li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Inglés - 6 TEENS</h4>
              <p className="resume-date">2022</p>
              <p><em>Programa de Certificación de Competencias en Lengua Extranjera UTN Bahía Blanca.</em></p>
              <ul>
                <li>Certificado: <a rel="noopener" href="" target="_blank">----------</a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </section>
  )
}

export default Resume