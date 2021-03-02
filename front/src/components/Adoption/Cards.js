// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import loulou from './pictures/loulou.jpg';

// == Composant
const Cards = () => (
  <div className="cards-animals">
    <h2 className="card-animal--title">Résultats</h2>
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
