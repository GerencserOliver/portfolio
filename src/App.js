import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
