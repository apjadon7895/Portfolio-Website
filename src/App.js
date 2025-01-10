import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Projects from './Components/Projects';
import Experiance from './Components/Experiance';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Experiance/>
      <Contact/>
      <Footer/>
    </div>
    <Toaster/>
    </>
  )
}

export default App