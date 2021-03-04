// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import Search from './Search';
import Cards from './Cards';

// == Composant
const Adoption = ({ animals }) => (
  <div className="adoption-page">
    <h1 className="adoption-page--title">Disponible à l'adoption</h1>
    <Search />
    <section className="section-animals">
      <h2 className="section-animals--title">8 animaux à l'adoption</h2>
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
};

// == Export
export default Adoption;
