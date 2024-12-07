import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import React from 'react';

const App = () => {
  return (
    <div className="main_app">
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default App;
