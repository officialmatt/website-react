import React, { Component } from 'react';

import ProjectCards from './ProjectCards';

import './Activities.css';

class Projects extends Component {
  render() {
    return (
      <div className="cardsContainerProjects">
      <h1> Things I have made </h1>
      <hr />
      <ProjectCards />
    </div>
    );
  }
}

export default Projects;
