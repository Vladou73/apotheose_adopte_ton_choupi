// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// METTRE EN PLACE LES PROPTYPE !

// == Composant
const Search = ({
  inputTextAnimals, filterName, breeds, tags, species,
}) => (
  <div className="search-div search-form">
    {/* INPUT TEXT FOR SEARCH NAME */}
    <div className="search-form__name">
      <p className="search-form__text">Rechercher ton choupi avec son nom</p>
      <input
        className="search-form__case"
        aria-describedby="animal_name"
        type="text"
        value={inputTextAnimals}
        onChange={(event) => {
          const searchName = event.target.value;
          filterName(searchName);
        }}
      />
    </div>

    {/* CHECKBOX FOR SPECIES */}
    <div className="search-form__species">
      <p className="search-form__text">Espèce</p>

      {species.map((specie) => (
        <label
          htmlFor="species__name"
          className="search-form__label"
          key={specie.id}
        >
          {specie.name}
          <input
            className="search-form__checkbox"
            aria-describedby="species__name"
            type="radio"
            name="species__name"
            key={specie.id}
          />

        </label>
      ))}
    </div>

    {/* SELECT FOR BREED */}
    <div className="search-form__breed">
      <p className="search-form__text">Race</p>
      <select
        className="search-form__case"
        name="breed"
      >
        <option value="">Indifférent</option>
        {breeds.map((breed) => <option key={breed.id} value={breed.name}>{breed.name}</option>)}
      </select>
    </div>

    {/* SELECT FOR TAG */}
    <div className="search-form__tag">
      <p className="search-form__text">Caractère</p>
      <select
        className="search-form__case"
        name="tag"
      >
        <option value="null">Indifférent</option>
        {tags.map((tag) => <option key={tag.id} value={tag.name}>{tag.name}</option>)}
      </select>
    </div>

    {/* CHECKBOX FOR TAG SOS */}
    <div className="search-form__sos">
      <p className="search-form__text">SOS</p>
      <input
        className="search-form__checkbox"
        id="checkbox-sos"
        aria-describedby="SOS"
        type="checkbox"
        name="sos"
      />
    </div>

    {/* CHECKBOX FOR GENDER */}
    <div className="search-form__gender">
      <p className="search-form__text">Sexe :</p>
      <div>
        <label
          htmlFor="gender"
          className="search-form__label"
        >
          Femelle
          <input
            className="search-form__checkbox"
            id="gender-female"
            aria-describedby="gender"
            type="radio"
            name="gender"
          />
        </label>
      </div>
      <div>
        <label
          htmlFor="gender"
          className="search-form__label"
        >
          Male
          <input
            className="search-form__checkbox"
            id="gender-male"
            aria-describedby="gender"
            type="radio"
            name="gender"
          />
        </label>
      </div>
    </div>

    {/* CHECKBOX FOR AGE */}
    <div className="search-form__age">
      <p className="search-form__text">Age :</p>
      <div>
        <label
          htmlFor="junior"
          className="search-form__label"
        >
          Junior
          <input
            className="search-form__checkbox"
            id="checkbox-junior"
            aria-describedby="junior"
            type="radio"
            name="age"
          />
        </label>
        <label
          htmlFor="adulte"
          className="search-form__label"
        >
          Adulte
          <input
            className="search-form__checkbox"
            id="checkbox-adulte"
            aria-describedby="adulte"
            type="radio"
            name="age"
          />
        </label>
        <label
          htmlFor="senoir"
          className="search-form__label"
        >
          Senior
          <input
            className="search-form__checkbox"
            id="checkbox-senoir"
            aria-describedby="senior"
            type="radio"
            name="age"
          />
        </label>
      </div>
    </div>

  </div>
);

Search.propTypes = {
  inputTextAnimals: PropTypes.string.isRequired,
  filterName: PropTypes.func.isRequired,
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
};

// == Export
export default Search;
