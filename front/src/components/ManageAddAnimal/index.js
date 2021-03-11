import React from 'react';
// import PropTypes from 'prop-types';

const ManageAddAnimal = ({ 
    addNameAnimal,
     addChangeNameAnimal,
     addAnimalSubmit,
     addBirthdateAnimal,
     addChangeBirthdateAnimal,
    addDescriptionAnimal,
    addChangeDescriptionAnimal,
    addCreatorAnimal,
    addChangeCreatorAnimal,
     addGenderAnimal,
     addChangeGenderAnimal,
     addTagsAnimal,
     addChangeTagsAnimal,
     addBreedsAnimal,
     addChangeBreedsAnimal,
    }) => (
  <div> 
  <form onSubmit={addAnimalSubmit}>
      <p>Nom de l'animal :</p>
      <input type="text" name="" value={addNameAnimal} onChange={addChangeNameAnimal} />

      <p>Date de naissance : </p>
      <input type="text" name="birthdate" value={addBirthdateAnimal} onChange={addChangeBirthdateAnimal} />
      <p>Description :</p>
      <input type="text" name="description" value={addDescriptionAnimal} onChange={addChangeDescriptionAnimal} />
      <p>Id du la personne :</p>
      <input type="text" name="id_creator" value={addCreatorAnimal} onChange={addChangeCreatorAnimal} />
      <p>Genre :</p>
      <input type="text" name="gender" value={addGenderAnimal} onChange={addChangeGenderAnimal} />
      <p>Tags :</p>
      <input type="text" name="tags" value={addTagsAnimal} onChange={addChangeTagsAnimal} />
      <p>Race :</p>
      <input type="text" name="breeds" value={addBreedsAnimal} onChange={addChangeBreedsAnimal} />
      <p>Médias :</p>
      <button type="submit">Envoyer</button>
  </form>
</div>
);

// ManageAddAnimal.propTypes = {};

export default ManageAddAnimal;

// {
//     "name":"sherpa",
//     "birthdate":"01-01-1992",
//     "description":"un ptit choupi d'amour",
//     "creator_id":1,
//     "gender_id":2,
//     "tags":[{"id":1},{"id":2}],
//     "breeds":[{"id":1},{"id":2}],
//     "medias":[{"id":1},{"id":2}]
// }
