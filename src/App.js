

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <div className="w-full h-full bg-gray-900">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
