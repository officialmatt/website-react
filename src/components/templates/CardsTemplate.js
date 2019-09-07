import React from 'react';

export const CardsTemplate = ({image, title, optionalText, description}) => {
  return (
    <div className="card">
      <div className="card-block">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{optionalText}</p>
        <p className="card-text"><a href={description}>Report</a></p>
      </div>
    </div>
  );
};

export default CardsTemplate;
