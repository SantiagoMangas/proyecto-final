import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <section id="resume" class="resume">
    <div class="container">

      <div class="section-title">
        <h2>Resume</h2>
        <p> Hard-working individual with proficiency in Bootstrap, Javascript, Wordpress as well as ability to
          communicate effectively in a team setting, and possessing a strong willingness to learn about new web
          technologies.
          Always prepare to give the best in order to ensure better outcome.</p>
      </div>

      <div class="row">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>B.Sc. in Electronics & Communication Engineering</h4>
            <h5>2015 - 2021</h5>
            <p><em><a rel="noopener" href="https://ist.edu.bd/" target="_blank">Institute of Science &
                  Technology</a></em></p>
            <p>Graduated, Major in Communication.</p>
            <b>Academic Achievements</b>
            <ul>
              <li>Poster Presentation Champion: National conference on Electronics and informatics - 2019</li>
              <li>Journal Published: 4th Young Scientist Congress - 2019</li>
            </ul>
          </div>
          <h3 class="resume-title">Certifications</h3>

          <div class="resume-item">
            <h4>Building Web Applications in PHP</h4>
            <h5>(8 Weeks) – 2020</h5>
            <p><em>Certified by University of Michigan, USA </em></p>
            <ul>
              <li>Credential ID: <a rel="noopener"
                  href="https://www.coursera.org/account/accomplishments/verify/5U6TYJY8KP8Y"
                  target="_blank">5U6TYJY8KP8Y</a></li>
            </ul>
          </div>
          
          <div class="resume-item">
            <h4>Top-up IT Training, Web Development</h4>
            <h5>(300 Hours) - 2017</h5>
            <p><em>LICT project, Bangladesh Computer Council (BCC)
                Certified by George Washington University, USA
              </em></p>
            <ul>
              <li>Credential ID: <a rel="noopener"
                  href="https://drive.google.com/file/d/1cC09Rs4M0x4-S4T371jOvSZacGx2LOxg/view"
                  target="_blank">G023933</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Resume