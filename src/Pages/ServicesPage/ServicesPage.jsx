import React from 'react'
import Services from '../../Components/Service/Services'
import Resume from '../../Components/Resume/Resume';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const ServicesPage = () => {
  return (
    <>
        <Navbar />
        <Services />
        <Resume />
        <Footer />
    </>
  )
}

export default ServicesPage