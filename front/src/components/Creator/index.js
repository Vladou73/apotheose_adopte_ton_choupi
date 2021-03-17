// == Import npm
import React from 'react';
import './styles.scss';

// == Composant
const Creator = () => (
  <>
  <h1 className="creator-title"> Présentation de l'équipe </h1>
  <section className="section-creator">
    <h2 className="section-creator__title"> </h2>
    <div className="cards-creator"> 
      <a href="/creator/1">
        <div class="card-creator">
          <h3 className="card-creator__name"> Elisa GREDER</h3>
          <img class="card-creator__picture" src="https://firebasestorage.googleapis.com/v0/b/adopte-ton-choupi.appspot.com/o/images%2Fpexels-andreas-schmolmueller-3376610.jpg?alt=media&amp;token=531701c3-e297-4659-886f-efa7a8bf184c" alt="Elisa Greder"></img>
          <p className="card-creator__span"> Rôle:</p>
          <p className="card-creator__span">Product Owner / Développeur Front </p>
        </div>
      </a>
      <a href="/creator/2">
        <div class="card-creator">
          <h3 className="card-creator__name"> Manel DJEDIR</h3>
          <img class="card-creator__picture" src="https://firebasestorage.googleapis.com/v0/b/adopte-ton-choupi.appspot.com/o/images%2Fpexels-andreas-schmolmueller-3376610.jpg?alt=media&amp;token=531701c3-e297-4659-886f-efa7a8bf184c" alt="Manel Djedir"></img>
          <p className="card-creator__span"> Rôle:</p>
          <p className="card-creator__span">Scrum Master / Développeur Front </p>
        </div>
      </a>
      <a href="/creator/3">
        <div class="card-creator">
          <h3 className="card-creator__name"> Romain BEGEY</h3>
          <img class="card-creator__picture" src="https://firebasestorage.googleapis.com/v0/b/adopte-ton-choupi.appspot.com/o/images%2Fpexels-andreas-schmolmueller-3376610.jpg?alt=media&amp;token=531701c3-e297-4659-886f-efa7a8bf184c" alt="Romain Begey"></img>
          <p className="card-creator__span"> Rôle:</p>
          <p className="card-creator__span">Leader Développeur Front </p>
        </div>
      </a>
      <a href="/creator/4">
        <div class="card-creator">
          <h3 className="card-creator__name"> Vladimir NAFISSI</h3>
          <img class="card-creator__picture" src="https://firebasestorage.googleapis.com/v0/b/adopte-ton-choupi.appspot.com/o/images%2Fpexels-andreas-schmolmueller-3376610.jpg?alt=media&amp;token=531701c3-e297-4659-886f-efa7a8bf184c" alt="Vladimir Nafissi"></img>
          <p className="card-creator__span"> Rôle:</p>
          <p className="card-creator__span">Leader Développeur Back </p>
        </div>
      </a>
    </div>
  </section>
  </>
);


// == Export
export default Creator;
