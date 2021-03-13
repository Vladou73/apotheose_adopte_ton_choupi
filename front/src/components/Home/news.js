// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';
import cat from './cat.jpg';

// == Composant
const News = () => (
  <Link
    to="/article/:id"
    className="home-news__link"
  >
    <div className="home-news__box">
      <img
        className="home-news__picture"
        src={cat}
        alt="article"
      />
      <div className="home-news__contain">
        <p className="home-news__title">Titre</p>
        <span className="home-news__category">Catégorie</span>
        <p className="home-news__text">
          Eodem tempore Serenianus ex duce, cuius ignavia
          populatam in Phoenice Celsen ante rettulimus,
          pulsatae maiestatis imperii reus iure postulatus ac lege,
          incertum qua potuit suffragatione absolvi,
          aperte convictus familiarem suum
          cum pileo, quo caput operiebat, incantato vetitis artibus ad templum misisse fatidicum,
          quaeritatum expresse an ei firmum portenderetur imperium, ut cupiebat, et cunctum.
        </p>
        <p className="home-news__more">En savoir d'avantage..</p>
      </div>
    </div>
  </Link>
);

// == Export
export default News;
