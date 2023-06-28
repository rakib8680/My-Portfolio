import React from 'react';
import './App.css'
import Banner from './components/Banner/Banner';
import NabBar from './components/NavBar/NabBar';
import Nothing from './components/Nothing';
import Particle from './components/Particle';

const App = () => {
  return (
    <div >
      <NabBar />
      <Banner />
      <Particle />
      <Nothing />
    </div>
  );
};

export default App;