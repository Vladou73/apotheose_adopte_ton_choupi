// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const Search = () => (
  <form className="search-form">

    <p className="search-form--text">Rechercher ton choupi avec son nom</p>
    <input
      className="search-form--case"
      type="text"
      value=""
    />

    <p className="search-form--text">Espèce</p>
    <select
      className="search-form--case"
      name="species"
    >
      <option value="">Indifférent</option>
      <option value="dog">Chien</option>
      <option value="cat">Chat</option>
      <option value="hamster">Nac</option>
    </select>

    {/* Keep input select for choice of breef or consider another way ? */}
    <p className="search-form--text">Race</p>
    <select
      className="search-form--case"
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

    <p className="search-form--text">Caractère</p>
    <select
      className="search-form--case"
      name="category"
    >
      <option value="">Indifférent</option>
      <option value="dog">Gardien</option>
      <option value="dog">Calme</option>
      <option value="dog">Joueur</option>
      <option value="dog">Sportif</option>
    </select>

    <p className="search-form--text">Sexe :</p>
    <div>
      <label
        htmlFor="checkbox-female"
        className="search-form--label"
      >
        Femelle
        <input
          className="search-form--checkbox"
          id="checkbox-female"
          type="checkbox"
          name="female"
          checked
        />
      </label>
    </div>
    <div>
      <label
        htmlFor="checkbox-male"
        className="search-form--label"
      >
        Male
        <input
          className="search-form--checkbox"
          id="checkbox-male"
          type="checkbox"
          name="male"
        />
      </label>
    </div>

    <div>
      <p className="search-form--text">Age :</p>
      <span> 3 mois </span>
      <input
        id="input-age"
        type="range"
        name="age"
        min="Entre 2 mois"
        max="10 +"
      />
      <span> 10 ans et + </span>
    </div>

    <div>
      <label
        htmlFor="checkbox-sos"
        className="search-form--label"
      >
        SOS
        <input
          className="search-form--checkbox"
          id="checkbox-sos"
          type="checkbox"
          name="sos"
        />
      </label>
    </div>

    <button
      className="search-form--case"
      type="button"
    > Rechercher
    </button>
  </form>
);

// == Export
export default Search;
