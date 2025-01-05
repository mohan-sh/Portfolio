import React from 'react';
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
 // Corrected import statement

function App() {
  return (
    <div className="App">
      <div class="w-full h-full bg-gray-900">

     <Header/>
    <Hero/>
    <About/>
    <Project/>
      </div>
     
    </div>
  );
}

export default App;
