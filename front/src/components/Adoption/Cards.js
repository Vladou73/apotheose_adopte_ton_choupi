/* eslint-disable camelcase */
// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Cards = ({
  id, name, birthdate, gender_name, medias,
}) => (
  <Link to={`/animaux/${id}`}>
    <div className="card-animal">
      <h2 className="card-animal__name">{name}</h2>
      <img
        className="card-animal__picture"
        src={medias[0].url}
        alt={name}
      />
      <p className="card-animal__span">Née le {birthdate}</p>
      <p className="card-animal__span">
        {
        gender_name === 'female' ? 'Femelle' : 'Mâle'
        }
      </p>
      <span className="card-animal__animal">Voir la fiche</span>
    </div>
  </Link>
);

Cards.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  gender_name: PropTypes.string.isRequired,
  medias: PropTypes.array.isRequired,
};
// == Export
export default Cards;
