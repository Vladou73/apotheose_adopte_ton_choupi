/* eslint-disable camelcase */
import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Error404 from '../Error404';

const ManageAnimal = ({ 
  animal, 
  handleChangeEditAnimal,
  handleSubmitEditAnimal,
}) => {

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
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmitEditAnimal(id)}}>
      <div className="animal__name">
        <input type="text" id="name" name="name" placeholder={name} onChange={(e) => handleChangeEditAnimal(e)}/>
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
              : tags.map((tag) => <input key={tag.id} className="animal__category-tags" placeholder={tag.name} onChange={(e) => handleChangeEditAnimal(e)}/>)
        }
        </div>
        <div className="animal__category-text">
          <input type="text" id="espèce" name="Espèce :" placeholder={species_name} onChange={(e) => handleChangeEditAnimal(e)}/>
          {breeds.map((breed) => <input type="text" id={breed.id} key={breed.id} className="animal__category-span" name="Race / Apparence : " placeholder={breed.name} onChange={(e) => handleChangeEditAnimal(e)}/>)}
          <input type="text" id="genre" name="Sexe :" placeholder={gender_name === 'female' ? ' femelle' : ' mâle'} onChange={(e) => handleChangeEditAnimal(e)}/>
          <input type="text" id="birthdate" name="birthdate" placeholder={birthdate} onChange={(e) => handleChangeEditAnimal(e)}/>
        </div>
        <div className="animal__content">
          <input type="text" id="description" name="description" placeholder={description} onChange={(e) => handleChangeEditAnimal(e)}/>
        </div>
      </div>
      <button type="submit">Sauvegarder</button>
      </form>
    </div>
  );
};

ManageAnimal.propTypes = {
  animal: PropTypes.arrayOf(
    PropTypes.shape({
      /*
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
      animalSubmit: PropTypes.string.isRequired, */
    }),
  ).isRequired,
};

export default ManageAnimal;
