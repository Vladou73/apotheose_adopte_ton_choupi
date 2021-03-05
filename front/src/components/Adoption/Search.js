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
          type="text"
          value=""
        />
      </div>

      <div className="search-form__species">
        <p className="search-form__text">Espèce</p>
        <select
          className="search-form__case"
          name="species"
        >
          <option value="">Indifférent</option>
          <option value="dog">Chien</option>
          <option value="cat">Chat</option>
          <option value="hamster">Nac</option>
        </select>
      </div>

      <div className="search-form__breed">
        <p className="search-form__text">Race</p>
        <select
          className="search-form__case"
          name="breed"
        >
          <option value="">Indifférent</option>
          <option value="dog">Labrador</option>
          <option value="dog">Berger allemand</option>
          <option value="dog">Border collie</option>
          <option value="dog">Beagle</option>
          <option value="dog">Teckel</option>
          <option value="dog">Bouledogue</option>
        </select>
      </div>

      <div className="search-form__category">
        <p className="search-form__text">Caractère</p>
        <select
          className="search-form__case"
          name="category"
        >
          <option value="">Indifférent</option>
          <option value="dog">Gardien</option>
          <option value="dog">Calme</option>
          <option value="dog">Joueur</option>
          <option value="dog">Sportif</option>
        </select>
      </div>

      <div className="search-form__gender">
        <p className="search-form__text">Sexe :</p>
        <div>
          <label
            htmlFor="checkbox-female"
            className="search-form__label"
          >
            Femelle
            <input
              className="search-form__checkbox"
              id="checkbox-female"
              type="checkbox"
              name="female"
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="checkbox-male"
            className="search-form__label"
          >
            Male
            <input
              className="search-form__checkbox"
              id="checkbox-male"
              type="checkbox"
              name="male"
            />
          </label>
        </div>
      </div>

      <div className="search-form__age">
        <p className="search-form__text">Age :</p>
        <div>
          <span> 3 mois </span>
          <input
            className="search-form__range"
            id="input-child"
            type="range"
            name="age"
            min="Entre 2 mois"
            max="10 +"
          />
          <input
            className="search-form__range"
            id="input-senior"
            type="range"
            name="age"
            min="Entre 2 mois"
            max="10 +"
          />
          <span> 10 ans et + </span>
        </div>
      </div>

      <div className="search-form__sos">
        <label
          htmlFor="checkbox-sos"
          className="search-form__label"
        >
          SOS
          <input
            className="search-form__checkbox"
            id="checkbox-sos"
            type="checkbox"
            name="sos"
          />
        </label>
      </div>
    </form>
  </div>
);

// == Export
export default Search;
