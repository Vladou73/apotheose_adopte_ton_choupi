/* eslint-disable max-len */
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import './style.scss';
import PropTypes from 'prop-types';
import Error404 from '../Error404';

const Animal = ({ animal }) => {
  const { id } = useParams();

  const data = animal.find((animalObject) => animalObject.id === parseInt(id, 10));

  if (!data) return <Error404 />;
  const {
    name, species_name, media, breeds, gender, birthdate, description,
  } = data;

  return (
    <div className="animal">
      <h2 className="animal__name">{name}</h2>
      <img src="" alt="loulou" />
      <div className="animal__category">
        <p className="animal__category-text">Espèce : {species_name}</p>
        <p className="animal__category-text">Race / Apparence : {breeds[0].name}</p>
        <p className="animal__category-text">Sexe : ""</p>
        <p className="animal__category-text">Date de naissance : {birthdate}</p>

      </div>
      <div className="animal__content">
        <p>{description}</p>
      </div>
      <Link
        to="/info_adoption"
        className="animal__link animal__link-adoption"
      >En savoir plus sur l'adoption
      </Link>
      <p className="animal__span">Vous souhaitez en savoir plus sur {name} ?</p>
      <Link
        to="/contact"
        className="animal__link  animal__link-contact"
      >Contactez-nous !
      </Link>
    </div>
  );
};

Animal.propTypes = {
  animal: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species_name: PropTypes.string.isRequired,
      birthdate: PropTypes.string.isRequired,
      // gender: PropTypes.string.isRequired,
      breeds: PropTypes.array.isRequired,
      // tag: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Animal;
