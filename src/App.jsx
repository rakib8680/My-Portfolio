import React from 'react';
import './App.css'
import Banner from './components/Banner/Banner';
import NabBar from './components/NavBar/NabBar';
import Particle from './components/Particle';
import About from './components/About';
import { motion, useScroll, useSpring } from "framer-motion";

const App = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  return (
    <div >
      <motion.div className="progress-bar z-10" style={{ scaleX }} />
      {/* <NabBar /> */}
      <Banner />
      <About />
      <Particle />
    </div>
  );
};

export default App;