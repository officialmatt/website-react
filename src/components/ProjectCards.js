import React, { Component } from 'react';
import CardsTemplate from './templates/CardsTemplate';
import IconTemplate from './templates/IconTemplate';

import Maple from '../images/nhs.png';
import Telegram from '../images/telegram.png';
import Pacman from '../images/pacman.png';
import './Activities.css';

class ProjectCards extends Component {
  render() {
    return (
      <div className = "cards">
        <CardsTemplate image={Maple} title="Maple" optionalText={<IconTemplate href="https://github.com/officialmatt/reviseman" icon="fa-github" />} description="Data dictionary creator and maintenance tool to organise data within the NHS" />
        <CardsTemplate image={Telegram} title="TelegramFootie" optionalText={<IconTemplate href="https://github.com/officialmatt/reviseman" icon="fa-github" />} description="Telegram chat bot used to give up to date football scores and information" />
        <CardsTemplate image={Pacman} title="ReviseMan" optionalText={<IconTemplate href="https://github.com/officialmatt/reviseman" icon="fa-github" />} description="PacMan game to help with computer science revision" />
      </div>
    );
  }
}

export default ProjectCards;
