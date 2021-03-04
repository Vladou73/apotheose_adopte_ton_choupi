// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Cards = ({ id, name, media }) => (
  <div className="card-animal">
    <p className="card-animal--name">{name}</p>
    <img
      className="card-animal--picture"
      src={media[0].url}
      alt="loulou"
    />
    <Link to={`/animaux/${id}`}>
      <span className="card-animal--span">Voir la fiche</span>
    </Link>
  </div>
);

Cards.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  media: PropTypes.array.isRequired,
};
// == Export
export default Cards;
