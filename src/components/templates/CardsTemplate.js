import React from 'react';

export const CardsTemplate = ({image, title, optionalText, description}) => {
  return (
    <div className="card">
      <img src={image} />
      <div className="card-block">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{optionalText}</p>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default CardsTemplate;
