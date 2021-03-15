/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

// == Import
import './styles.scss';
import EditIcon from './edit.png';
import TrashIcon from './trash.png';

const ManagedAnimals = ({
  animals,
  tags,
  breeds,
  buttonDeleteAnimals,
  modalAddArticleIsOpen,
  changeModalStateAddArticle,
  addAnimalSubmit,
  addChangeNameAnimal,
  addChangeBirthdateAnimal,
  addChangeDescriptionAnimal,
  addChangeGenderAnimal,
  addChangeTagsAnimal,
  addChangeBreedsAnimal,
  handleChangeFirebase,
  handleUpload,
  url,
  confirmationAdd,
  confirmationDelete,
}) => (
  <div className="manageAnimals">
    <h2 className="manageAnimals__title">Liste des animaux à l'adoption :</h2>
    <p className={confirmationAdd}>Votre carte animal a été ajouté !</p>
    <p className={confirmationDelete}>La carte de animal a été supprimé !</p>
    <button type="button" className="manageAnimals__link__add" onClick={changeModalStateAddArticle}>Ajouter</button>

    <Modal isOpen={modalAddArticleIsOpen}>
      <button type="button" className="manageAnimals__closeModal" onClick={changeModalStateAddArticle}>X</button>
      <h3 className="manageArticles__titleModal">Ajouter un animal</h3>
      <div className="formAddAnimal">
        <form onSubmit={addAnimalSubmit}>
          <div>
            <label className="formAddAnimal__label__title" htmlFor="name">Nom de l'animal : </label>
            <input type="text" name="name" onChange={(e) => addChangeNameAnimal(e)} />
            <label className="formAddAnimal__label__title" htmlFor="birthdate">Date de naissance : </label>
            <input type="date" name="birthdate" onChange={(e) => addChangeBirthdateAnimal(e)} />
            <label className="formAddAnimal__label__content" htmlFor="description">Description: </label>
            <textarea type="text" rows="20" cols="100" name="description" onChange={(e) => addChangeDescriptionAnimal(e)} />
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
              <label htmlFor="tag" key={tag.id}>
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
              <label htmlFor="breed" key={breed.id}>
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
            <label className="formAddAnimal__label__content" htmlFor="media">Médias :</label>
            <input type="file" onChange={handleChangeFirebase} />
            <button type="button" className="formAddAnimal__upluad" onClick={handleUpload}>Aperçu de ma photo </button>
            <p>{url}</p>
            <img src={url} alt="" className="formAddAnimal__image" />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </Modal>

    <table className="manageAnimals__table">
      <tbody>
        <tr>
          <td className="manageAnimals__table__head">Nom</td>
          <td className="manageAnimals__table__head">Espèce</td>
          <td className="manageAnimals__table__head">Race</td>
          <td className="manageAnimals__table__head">Date de naissance</td>
          <td className="manageAnimals__table__head">Tags</td>
          <td className="manageAnimals__table__head">Options</td>
        </tr>
        {animals.map((animalObject) => (

          <tr key={animalObject.id}>
            <td>{animalObject.name}</td>
            <td> {animalObject.species_name} </td>
            <td>{animalObject.breeds.map((breed) => <tr>{breed.name}</tr>)}</td>
            <td>{animalObject.birthdate}</td>
            {
            animalObject.tags === null
              ? <td>En évaluation</td>
              : <td>{animalObject.tags.map((tag) => <tr>{tag.name}</tr>)}</td>
            }
            <td>
              <Link to={`/admin/gestion-animaux/${animalObject.id}`} className="manageAnimals__link">
                <img
                  src={EditIcon}
                  alt="editer"
                  className="manageArticles__editIcon"
                />
              </Link>

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
  addAnimalSubmit: PropTypes.func.isRequired,
  addChangeBirthdateAnimal: PropTypes.func.isRequired,
  addChangeDescriptionAnimal: PropTypes.func.isRequired,
  addChangeGenderAnimal: PropTypes.func.isRequired,
  addChangeTagsAnimal: PropTypes.func.isRequired,
  addChangeBreedsAnimal: PropTypes.func.isRequired,
  handleChangeFirebase: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  confirmationAdd: PropTypes.string.isRequired,
  confirmationDelete: PropTypes.string.isRequired,
};

export default ManagedAnimals;

//
