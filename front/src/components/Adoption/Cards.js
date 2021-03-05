// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Cards = ({ id, name, medias }) => (
  <div className="card-animal">
    <p className="card-animal__name">{name}</p>
    <img
      className="card-animal--picture"
      src="xxx"
      alt="loulou"
    />
    <Link to={`/animaux/${id}`}>
      <span className="card-animal__span">Voir la fiche</span>
    </Link>
  </div>
);

Cards.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
// == Export
export default Cards;
