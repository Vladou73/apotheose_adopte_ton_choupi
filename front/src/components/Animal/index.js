/* eslint-disable camelcase */
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
    name,
    species_name,
    breeds,
    birthdate,
    description,
    tags,
    gender_name,
    medias,
  } = data;

  return (
    <div className="animal">
      <h2 className="animal__name">{name}</h2>
      <img
        className="animal__picture"
        src={medias[0].url}
        alt={name}
      />
      <div className="animal__contain">
        {/* DESCRIPTION OF CARACTERISTICS ANIMALS */}
        <div className="animal__category">
          {/* !! PROBLEM SPACE BETWEEN VALUES && ALL ANIMALS REQUIERE MIN ONE TAG!! */}
          {
            tags === null
              ? <p>Nouveau pensionnaires, nous évaluons son comportement pour le moment.</p>
              : tags.map((tag) => <p key={tag.id} className="animal__category-tags"> {tag.name} </p>)
            }
          <p className="animal__category-text">Espèce : {species_name}</p>
          {/* !! PROBLEM SPACE BETWEEN VALUES !! */}
          <p className="animal__category-text">Race / Apparence : {
            breeds.map((breed) => <span className="animal__category-span" key={breed.id}>{breed.name}</span>)
}
          </p>
          <p className="animal__category-text">Sexe :{gender_name === 'female' ? ' femelle' : ' mâle'}</p>
          <p className="animal__category-text">Date de naissance : {birthdate}</p>
        </div>
        {/* DESCRIPTION PARAGRAPH ANIMALS */}
        <div className="animal__content">
          <p>{description}</p>
        </div>
      </div>
      {/* REDIRECTION */}
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
      gender_name: PropTypes.string.isRequired,
      breeds: PropTypes.array.isRequired,
      // tags: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Animal;
