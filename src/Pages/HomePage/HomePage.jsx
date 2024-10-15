import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar';
import Projects from '../../Components/Projects/Projects';

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Projects />
    </>
  )
}

export default HomePage