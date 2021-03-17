// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Search = ({
  breeds,
  tags,
  species,
  inputTextAnimals,
  filterName,
  filterTags,
  filterSpecies,
  filterBreeds,
  filterAge,
  filterGender,
  filterSOS,
}) => (
  <form>
    <div className="search-div search-form">
      {/* INPUT TEXT FOR SEARCH NAME */}
      <div className="search-form__name">
        <p className="search-form__text">Rechercher ton choupi avec son nom</p>
        <input
          className="search-form__case"
          aria-describedby="animal_name"
          type="text"
          placeholder="Ex: Choupi"
          value={inputTextAnimals}
          onChange={(event) => {
            const searchName = event.target.value;
            filterName(searchName);
          }}
        />
      </div>

      {/* CHECKBOX FOR SPECIES */}
      <div className="search-form__filter">
        <p className="search-form__text">Espèce</p>
        <select
          className="search-form__caseFilter"
          name="species"
          onChange={filterSpecies}
        >
          <option value="">Indifférent</option>
          {species.map((specie) => (
            <option
              key={specie.id}
              value={specie.name}
            >
              {specie.name}
            </option>
          ))}
        </select>
      </div>

      {/* SELECT FOR BREED */}
      <div className="search-form__filter">
        <p className="search-form__text">Race</p>
        <select
          className="search-form__caseFilter"
          name="breed"
          onChange={filterBreeds}
        >
          <option value="">Indifférent</option>
          {breeds.map((breed) => (
            <option
              key={breed.id}
              value={breed.name}
            >
              {breed.name}
            </option>
          ))}
        </select>
      </div>

      {/* SELECT FOR TAG */}
      <div className="search-form__filter">
        <p className="search-form__text">Caractère</p>
        <select
          className="search-form__caseFilter"
          name="tags"
          onChange={filterTags}
        >
          <option value="">Indifférent</option>
          {tags.map((tag) => (
            <option
              key={tag.id}
              value={tag.name}
            >
              {tag.name}
            </option>
          ))}
        </select>
      </div>

      {/* CHECKBOX FOR TAG SOS */}
      <div className="search-form__filter">
        <p className="search-form__text">SOS</p>
        <select
          className="search-form__caseFilter"
          name="species"
          onChange={filterSOS}
        >
          <option value="">Indifférent</option>
          <option
            value="sos"
          >
            Oui, je veux sauver un Choupi !!
          </option>
        </select>
      </div>

      {/* CHECKBOX FOR GENDER */}
      <div className="search-form__filter">
        <p className="search-form__text">Sexe</p>
        <select
          className="search-form__caseFilter"
          name="species"
          onChange={filterGender}
        >
          <option value="">Indifférent</option>
          <option
            value="female"
          >
            Femelle
          </option>
          <option
            value="male"
          >
            Male
          </option>
        </select>
      </div>

      {/* CHECKBOX FOR AGE */}
      <div className="search-form__filter">
        <p className="search-form__text">Age</p>
        <select
          className="search-form__caseFilter"
          name="species"
          onChange={filterAge}
        >
          <option value="">Indifférent</option>
          <option
            value="junior"
          >
            Junior
          </option>
          <option
            value="adulte"
          >
            Adulte
          </option>
          <option
            value="senior"
          >
            Senior
          </option>
        </select>
      </div>
    </div>
  </form>
);

Search.propTypes = {
  inputTextAnimals: PropTypes.string.isRequired,
  filterName: PropTypes.func.isRequired,
  filterBreeds: PropTypes.func.isRequired,
  filterTags: PropTypes.func.isRequired,
  filterSpecies: PropTypes.func.isRequired,
  breeds: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  species: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filterAge: PropTypes.func.isRequired,
  filterGender: PropTypes.func.isRequired,
  filterSOS: PropTypes.func.isRequired,
};

// == Export
export default Search;
