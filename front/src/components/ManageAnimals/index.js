import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

// == Import
import './styles.scss';
import TrashIcon from './trash.png';

const ManagedAnimals = ({
  animals,
  buttonDeleteAnimals,
  // modal
  modalAddArticleIsOpen,
  changeModalStateAddArticle,
  // props for add new animal
  addNameAnimal,
  addChangeNameAnimal,
  addAnimalSubmit,
  addBirthdateAnimal,
  addChangeBirthdateAnimal,
  addDescriptionAnimal,
  addChangeDescriptionAnimal,
  addGenderAnimal,
  addChangeGenderAnimal,
  addTagsAnimal,
  addChangeTagsAnimal,
  addBreedsAnimal,
  addChangeBreedsAnimal,
}) => (
  <div className="manageArticles">
    <h2 className="manageArticles__title">Liste des animaux à l'adoption :</h2>
    <button type="button" className="manageArticles__link__add" onClick={changeModalStateAddArticle}>Ajouter</button>

    <Modal isOpen={modalAddArticleIsOpen}>
      <button type="button" className="manageArticles__closeModal" onClick={changeModalStateAddArticle}>Fermer</button>
      <h3>Ajouter un animal</h3>
      <div className="formAddArticle">
        <form onSubmit={addAnimalSubmit}>
          <p>Nom de l'animal :</p>
          <input type="text" name="" value={addNameAnimal} onChange={addChangeNameAnimal} />
          <p>Date de naissance : </p>
          <input type="date" name="birthdate" value={addBirthdateAnimal} onChange={addChangeBirthdateAnimal} />
          <p>Description :</p>
          <textarea type="text" ows="20" cols="100" name="description" value={addDescriptionAnimal} onChange={addChangeDescriptionAnimal} />
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
    </Modal>

    <table className="manageAnimals__table">
      <thead>
        <tr>
          <td className="manageArticles__table__head">Nom</td>
          <td className="manageArticles__table__head">Espèce</td>
          <td className="manageArticles__table__head">Race</td>
          <td className="manageArticles__table__head">Date de naissance</td>
          <td className="manageArticles__table__head">Tags</td>
          <td />
        </tr>
      </thead>
      <tbody>
        {animals.map((animalObject) => (

          <tr key={animalObject.id}>

            <td>
              <Link to={`/admin/gestion-animaux/${animalObject.id}`} className="manageAnimals__link__redirect">
                {animalObject.name}
              </Link>
            </td>
            <td> {animalObject.species_name} </td>
            <td>{animalObject.breeds.map((breed) => <tr key={breed.id}>{breed.name}</tr>)}</td>
            <td>{animalObject.birthdate}</td>
            {
            animalObject.tags === null
              ? <td>En évaluation</td>
              : <td>{animalObject.tags.map((tags) => <tr key={tags.id}>{tags.name}</tr>)}</td>
            }
            <td>

              <img
                src={TrashIcon}
                alt="supprimer"
                className="manageArticles__trashIcon"
                value={animalObject.id}
                onClick={(event) => {
                  event.preventDefault();
                  buttonDeleteAnimals(animalObject);
                }}
              />
              Supprimer
            </td>
          </tr>

        ))}
      </tbody>
    </table>
  </div>

);

ManagedAnimals.propTypes = {
  animals: PropTypes.array.isRequired,
  buttonDeleteAnimals: PropTypes.func.isRequired,
  modalAddArticleIsOpen: PropTypes.bool.isRequired,
  changeModalStateAddArticle: PropTypes.func.isRequired,
  addNameAnimal: PropTypes.string.isRequired,
  addChangeNameAnimal: PropTypes.func.isRequired,
  addAnimalSubmit: PropTypes.string.isRequired,
  addBirthdateAnimal: PropTypes.string.isRequired,
  addChangeBirthdateAnimal: PropTypes.func.isRequired,
  addDescriptionAnimal: PropTypes.string.isRequired,
  addChangeDescriptionAnimal: PropTypes.func.isRequired,
  addGenderAnimal: PropTypes.number.isRequired,
  addChangeGenderAnimal: PropTypes.func.isRequired,
  addTagsAnimal: PropTypes.array.isRequired,
  addChangeTagsAnimal: PropTypes.func.isRequired,
  addBreedsAnimal: PropTypes.array.isRequired,
  addChangeBreedsAnimal: PropTypes.func.isRequired,
};

export default ManagedAnimals;

//
