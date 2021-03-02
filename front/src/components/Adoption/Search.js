// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const Search = () => (
  <form>

    <p>Rechercher un animal avec son nom</p>
    <input type="search" name="search bar" aria-label="Rechercher votre choupi par son nom" />
    <button type="button">ok</button>

    <p>Espèce</p>
    <select name="species">
      <option value="">Indifférent</option>
      <option value="dog">Chien</option>
      <option value="cat">Chat</option>
      <option value="hamster">Nac</option>
    </select>

    {/* Keep input select for choice of breef or consider another way ? */}
    <p>Race</p>
    <select name="breed">
      <option value="">Indifférent</option>
      <option value="dog">Labrador</option>
      <option value="dog">Berger allemand</option>
      <option value="dog">Border collie</option>
      <option value="dog">Beagle</option>
      <option value="dog">Teckel</option>
      <option value="dog">Bouledogue</option>
    </select>

    <p>Caractère</p>
    <select name="category">
      <option value="">Indifférent</option>
      <option value="dog">Gardien</option>
      <option value="dog">Calme</option>
      <option value="dog">Joueur</option>
      <option value="dog">Sportif</option>
    </select>

    <p>Sexe :</p>
    <div>
      <label htmlFor="checkbox-female">
        Femelle
        <input
          id="checkbox-female"
          type="checkbox"
          name="female"
          checked
        />
      </label>
    </div>
    <div>
      <label htmlFor="checkbox-male">
        Male
        <input
          id="checkbox-male"
          type="checkbox"
          name="male"
          checked="false"
        />
      </label>
    </div>

    <div>
      <p>Age :</p>
      <span>Entre 2 mois</span>
      <input
        id="input-age"
        type="range"
        name="age"
        min="Entre 2 mois"
        max="10 +"
      />
      <span>10 ans et +</span>
    </div>

    <div>
      <label htmlFor="checkbox-sos">
        SOS
        <input
          id="checkbox-sos"
          type="checkbox"
          name="sos"
        />
      </label>
    </div>

    <button type="button"> Rechercher </button>
  </form>
);

// == Export
export default Search;
