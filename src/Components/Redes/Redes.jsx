import React from 'react'
import { images } from "../../constants";
import "./Redes.css";

const Redes = () => {
  return (
    <>
         <h2 className="content-text">Contactame en mis redes!</h2>
         <div className="footer-cards">
            <div className="footer-card">
               <img src={images.email} />
               <a href="mailto:santimangas16@gmail.com" className="p-text">
                  Email
               </a>
            </div>
            
            <div className="footer-card">
            
               <img src={images.twitter} />
               <a href="#" className="p-text">
               Twitter
               </a>
            </div>
            <div className="footer-card">
               <img src={images.linkedln} />
               <a
                  href="https://www.linkedin.com/in/santiago-mangas/"
                  className="p-text"
               >
                  Linkedln
               </a>
            </div>
            <div className="footer-card">
               <img src={images.github} />
               <a href="https://github.com/SantiagoMangas" className="p-text">
                 GitHub
               </a>
            </div>
         </div>
      </>
  )
}

export default Redes