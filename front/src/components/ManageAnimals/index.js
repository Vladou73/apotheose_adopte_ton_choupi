import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

const ManagedAnimals = ({
  animals,
  buttonAddAnimals,
  buttonDeleteAnimals,
  checkAdminAnimalsList,
}) => (
  <div className="manageArticles">

    <Link to="/admin/gestion-animaux/1" className="manageAnimals__link"> animal 1 </Link>
    <button onClick={buttonAddAnimals} type="button" className="manageAnimals__link__add">Ajout</button>

    <table className="manageAnimals__table">
      <thead>
        <tr>
          <td />
          <td>Nom</td>
          <td>Espèce</td>
          <td>Race</td>
          <td>Date de naissance</td>
          <td>Tags</td>
          <td />
        </tr>
      </thead>
      <tbody>
        {animals.map((animalObject) => (

          <tr key={animalObject.id}>
            <input
              type="checkbox"
              aria-describedby={animalObject.name}
              name={animalObject.id}
              value={animalObject.id}
              onChange={checkAdminAnimalsList}
            />
            <td />

            <Link to={`/admin/gestion-animaux/${animalObject.id}`} className="manageAnimals__link__redirect">
              <>
                <td>{animalObject.name}</td>
                <td>{animalObject.species_name} </td>
                <td>{animalObject.breeds.map((breed) => <tr key={breed.id}>{breed.name}</tr>)}</td>
                <td>{animalObject.birthdate}</td>
                {
            animalObject.tags === null
              ? <td>En évaluation</td>
              : <td>{animalObject.tags.map((tags) => <tr key={tags.id}>{tags.name}</tr>)}</td>
            }
              </>
            </Link>
            <td>

              <button
                value={animalObject.id}
                onClick={(event) => {
                  event.preventDefault();
                  buttonDeleteAnimals(animalObject);
                }}
                type="button"
                className="manageAnimals__link__delete"
              >Supprimer
              </button>
            </td>
          </tr>

        ))}
      </tbody>
    </table>
  </div>

);

ManagedAnimals.propTypes = {
  animals: PropTypes.array.isRequired,
  buttonAddAnimals: PropTypes.func.isRequired,
  buttonDeleteAnimals: PropTypes.func.isRequired,
  checkAdminAnimalsList: PropTypes.func.isRequired,
};

export default ManagedAnimals;
