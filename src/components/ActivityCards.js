import React, { Component } from 'react';
import CardsTemplate from './templates/CardsTemplate';

import Techsoc from '../images/techsoc.jpg';
import Rightmove from '../images/rightmove.jpg';
import Microsoft from '../images/microsoft.png';
import './Activities.css';

class ActivityCards extends Component {
  render() {
    return (
      <div className = "cards">
        <CardsTemplate image={Techsoc} title="UCL TechSoc" icon="fa-github" description="Vice President 2017-2018" />
        <CardsTemplate image={Rightmove} title="Rightmove" icon="fa-github" description="Software Development Intern 2017" />
        <CardsTemplate image={Microsoft} title="Microsoft" icon="fa-github" description="Microsoft Student Partner 2016-2017" />
      </div>
    );
  }
}

export default ActivityCards;
