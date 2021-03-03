// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Search from './Search';
import Cards from './Cards';

// == Composant
const Adoption = () => (
  <div className="adoption-page">
    <h1 className="adoption-page--title">Disponible à l'adoption</h1>
    <Search />
    <Cards />
  </div>
);

// == Export
export default Adoption;
