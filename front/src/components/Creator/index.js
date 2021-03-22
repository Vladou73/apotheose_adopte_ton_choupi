// == Import npm
import React from 'react';
import photoManel from './manel.jpg';
import photoRomain from './romain.jpg';
import photoElisa from './elisa.jpg';
import photoVladimir from './vladimir.jpg';
import './styles.scss';

// == Composant
const Creator = () => (
  <>
    <h1 className="creator-title"> Présentation de l'équipe </h1>
    <section className="section-creator">
      <h2 className="section-creator__title"> </h2>
      <div className="cards-creator">
        <div className="card-creator">
          <h3 className="card-creator__name"> Elisa GREDER</h3>
          <img className="card-creator__picture" src={photoElisa} alt="Elisa Greder" />
          <p className="card-creator__span"> Rôle:</p>
          <p className="card-creator__span">Product Owner / Dev Front </p>
        </div>
        <div className="card-creator">
          <h3 className="card-creator__name"> Manel DJEDIR</h3>
          <img className="card-creator__picture" src={photoManel} alt="Manel Djedir" />
          <p className="card-creator__span"> Rôle:</p>
          <p className="card-creator__span">Scrum Master / Dev Front </p>
        </div>
        <div className="card-creator">
          <h3 className="card-creator__name"> Romain BEGEY</h3>
          <img className="card-creator__picture" src={photoRomain} alt="Romain Begey" />
          <p className="card-creator__span"> Rôle:</p>
          <p className="card-creator__span">Lead Dev Front </p>
        </div>
        <div className="card-creator">
          <h3 className="card-creator__name"> Vladimir NAFISSI</h3>
          <img className="card-creator__picture" src={photoVladimir} alt="Vladimir Nafissi" />
          <p className="card-creator__span"> Rôle:</p>
          <p className="card-creator__span">Lead Dev Back </p>
        </div>
      </div>
    </section>
  </>
);

// == Export
export default Creator;
