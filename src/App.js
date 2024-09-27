import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tech from './components/tech';
import './App.css';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Tech/>
   <Projects/>
   <Footer/>
   </>
  );
}

export default App;
