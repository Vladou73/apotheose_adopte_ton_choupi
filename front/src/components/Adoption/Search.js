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
  resetFilterAnimals,
  isCheckedSOS,
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
              id={specie.id}
              type="radio"
              className="search-form__checkbox"
              aria-describedby={specie.name}
              name="specie"
              key={specie.id}
              value={specie.name}
              onChange={filterSpecies}
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
      <div className="search-form__tag">
        <p className="search-form__text">Caractère</p>
        <select
          className="search-form__case"
          name="tags"
          onChange={filterTags}
        >
          <option value="null">Indifférent</option>
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
      <div className="search-form__sos">
        <p className="search-form__text">SOS</p>
        <input
          className="search-form__checkbox"
          id="checkbox-sos"
          aria-describedby="SOS"
          type="checkbox"
          name="sos"
          value="sos"
          checked={isCheckedSOS}
          onChange={filterSOS}
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
              value="female"
              name="sexe"
              onChange={filterGender}
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
              value="male"
              name="sexe"
              onChange={filterGender}
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
              value="junior"
              onChange={filterAge}
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
              value="adulte"
              onChange={filterAge}
            />
          </label>
          <label
            htmlFor="senior"
            className="search-form__label"
          >
            Senior
            <input
              className="search-form__checkbox"
              id="checkbox-senior"
              aria-describedby="senior"
              type="radio"
              name="age"
              value="senior"
              onChange={filterAge}
            />
          </label>
        </div>
      </div>
      <button
        type="submit"
        onClick={resetFilterAnimals}
        className="search-form__button"
        value="reset"
      >
        Je veux tous les voirs ! ❤️
      </button>
    </div>
  </form>
);

Search.propTypes = {
  inputTextAnimals: PropTypes.string.isRequired,
  filterName: PropTypes.func.isRequired,
  filterBreeds: PropTypes.func.isRequired,
  filterTags: PropTypes.func.isRequired,
  filterSpecies: PropTypes.func.isRequired,
  resetFilterAnimals: PropTypes.func.isRequired,
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
  isCheckedSOS: PropTypes.bool.isRequired,
};

// == Export
export default Search;
