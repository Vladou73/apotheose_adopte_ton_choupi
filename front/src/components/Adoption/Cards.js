// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Cards = ({ id, name, medias }) => (
  <Link to={`/animaux/${id}`}>
    <div className="card-animal">
      <p className="card-animal__name">{name}</p>
      <img
        className="card-animal__picture"
        src="xxx"
        alt={name}
      />
      <span className="card-animal__span">Voir la fiche</span>
    </div>
  </Link>
);

Cards.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
// == Export
export default Cards;
