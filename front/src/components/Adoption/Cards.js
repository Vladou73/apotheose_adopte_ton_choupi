// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';
import loulou from './pictures/loulou.jpg';

// == Composant
const Cards = () => (
  <section className="section-animals">
    <h2 className="section-animals--title">8 animaux à l'adoption</h2>
    <div className="cards-animals">
      <div className="card-animal">
        <p className="card-animal--name">Loulou</p>
        <img
          className="card-animal--picture"
          src={loulou}
          alt="loulou"
        />
        <Link to="/animaux/nom_animal">
          <span className="card-animal--span">Voir la fiche</span>
        </Link>
      </div>
      <div className="card-animal">
        <p className="card-animal--name">Loulou</p>
        <img
          className="card-animal--picture"
          src={loulou}
          alt="loulou"
        />
        <Link to="/animaux/nom_animal">
          <span className="card-animal--span">Voir la fiche</span>
        </Link>
      </div>
      <div className="card-animal">
        <p className="card-animal--name">Loulou</p>
        <img
          className="card-animal--picture"
          src={loulou}
          alt="loulou"
        />
        <Link to="/animaux/nom_animal">
          <span className="card-animal--span">Voir la fiche</span>
        </Link>
      </div>
      <div className="card-animal">
        <p className="card-animal--name">Loulou</p>
        <img
          className="card-animal--picture"
          src={loulou}
          alt="loulou"
        />
        <Link to="/animaux/nom_animal">
          <span className="card-animal--span">Voir la fiche</span>
        </Link>
      </div>
      <div className="card-animal">
        <p className="card-animal--name">Loulou</p>
        <img
          className="card-animal--picture"
          src={loulou}
          alt="loulou"
        />
        <Link to="/animaux/nom_animal">
          <span className="card-animal--span">Voir la fiche</span>
        </Link>
      </div>
      <div className="card-animal">
        <p className="card-animal--name">Loulou</p>
        <img
          className="card-animal--picture"
          src={loulou}
          alt="loulou"
        />
        <Link to="/animaux/nom_animal">
          <span className="card-animal--span">Voir la fiche</span>
        </Link>
      </div>
      <div className="card-animal">
        <p className="card-animal--name">Loulou</p>
        <img
          className="card-animal--picture"
          src={loulou}
          alt="loulou"
        />
        <Link to="/animaux/nom_animal">
          <span className="card-animal--span">Voir la fiche</span>
        </Link>
      </div>
      <div className="card-animal">
        <p className="card-animal--name">Loulou</p>
        <img
          className="card-animal--picture"
          src={loulou}
          alt="loulou"
        />
        <Link to="/animaux/nom_animal">
          <span className="card-animal--span">Voir la fiche</span>
        </Link>
      </div>
      <div className="card-animal">
        <p className="card-animal--name">Loulou</p>
        <img
          className="card-animal--picture"
          src={loulou}
          alt="loulou"
        />
        <Link to="/animaux/nom_animal">
          <span className="card-animal--span">Voir la fiche</span>
        </Link>
      </div>
    </div>
  </section>
);

// == Export
export default Cards;
