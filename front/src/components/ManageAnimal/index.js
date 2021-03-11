import React from 'react';
import PropTypes from 'prop-types';

const ManageAnimal = ({ animal }) => {
    console.log(animal);

    return (

      <div className="animal">
        <div className="article__title">
          <input type="text" id="title" name="Titre" value={animal.name}/>
          <button>ok</button>
        </div>

        <img src={animal.medias[0].url}/>

        <div className="animal__contain">
        <div className="animal__category">
        {
            animal.tags === null
              ? <input type="text" id={animal.tag.id} name="Nouveau pensionnaires, nous évaluons son comportement pour le moment." value={animal.tag.name}/>
              : animal.tags.map((tag) => <p key={tag.id} className="animal__category-tags"> {tag.name} </p>)
        }
            <button>ok</button>
            </div>

        <div className="animal__category-text">
          <input type="text" id="espèce" name="Espèce :" value={animal.species_name}/>
          <button>ok</button>

          {animal.breeds.map((breed) => 
          <input type="text" id={breed.id} key={breed.id} className="animal__category-span" name="Race / Apparence : " value={breed.name}/>
          )} 
          <button>ok</button>


          <input type="text" id="genre" name="Sexe :" value={animal.gender_name === 'female' ? ' femelle' : ' mâle'}/>
          <button>ok</button>

          <input type="text" id="birthdate" name="Date de naissance :" value={animal.birthdate}/>
          <button>ok</button>
        </div>

        <div className="animal__content">
          <input type="text" id="description" name="Description" value={animal.description}/>
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
