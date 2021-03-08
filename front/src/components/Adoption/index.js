// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import Search from './Search';
import Cards from './Cards';

// == Composant
const Adoption = ({
  inputTextAnimals, filterName, animals, breeds, tags, species,
}) => (
  <div className="adoption-page">
    <h1 className="adoption-page__title">Ton choupi se cache peut-être ici..</h1>
    <h2 className="section-animals__title">A toi de le trouver !</h2>
    <Search
      breeds={breeds}
      animals={animals}
      tags={tags}
      species={species}
      inputTextAnimals={inputTextAnimals}
      filterName={filterName}
    />
    <section className="section-animals">
      <h2 className="section-animals__title">{animals.length}
        {
        animals.length === 1 ? " animal à l'adoption" : " animaux à l'adoption"
      }
      </h2>
      <div className="cards-animals">
        {animals.map((animal) => <Cards key={animal.id} {...animal} />)}
      </div>
    </section>
  </div>
);

Adoption.propTypes = {
  animals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  inputTextAnimals: PropTypes.string.isRequired,
  filterName: PropTypes.func.isRequired,
};

// == Export
export default Adoption;
