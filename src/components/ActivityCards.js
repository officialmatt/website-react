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
        <CardsTemplate image={Techsoc} title="A Natural Language Understanding System For Extracting And Understanding Textual Information From The Web" icon="fa-github" description="https://drive.google.com/open?id=1RmbHASRKVxmqBFmg2ia8twMjclSBcOE4" />
        <CardsTemplate image={Rightmove} title="A Neural Network Approach to Automated Fact Checking" icon="fa-github" description="Software Development Intern 2017" />
      </div>
    );
  }
}

export default ActivityCards;
