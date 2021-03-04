/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import PropTypes from 'prop-types';

const Animal = ({ animal }) => (
  <div className="animal">
    <h2 className="animal__name">{animal.name}</h2>
    <img src={animal.media[0].url} alt="loulou" />
    <div className="animal__category">
      <p className="animal__category-text">Espèce : {animal.species}</p>
      <p className="animal__category-text">Race / Apparence : {animal.breed[0].name}</p>
      <p className="animal__category-text">Sexe : {animal.gender}</p>
      <p className="animal__category-text">Date de naissance : {animal.birthdate}</p>

    </div>
    <div className="animal__content">
      <p>{animal.content}</p>
    </div>
    <Link
      to="/info_adoption"
      className="animal__link animal__link-adoption"
    >En savoir plus sur l'adoption
    </Link>
    <p className="animal__span">Vous souhaitez en savoir plus sur Loulou ?{animal.content}</p>
    <Link
      to="/contact"
      className="animal__link  animal__link-contact"
    >Contactez nous
    </Link>
  </div>
);

Animal.propTypes = {
  animal: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      birthdate: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      breed: PropTypes.string.isRequired,
      tag: PropTypes.array.isRequired,
      media: PropTypes.array.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Animal;
