// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const Search = () => (
  <div className="search-div">
    <form className="search-form">

      <div className="search-form__name">
        <p className="search-form__text">Rechercher ton choupi avec son nom</p>
        <input
          className="search-form__case"
          aria-describedby="animal_name"
          type="text"
        />
      </div>

      {/* CHECKBOX FOR SPECIES */}
      <div className="search-form__species">
        <p className="search-form__text">Espèce</p>
        <label
          htmlFor="species__name"
          className="search-form__label"
        >
          Chien
          <input
            className="search-form__checkbox"
            aria-describedby="species__name"
            type="checkbox"
            name="species__name"
          />
        </label>
        <label
          htmlFor="species__name"
          className="search-form__label"
        >
          Chat
          <input
            className="search-form__checkbox"
            aria-describedby="species__name"
            type="checkbox"
            name="species__name"
          />
        </label>
        <label
          htmlFor="species__name"
          className="search-form__label"
        >
          Nac
          <input
            className="search-form__checkbox"
            aria-describedby="species__name"
            type="checkbox"
            name="nac"
          />
        </label>
      </div>

      {/* SELECT FOR BREED */}
      <div className="search-form__breed">
        <p className="search-form__text">Race</p>
        <select
          className="search-form__case"
          name="breed"
        >
          <option value="">Indifférent</option>
          <option value="species_id">Labrador</option>
          <option value="species_id">Berger allemand</option>
          <option value="species_id">Border collie</option>
          <option value="species_id">Beagle</option>
          <option value="species_id">Teckel</option>
          <option value="species_id">Bouledogue</option>
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
          <option value="tag_id">Gardien</option>
          <option value="tag_id">Calme</option>
          <option value="tag_id">Joueur</option>
          <option value="tag_id">Sportif</option>
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
              id="checkbox-female"
              aria-describedby="gender"
              type="checkbox"
              name="female"
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
              id="checkbox-male"
              aria-describedby="gender"
              type="checkbox"
              name="male"
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
              type="checkbox"
              name="junior"
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
              type="checkbox"
              name="adulte"
            />
          </label>
          <label
            htmlFor="senoir"
            className="search-form__label"
          >
            Senoir
            <input
              className="search-form__checkbox"
              id="checkbox-senoir"
              aria-describedby="senior"
              type="checkbox"
              name="senoir"
            />
          </label>
        </div>
      </div>

    </form>
  </div>
);

// == Export
export default Search;
