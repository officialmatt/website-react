import React from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

export const IconTemplate = ({href, icon}) => {
  return (
    <a href={href}>
      <i className={'fa ' + icon} aria-hidden="true"></i>
    </a>
  );
};

export default IconTemplate;
