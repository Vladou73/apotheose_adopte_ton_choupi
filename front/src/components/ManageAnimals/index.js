import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

// == Import
import './styles.scss';
import TrashIcon from './trash.png';

const ManagedAnimals = ({
  animals,
  tags,
  breeds,
  buttonDeleteAnimals,
  // modal
  modalAddArticleIsOpen,
  changeModalStateAddArticle,
  // props for add new animal
  addAnimalSubmit,
  addChangeNameAnimal,
  addChangeBirthdateAnimal,
  addChangeDescriptionAnimal,
  addChangeGenderAnimal,
  addChangeTagsAnimal,
  addChangeBreedsAnimal,
}) => (
  <div className="manageAnimals">
    <h2 className="manageAnimals__title">Liste des animaux à l'adoption :</h2>
    <button type="button" className="manageAnimals__link__add" onClick={changeModalStateAddArticle}>Ajouter</button>

    <Modal isOpen={modalAddArticleIsOpen}>
      <button type="button" className="manageAnimals__closeModal" onClick={changeModalStateAddArticle}>Fermer</button>
      <h3>Ajouter un animal</h3>
      <div className="formAddAnimal">
        <form onSubmit={addAnimalSubmit}>
          <div>
            <p>Nom de l'animal :</p>
            <input type="text" name="name" onChange={(e) => addChangeNameAnimal(e)} />
            <p>Date de naissance : </p>
            <input type="date" name="birthdate" onChange={(e) => addChangeBirthdateAnimal(e)} />
            <p>Description :</p>
            <textarea type="text" ows="20" cols="100" name="description" onChange={(e) => addChangeDescriptionAnimal(e)} />
          </div>
          <div className="formAddAnimal__block">
            <p>Genre :</p>
            <label htmlFor="gender_male">
              Mâle
              <input
                type="checkbox"
                name="gender"
                value={1}
                onChange={(e) => addChangeGenderAnimal(e)}
              />
            </label>
            <label htmlFor="gender_female">
              Femelle
              <input
                type="checkbox"
                name="gender"
                value={2}
                onChange={(e) => addChangeGenderAnimal(e)}
              />
            </label>
          </div>
          <div className="formAddAnimal__block">
            <p>Tags :</p>
            {
            tags.map((tag) => (
              <label htmlFor="tag">
                {tag.name}
                <input
                  type="checkbox"
                  name="tag"
                  value={tag.id}
                  onChange={(e) => addChangeTagsAnimal(e)}
                />
              </label>
            ))
          }
          </div>
          <div className="formAddAnimal__block">
            <p>Race :</p>
            {
            breeds.map((breed) => (
              <label htmlFor="breed">
                {breed.name}
                <input
                  type="checkbox"
                  name="breed"
                  value={breed.id}
                  onChange={(e) => addChangeBreedsAnimal(e)}
                />
              </label>
            ))
          }
          </div>
          <div>
            <p>Médias :</p>
            <input type="file" />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </Modal>

    <table className="manageAnimals__table">
      <thead>
        <tr>
          <td className="manageAnimals__table__head">Nom</td>
          <td className="manageAnimals__table__head">Espèce</td>
          <td className="manageAnimals__table__head">Race</td>
          <td className="manageAnimals__table__head">Date de naissance</td>
          <td className="manageAnimals__table__head">Tags</td>
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
              : <td>{animalObject.tags.map((tag) => <tr key={tag.id}>{tag.name}</tr>)}</td>
            }
            <td>

              <img
                src={TrashIcon}
                alt="supprimer"
                className="manageAnimals__trashIcon"
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
  tags: PropTypes.array.isRequired,
  breeds: PropTypes.array.isRequired,
  buttonDeleteAnimals: PropTypes.func.isRequired,
  modalAddArticleIsOpen: PropTypes.bool.isRequired,
  changeModalStateAddArticle: PropTypes.func.isRequired,
  addChangeNameAnimal: PropTypes.func.isRequired,
  addAnimalSubmit: PropTypes.string.isRequired,
  addChangeBirthdateAnimal: PropTypes.func.isRequired,
  addChangeDescriptionAnimal: PropTypes.func.isRequired,
  addChangeGenderAnimal: PropTypes.func.isRequired,
  addChangeTagsAnimal: PropTypes.func.isRequired,
  addChangeBreedsAnimal: PropTypes.func.isRequired,
};

export default ManagedAnimals;

//
