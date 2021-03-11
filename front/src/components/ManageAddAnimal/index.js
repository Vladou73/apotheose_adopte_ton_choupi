import React from 'react';
import PropTypes from 'prop-types';

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
      <input type="number" name="id_creator" value={addCreatorAnimal} onChange={addChangeCreatorAnimal} />
      <p>Genre :</p>
      <input type="number" name="gender" value={addGenderAnimal} onChange={addChangeGenderAnimal} />
      <p>Tags :</p>
      <input type="number" name="tags" value={addTagsAnimal} onChange={addChangeTagsAnimal} />
      <p>Race :</p>
      <input type="number" name="breeds" value={addBreedsAnimal} onChange={addChangeBreedsAnimal} />
      <p>Médias :</p>
      <button type="submit">Envoyer</button>
    </form>
  </div>
);

ManageAddAnimal.propTypes = {
  addNameAnimal: PropTypes.func.isRequired,
  addChangeNameAnimal: PropTypes.func.isRequired,
  addAnimalSubmit: PropTypes.func.isRequired,
  addBirthdateAnimal: PropTypes.func.isRequired,
  addChangeBirthdateAnimal: PropTypes.func.isRequired,
  addDescriptionAnimal: PropTypes.func.isRequired,
  addChangeDescriptionAnimal: PropTypes.func.isRequired,
  addCreatorAnimal: PropTypes.func.isRequired,
  addChangeCreatorAnimal: PropTypes.func.isRequired,
  addGenderAnimal: PropTypes.func.isRequired,
  addChangeGenderAnimal: PropTypes.func.isRequired,
  addTagsAnimal: PropTypes.func.isRequired,
  addChangeTagsAnimal: PropTypes.func.isRequired,
  addBreedsAnimal: PropTypes.func.isRequired,
  addChangeBreedsAnimal: PropTypes.func.isRequired,
};

export default ManageAddAnimal;
