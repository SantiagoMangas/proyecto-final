import React from 'react'
import { images } from "../../constants";
import "./Redes.css";

const Redes = () => {
  return (
    <>
         <h2 className="head-text">Let's Connect!!</h2>
         <div className="app__footer-cards">
            <div className="app__footer-card">
               <img src={images.email} />
               <a href="mailto:tanishakayadav2110@gmail.com" className="p-text">
                  Email
               </a>
            </div>
            
            <div className="app__footer-card">
            
               <img src={images.twitter} />
               <a href="https://twitter.com/tanishka__yadav" className="p-text">
               Twitter
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.linkedln} />
               <a
                  href="https://www.linkedin.com/in/tanishkayadav/"
                  className="p-text"
               >
                  Linkedln
               </a>
            </div>
            <div className="app__footer-card">
               <img src={images.github} />
               <a href="https://github.com/Tanishka-dev" className="p-text">
                 GitHub
               </a>
            </div>
         </div>
      </>
  )
}

export default Redes