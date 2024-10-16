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
          <p>Experto y con amplia experiencia trabajando con HTML5, CSS3, Bootstrap 4, JavaScript y múltiples elementos relacionados con el desarrollo front-end responsive. Tengo el conocimiento más actualizado sobre diseño de interfaces de usuario (UI). </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon"><FaLaptopCode /></div>
            <h3 className="title">Web Development</h3>
            <p className="description">A passion for knowledge. Ability to plan for
              everything. Great debugging skills. “Accelerated Failure” Mentality.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><ImStatsBars/></div>
            <h3 className="title">Responsive Design</h3>
            <p className="description">Less Effort.
              Smooth User Experience. User Friendly website. Mobile Segment. Search Engine
              Optimization (SEO) .</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><BiWorld/></div>
            <h3 className="title">Creative Look</h3>
            <p className="description">Accessible to All Users. Well Planned Information Architecture. Fast Load Times.
              Effective Navigation.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><CiImageOn/></div>
            <h3 className="title">Clean Code</h3>
            <p className="description">Understandable and readable code, Always following updated structure, simple and
              focused.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><VscSettings/></div>
            <h3 className="title">Fast Support</h3>
            <p className="description">I am available except from 12 PM to 8 PM (GMT +6) Bangladesh time. Services can be
              provided 7 days in a week.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
            <div className="icon"><FaCalendarCheck/></div>
            <h4 className="title">Branding Identity</h4>
            <p className="description"> Well-Formatted Content That Is Easy to Scan, Contrasting
              Color Scheme which make your brand unique and desired.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServicesPage