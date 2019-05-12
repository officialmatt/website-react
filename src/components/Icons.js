import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import IconTemplate from './templates/IconTemplate';


const Icons = () => {
  return (
    <div className="Icons">
      <IconTemplate href="https://twitter.com/MPolicane" icon="fa-twitter fa-3x" />
      <IconTemplate href="https://www.facebook.com/policane" icon="fa-facebook fa-3x" />
      <IconTemplate href="https://www.instagram.com/mattpolicane/" icon="fa-instagram fa-3x" />
      <IconTemplate href="https://www.linkedin.com/in/matt-policane-5395289b?trk=nav_responsive_tab_profile_pic" icon="fa-linkedin fa-3x" />
      <IconTemplate href="https://github.com/officialmatt" icon="fa-github fa-3x" />
    </div>
  );
};

export default Icons;
