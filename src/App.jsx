import React from 'react'
import Hero from './Components/Hero/Hero'
import './styles/global.css';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
    </>
  )
}

export default App