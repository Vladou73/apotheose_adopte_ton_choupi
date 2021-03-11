import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Error404 from '../Error404';

const ManageAnimal = ({ animal }) => {
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
        <div className="article__title">
          <input type="text" id="title" name="Titre" value={name}/>
          <button>ok</button>
        </div>

        <img src={medias[0].url}/>

        <div className="animal__contain">
        <div className="animal__category">
        {
            tags === null
              ? 
              <>
              <p>Ajouter un tag</p>
              <input type="text" name="tag"/>
              </>
              : tags.map((tag) => <input key={tag.id} className="animal__category-tags" value={tag.name} />)
        }
            <button>ok</button>
            </div>

        <div className="animal__category-text">
          <input type="text" id="espèce" name="Espèce :" value={species_name}/>
          <button>ok</button>

          {breeds.map((breed) => 
          <input type="text" id={breed.id} key={breed.id} className="animal__category-span" name="Race / Apparence : " value={name}/>
          )} 
          <button>ok</button>


          <input type="text" id="genre" name="Sexe :" value={gender_name === 'female' ? ' femelle' : ' mâle'}/>
          <button>ok</button>

          <input type="text" id="birthdate" name="Date de naissance :" value={birthdate}/>
          <button>ok</button>
        </div>

        <div className="animal__content">
          <input type="text" id="description" name="Description" value={description}/>
          <button>ok</button>
        </div>
        </div>
      </div>
  );
};

ManageAnimal.propTypes = {
  animal: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species_name: PropTypes.string.isRequired,
      birthdate: PropTypes.string.isRequired,
      gender_name: PropTypes.string.isRequired,
      breeds: PropTypes.array.isRequired,
      tags: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ManageAnimal;
