import React, { Component } from 'react';
import Title from './Title';
import Icons from './Icons';

import Techsoc from './images/techsoc.jpg';
import Rightmove from './images/rightmove.jpg';
import Microsoft from './images/microsoft.png';
import './Activities.css';

class ActivityCards extends Component {
  render() {
    return (
      <div className = "cards">
        <div className="card">
          <img src={Techsoc} />
          <div className="card-block">
            <h4 className="card-title">UCL TechSoc</h4>
            <p className="card-text">Vice President 2017-2018</p>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
            <img src={Rightmove} />
            <h4 className="card-title">Rightmove</h4>
            <p className="card-text"><a href="https://github.com/officialmatt/reviseman"><i class="icon-github"></i></a></p>
            <p className="card-text">Software Development Intern 2017</p>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
            <img src={Microsoft} />
            <h4 className="card-title">Microsoft</h4>
            <p className="card-text"><a href="https://github.com/officialmatt/reviseman"><i class="icon-github"></i></a></p>
            <p className="card-text">Microsoft Student Partner 2016-2017</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityCards;
