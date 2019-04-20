import React, { Component } from 'react';

import './App.css';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
    );
  }
}

export default App;
