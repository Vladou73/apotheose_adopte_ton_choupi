// == Import npm
import React from 'react';
import photoRomain from './romain_light.jpg';
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
          <img className="card-creator__picture" src="https://firebasestorage.googleapis.com/v0/b/adopte-ton-choupi.appspot.com/o/images%2Fpexels-andreas-schmolmueller-3376610.jpg?alt=media&amp;token=531701c3-e297-4659-886f-efa7a8bf184c" alt="Elisa Greder" />
          <p className="card-creator__span"> Rôle:</p>
          <p className="card-creator__span">Product Owner / Dev Front </p>
        </div>
        <div className="card-creator">
          <h3 className="card-creator__name"> Manel DJEDIR</h3>
          <img className="card-creator__picture" src="https://firebasestorage.googleapis.com/v0/b/adopte-ton-choupi.appspot.com/o/images%2Fpexels-andreas-schmolmueller-3376610.jpg?alt=media&amp;token=531701c3-e297-4659-886f-efa7a8bf184c" alt="Manel Djedir" />
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
          <img className="card-creator__picture" src="https://firebasestorage.googleapis.com/v0/b/adopte-ton-choupi.appspot.com/o/images%2Fpexels-andreas-schmolmueller-3376610.jpg?alt=media&amp;token=531701c3-e297-4659-886f-efa7a8bf184c" alt="Vladimir Nafissi" />
          <p className="card-creator__span"> Rôle:</p>
          <p className="card-creator__span">Lead Dev Back </p>
        </div>
      </div>
    </section>
  </>
);

// == Export
export default Creator;
