import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {IconTemplate} from './IconTemplate';


const Icons = () => {
  return (
    <div className="Icons">
    <IconTemplate href="https://twitter.com/justcalledmatt" icon="fa-twitter" />
    <IconTemplate href="https://www.facebook.com/matt.policane" icon="fa-facebook" />
    <IconTemplate href="https://www.instagram.com/mattpolicane/" icon="fa-instagram" />
    <IconTemplate href="https://www.linkedin.com/in/matt-policane-5395289b?trk=nav_responsive_tab_profile_pic" icon="fa-linkedin" />
    <IconTemplate href="https://github.com/officialmatt" icon="fa-github" />
    </div>
  );
};

export default Icons;
