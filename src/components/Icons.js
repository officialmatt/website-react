import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import IconTemplate from './templates/IconTemplate';
import Pdf from '../CV.pdf';


const Icons = () => {
  return (
    <div className="Icons">
      <IconTemplate href="https://www.linkedin.com/in/matt-policane-5395289b?trk=nav_responsive_tab_profile_pic" icon="fa-linkedin fa-3x" titleText="LinkedIn"/>
      <IconTemplate href="https://github.com/officialmatt" icon="fa-github fa-3x" titleText="GitHub"/>
      <IconTemplate href="https://twitter.com/MPolicane" icon="fa-twitter fa-3x" titleText="Twitter"/>
      {/*<IconTemplate href="https://www.facebook.com/policane" icon="fa-facebook fa-3x" titleText="Facebook"/>*/}
      <IconTemplate href="https://www.instagram.com/mattpolicane/" icon="fa-instagram fa-3x" titleText="Instagram"/>
      <IconTemplate href={Pdf} icon="fa-file-text fa-3x" titleText="CV"/>
    </div>
  );
};

export default Icons;
