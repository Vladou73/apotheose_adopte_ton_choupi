/* eslint-disable import/no-extraneous-dependencies */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';

// == Import
import './styles.scss';
import Search from './Search';
import Cards from './Cards';

// == Composant
const Adoption = ({
  inputTextAnimals,
  filterName,
  animals,
  breeds,
  tags,
  species,
  filterTags,
  filterGender,
  filterSpecies,
  filterBreeds,
  resetFilterAnimals,
  onClickPageAnimals,
  pageAnimals,
}) => (
  <div className="adoption-page">
    <h1 className="adoption-page__title">Ton choupi se cache peut-être ici..</h1>
    <h2 className="section-animals__title">A toi de le trouver !</h2>
    <Search
      breeds={breeds}
      animals={animals}
      tags={tags}
      species={species}
      filterGender={filterGender}
      inputTextAnimals={inputTextAnimals}
      filterName={filterName}
      filterTags={filterTags}
      filterSpecies={filterSpecies}
      filterBreeds={filterBreeds}
      resetFilterAnimals={resetFilterAnimals}
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
      <Pagination
        activePage={pageAnimals}
        itemsCountPerPage={3}
        pageRangeDisplayed={3}
        totalItemsCount={100}
        onChange={onClickPageAnimals}
        prevPageText="<"
        firstPageText=".."
        lastPageText=".."
        nextPageText=">"
        innerClass="pagination"
        activeClass="pagination__active"
        itemClass="pagination__li"
      />
    </section>
  </div>
);

Adoption.propTypes = {
  animals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  breeds: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
  species: PropTypes.array.isRequired,
  inputTextAnimals: PropTypes.string.isRequired,
  filterName: PropTypes.func.isRequired,
  filterTags: PropTypes.func.isRequired,
  onClickPageAnimals: PropTypes.func.isRequired,
  pageAnimals: PropTypes.number.isRequired,
};

// == Export
export default Adoption;
