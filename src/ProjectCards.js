import React, { Component } from 'react';
import Title from './Title';
import Icons from './Icons';

import Maple from './images/nhs.png';
import Telegram from './images/telegram.png';
import Pacman from './images/pacman.png';
import './Activities.css';

class ProjectCards extends Component {
  render() {
    return (
      <div className = "cards">
        <div className="card">
          <img src={Maple} />
          <div className="card-block">
            <h4 className="card-title">Maple</h4>
            <p className="card-text"><a href="https://github.com/officialmatt"><i className="fa fa-github fa-1x" aria-hidden="true"></i></a></p>
            <p className="card-text">Data dictionary creator and maintenance tool to organise data within the NHS</p>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
            <img src={Telegram} />
            <h4 className="card-title">TelegramFootie</h4>
            <p className="card-text"><a href="https://github.com/officialmatt"><i className="fa fa-github fa-1x" aria-hidden="true"></i></a></p>
            <p className="card-text"><a href="https://github.com/officialmatt/reviseman"><i class="icon-github"></i></a></p>
            <p className="card-text">Telegram chat bot used to give up to date football scores and information</p>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
            <img src={Pacman} />
            <h4 className="card-title">ReviseMan</h4>
            <p className="card-text"><a href="https://github.com/officialmatt"><i className="fa fa-github fa-1x" aria-hidden="true"></i></a></p>
            <p className="card-text"><a href="https://github.com/officialmatt/reviseman"><i class="icon-github"></i></a></p>
            <p className="card-text">PacMan game to help with computer science revision</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCards;
