/* eslint-disable camelcase */
import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Error404 from '../Error404';

const ManageAnimal = ({ 
  animal, 
  changeNameAnimal, 
  changeSpeciesAnimal, 
  changeBreedsAnimal, 
  changeBirthdateAnimal, 
  changeDescriptionAnimal, 
  changeTagAnimal, 
  changeGenderAnimal
}) => {
  console.log(animal);

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
    <form onSubmit={animalSubmit}>
      <div className="article__title">
        <input type="text" id="title" name="Titre" value={name} onChange={changeNameAnimal}/>
        <button type="button">edit</button>
      </div>
      <img src={medias[0].url} alt={name} />
      <div className="animal__contain">
        <div className="animal__category">
          {
            tags === null
              ? (
                <>
                  <p>Ajouter un tag</p>
                  <input type="text" name="tag" />
                </>
              )
              : tags.map((tag) => <input key={tag.id} className="animal__category-tags" value={tag.name} onChange={changeTagAnimal}/>)
        }
          <button type="button">edit</button>
        </div>
        <div className="animal__category-text">
          <input type="text" id="espèce" name="Espèce :" value={species_name} onChange={changeSpeciesAnimal}/>
          <button type="button">edit</button>
          {breeds.map((breed) => <input type="text" id={breed.id} key={breed.id} className="animal__category-span" name="Race / Apparence : " value={name} onChange={changeBreedsAnimal}/>)}
          <button type="button">edit</button>
          <input type="text" id="genre" name="Sexe :" value={gender_name === 'female' ? ' femelle' : ' mâle'} onChange={changeGenderAnimal}/>
          <button type="button">edit</button>
          <input type="text" id="birthdate" name="Date de naissance :" value={birthdate} onChange={changeBirthdateAnimal}/>
          <button type="button">edit</button>
        </div>
        <div className="animal__content">
          <input type="text" id="description" name="Description" value={description} onChange={changeDescriptionAnimal}/>
          <button type="button">edit</button>
        </div>
      </div>
      </form>
    </div>
  );
};

ManageAnimal.propTypes = {
  animal: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      changeNameAnimal: PropTypes.string.isRequired,
      species_name: PropTypes.string.isRequired,
      changeSpeciesAnimal: PropTypes.string.isRequired,
      birthdate: PropTypes.string.isRequired,
      changeBirthdateAnimal: PropTypes.string.isRequired,
      gender_name: PropTypes.string.isRequired,
      changeGenderAnimal: PropTypes.string.isRequired,
      breeds: PropTypes.array.isRequired,
      changeBreedsAnimal: PropTypes.array.isRequired,
      tags: PropTypes.array.isRequired,
      changeTagAnimal: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
      changeDescriptionAnimal: PropTypes.string.isRequired,
      animalSubmit: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ManageAnimal;
