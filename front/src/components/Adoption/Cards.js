// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import loulou from './pictures/loulou.jpg';

// == Composant
const Cards = () => (
  <div className="cards-animals">
    <h2 className="cards-animals--title">3 animaux à l'adoption</h2>
    <div className="card-animal">
      <p className="card-animal--name">Loulou</p>
      <img
        className="card-animal--picture"
        src={loulou}
        alt="loulou"
      />
    </div>
    <div className="card-animal">
      <p className="card-animal--name">Loulou</p>
      <img
        className="card-animal--picture"
        src={loulou}
        alt="loulou"
      />
    </div>
    <div className="card-animal">
      <p className="card-animal--name">Loulou</p>
      <img
        className="card-animal--picture"
        src={loulou}
        alt="loulou"
      />
    </div>
  </div>
);

// == Export
export default Cards;
