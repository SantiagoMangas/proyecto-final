import React from 'react'
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => {
  return (
    <div className = 'footer'>
        <div classNmae = 'sb-footer section__padding'>
            <div className = 'sb-footer-links'>
                <div className = 'sb-footer-links-div'>
                    <h4>Para Negocios</h4>
                    <a href = '/contact' >
                        <p>Contactanos</p>
                    </a>
                    <a href = '/servicios' >
                    <p>Servicios</p>
                    </a>
                    <a href = '/' >
                    <p>Proyectos</p>
                    </a>
                </div>
                <div className = 'sb-footer-links-div'>
                    <h4>hola</h4>
                    <a href = '/contact' >
                        <p>Contactanos</p>
                    </a>
                    <a href = '/servicios' >
                        <p>Servicios</p>
                    </a>
                    <a href = '/' >
                        <p>Proyectos</p>
                    </a>
                </div>
                <div className = 'sb-footer-links-div'>
                    <h4>chau</h4>
                    <a href = '/contact' >
                        <p>Contactanos</p>
                    </a>
                    <a href = '/servicios' >
                        <p>Servicios</p>
                    </a>
                    <a href = '/' >
                        <p>Proyectos</p>
                    </a>
                </div>
                <div className = 'sb-footer-links-div'>
                    <h4>Comming soon</h4>
                    <div className = 'redes'>
                        <p> <img src = {images.email} alt=""/></p>
                        <p> <img src = {images.twitter} alt=""/></p>
                        <p> <img src = {images.linkedln} alt=""/></p>
                        <p> <img src = {images.github} alt=""/></p>
                    </div>
                </div>

                <hr></hr>

                <div className = 'sb-footer-below'>
                    <div className = 'sb-footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} Santiago Mangas. Todos los derechos reservados.
                        </p>
                    </div>
                    <div className = 'sb-footer-below-links'>
                        <a href = ''><div><p>hola</p></div></a>
                        <a href = ''><div><p>hola</p></div></a>
                        <a href = ''><div><p>hola</p></div></a>
                        <a href = ''><div><p>hola</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer