import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

const ManagedAnimals = ({ animals }) => (
  <div>

    <Link to="/admin/gestion-animaux/1"> animal 1 </Link>
    <button type="button">Ajout</button>
    <button type="button">Supprimer</button>

    <table>
      <thead>
        <tr>
          <td cosplan={6} />
          <td>Nom</td>
          <td>espèce</td>
          <td>race</td>
          <td>date de naissance</td>
          <td>Tags</td>
        </tr>
      </thead>
      <tbody>
        {animals.map((animalObject) => (

          <tr key={animalObject.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{animalObject.name}</td>
            <td>{animalObject.species_name} </td>
            <td>{animalObject.breeds.map((breed) => <tr key={breed.id}>{breed.name}</tr>)}</td>
            <td>{animalObject.birthdate}</td>
            {
            animalObject.tags === null
              ? <td>En évaluation</td>
              : <td>{animalObject.tags.map((tags) => <tr key={tags.id}>{tags.name}</tr>)}</td>
            }
          </tr>
        ))}
      </tbody>
    </table>
  </div>

);

ManagedAnimals.propTypes = {
  animals: PropTypes.array.isRequired,
};

export default ManagedAnimals;
