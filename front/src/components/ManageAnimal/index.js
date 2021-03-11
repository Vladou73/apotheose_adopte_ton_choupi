import React from 'react';
import PropTypes from 'prop-types';

const ManageAnimal = ({ animals }) => {
    console.log(animals);

    return (

      <div className="animal">
        <div className="article__title">
          <input type="text" id="title" name="Titre" value={animals.name}/>
          <button>ok</button>
        </div>

        <img src={animals.medias[0].url}/>

        <div className="animal__contain">
        <div className="animal__category">
        {
            tags === null
              ? <input type="text" id={tag.id} name="Nouveau pensionnaires, nous évaluons son comportement pour le moment." value={animals.tag.name}/>
              : tags.map((tag) => <p key={tag.id} className="animal__category-tags"> {tag.name} </p>)
        }
            <button>ok</button>
            </div>

        <div className="animal__category-text">
          <input type="text" id="espèce" name="Espèce :" value={animals.species_name}/>
          <button>ok</button>

          <input type="text" id={breed.id} className="animal__category-span" name="Race / Apparence : " value={animals.breed.name}/>
          <button>ok</button>

          <input type="text" id="genre" name="Sexe :" value={gender_name === 'female' ? ' femelle' : ' mâle'}/>
          <button>ok</button>

          <input type="text" id="birthdate" name="Date de naissance :" value={animals.birthdate}/>
          <button>ok</button>
        </div>

        <div className="animal__content">
          <input type="text" id="description" name="Description" value={animals.description}/>
          <button>ok</button>
        </div>
        </div>
      </div>
  );
};

ManageAnimal.propTypes = {
  animals: PropTypes.arrayOf(
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
