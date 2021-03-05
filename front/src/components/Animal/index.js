/* eslint-disable max-len */
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import './style.scss';
import PropTypes from 'prop-types';
import Error404 from '../Error404';

const Animal = ({ animal }) => {
  const { id } = useParams();
  console.log(id);
  console.log(animal[0].id);

  const data = animal.find((animalObject) => animalObject.id === parseInt(id, 10));
  console.log(data);

  if (!data) return <Error404 />;
  const {
    name, media, species, breed, gender, birthdate, content,
  } = data;

  return (
    <div className="animal">
      <h2 className="animal__name">{name}</h2>
      <img className="card-animal--picture" src={media[0].url} alt="loulou" />
      <div className="animal__category">
        <p className="animal__category-text">Espèce : {species}</p>
        <p className="animal__category-text">Race / Apparence : {breed[0].name}</p>
        <p className="animal__category-text">Sexe : {gender}</p>
        <p className="animal__category-text">Date de naissance : {birthdate}</p>

      </div>
      <div className="animal__content">
        <p>{content}</p>
      </div>
      <Link
        to="/info_adoption"
        className="animal__link animal__link-adoption"
      >En savoir plus sur l'adoption
      </Link>
      <p className="animal__span">Vous souhaitez en savoir plus sur Loulou ?{content}</p>
      <Link
        to="/contact"
        className="animal__link  animal__link-contact"
      >Contactez nous
      </Link>
    </div>
  );
};

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
