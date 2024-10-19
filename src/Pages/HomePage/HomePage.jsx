import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar';
import Projects from '../../Components/Projects/Projects';
import Footer from '../../Components/Footer/Footer';

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Projects />
        <Footer />
    </>
  )
}

export default HomePage