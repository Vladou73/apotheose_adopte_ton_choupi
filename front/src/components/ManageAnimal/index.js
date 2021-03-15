/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Error404 from '../Error404';
import './style.scss';

const ManageAnimal = ({
  animal,
  allTags,
  allBreeds,
  handleSubmitEditAnimal,
  handleChangeFirebase,
  handleUpload,
  url,
  confirmation,
  handleUploadDelete,

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

  const [animalData, setAnimalData] = useState({
    name,
    species_name,
    breeds,
    birthdate,
    description,
    tags,
    gender_name,
    medias,
  });

  // Method onChange to edit an animal
  const handleChangeEditAnimal = (e) => {
    const newData = { ...animalData };
    newData[e.target.id] = e.target.value;
    setAnimalData(newData);
    console.log(newData);
  };

  return (

    <div className="manage__animal">
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmitEditAnimal(id, animalData);
      }}
      >
        <p className={confirmation}>Votre article a été modifié !</p>
        <div className="manage__animal__name">
          <input className="manage__animal__input" type="text" id="name" name="name" value={animalData.name} onChange={(e) => handleChangeEditAnimal(e)} />
          <p> Espèce : {animalData.species_name}</p>
          <p>{animalData.gender_name === 'F=female' ? ' Femelle' : ' Mâle'}, née le {animalData.birthdate} </p>
        </div>
        <img src={medias[0].url} alt={name} className="manage__animal__picture" />
        <div>
          <label htmlFor="media" className=""> Modifier la photo :</label>
          <input type="file" onChange={handleChangeFirebase} />
          <button type="button" onClick={handleUpload} className="manage__animal__upluad">Aperçu de ma photo </button>
          <button type="button" className="formAddAnimal__upluadDelete" onClick={handleUploadDelete}>Supprimer ma photo </button>
          <p>{url}</p>
          <img src={url} alt="" className="" />
        </div>
        <div className="manage__animal__contain">
          <div className="manage__animal__category">
            {
            tags === null
              ? (
                <>
                  <p>Ajouter un tag</p>
                  {
            allTags.map((tag) => (
              <label htmlFor="tag">
                {tag.name}
                <input
                  type="checkbox"
                  name="tag"
                  value={tag.id}
                  onChange={(e) => handleChangeEditAnimal(e)}
                />
              </label>
            ))
          }
                </>
              )
              : (
                <>
                  <p>Ajouter un tag</p>
                  {
            allTags.map((tag) => (
              <label htmlFor="tag">
                {tag.name}
                <input
                  type="checkbox"
                  name="tag"
                  value={tag.id}
                  onChange={(e) => handleChangeEditAnimal(e)}
                />
              </label>
            ))
          }
                </>
              )
        }
          </div>
          <div className="animal__category__text">
            {allBreeds.map((breed) => (
              <label htmlFor="breed">{breed.name}
                <input
                  key={breed.id}
                  className="animal__category__breed"
                  type="checkbox"
                  value={breed.id}
                  onChange={(e) => handleChangeEditAnimal(e)}
                />
              </label>
            ))}
          </div>
          <div className="animal__content">
            <label className="animal__content__label" htmlFor="content">Contenu : </label>
            <textarea id="description" name="description" rows="20" cols="100" className="animal__content__textarea" value={animalData.description} onChange={(e) => handleChangeEditAnimal(e)} />
          </div>
        </div>
        <button className="animal__submit" type="submit">Sauvegarder</button>
      </form>
    </div>
  );
};

ManageAnimal.propTypes = {
  animal: PropTypes.array.isRequired,
  allTags: PropTypes.array.isRequired,
  allBreeds: PropTypes.array.isRequired,
  handleSubmitEditAnimal: PropTypes.func.isRequired,
  handleChangeFirebase: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  confirmation: PropTypes.string.isRequired,
};

export default ManageAnimal;
