import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './App.css';
import {Element} from 'react-scroll';
import Home from './Pages/Home/Home';
import Work from './Pages/Work/Work';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import * as actionCreators from './store/actions';
import {connect} from 'react-redux';
class App extends Component {
  componentDidMount(){
    console.log('in')
    this.props.dispatch(actionCreators.retainState());
  }
  render() {
    return (
      <div className="App">
      <Element name='home'>
        <Home/>
      </Element> 
      <Element name='work'>
        <Work/>
      </Element>      
      <Element name='portfolio'>
        <Portfolio/>
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element> 
       
      </div>
    );
  }
}

export default connect()(App);
