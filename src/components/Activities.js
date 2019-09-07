import React, { Component } from 'react';

import ActivityCards from './ActivityCards';

import './Activities.css';

class Activities extends Component {
  render() {
    return (
      <div className="cardsContainer">
      <h1> Projects </h1>
      <hr/>
      <ActivityCards />
    </div>
    );
  }
}

export default Activities;
