import React from 'react';
import './App.css'
import Banner from './components/Banner/Banner';
import NabBar from './components/NavBar/NabBar';
import Nothing from './components/Nothing';

const App = () => {
  return (
    <div >
      <NabBar />
      <Banner />
      <Nothing />
    </div>
  );
};

export default App;