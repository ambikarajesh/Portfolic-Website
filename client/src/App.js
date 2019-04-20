import React, { Component } from 'react';

import './App.css';
import {Element} from 'react-scroll';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Element name='home'>
        <Home/>
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <Element name='portfolio'>
        <Portfolio/>
      </Element>
      <Element name='contact'>
        <Contact />
      </Element> 
       
      </div>
    );
  }
}

export default App;
