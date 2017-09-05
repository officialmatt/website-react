import React, { Component } from 'react';
import Title from './Title';
import Icons from './Icons';
import Activities from './Activities';
import Projects from './Projects';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="Intro-contents">
            <Title />
            <Icons />
          </div>
        </div>
        <div id="Activities" >
          <Activities />
        </div>
        <div id="Projects" >
          <Projects />
        </div>
        <Footer />
    </div>
    );
  }
}

export default App;
