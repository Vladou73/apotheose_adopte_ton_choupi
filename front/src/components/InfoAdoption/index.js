// == Import npm
import React from 'react';

// == Import
import { Link } from 'react-router-dom';
import './styles.scss';
import animals from './cat.jpg';

// == Composant
const InfoAdoption = () => (
  <div className="info-adoption">
    <h1 className="info-adoption__title">Informations concernant l'adoption</h1>
    <p className="info-adoption__text">
      Les équipes de adopte un choupi mettent tout en œuvre pour trouver
      une nouvelle famille à leurs
      pensionnaires dans le cadre de l’adoption responsable.
      Elles connaissent bien leurs animaux et sont de bons conseillers pour les futurs adoptants.
      Ces derniers sont orientés vers ceux dont le caractère et
      l’âge correspondent à leur mode de vie.
      Adopter un animal est une démarche sérieuse et responsable, elle implique toute la famille
      et engage dans le temps. La SPA veille à ce que chaque adoption soit définitive et réussie.
      Avant d'adopter un animal, il faut savoir qu'il y a quelques points très importants
      à considérer pour éviter de faire un mauvais choix.
      Une adoption faite sur un coup de tête a souvent à long terme une répercussion négative.
    </p>
    <img
      className="info-adoption__picture"
      src={animals}
      alt="cats"
    />
    <div className="info-adoption__container">
      <h2 className="info-adoption__subtitle">Quelques erreurs à ne pas commmettre</h2>
      <ul className="info-adoption__ul">
        <li className="info-adoption__li">Adopter sur un coup de tête</li>
        <li className="info-adoption__li">Sous-estimer ses responsabilités</li>
        <li className="info-adoption__li">Imposer un animal aux membres de la famille</li>
        <li className="info-adoption__li">Se précipiter pour adopter</li>
        <li className="info-adoption__li">Choisir un animal qui ne vous correspond pas</li>
      </ul>

      <h2 className="info-adoption__subtitle">Les conditions d'adoption</h2>
      <p className="info-adoption__text">En adoptant, vous acceptez de participer aux frais engendrés par la prise en charge
        de l’animal dans le cadre d’une adoption responsable dont les soins, l’hébergement,
        la nourriture, la vaccination, la stérilisation, l'éducation...
        Vous trouverez aussi auprès de nos équipes des professionnels capables de
        vous donner les meilleurs conseils pour accueillir votre nouveau compagnon.
        Par votre participation financière, vous continuerez à faire grandir notre
        mouvement de solidarité envers les animaux abandonnés et maltraités.
      </p>
      <h2 className="info-adoption--subtitle">Documents néccesaire</h2>
      <ul className="info-adoption__ul">
        <li className="info-adoption__li">Pièce d’identité</li>
        <li className="info-adoption__li">Justificatif de domicile</li>
        <li className="info-adoption__li">Justificatif de revenus</li>
      </ul>
      <div className="info-adoption__contact">
        <Link to="/contact" className="contactButton">Nous contacter</Link>
      </div>
    </div>
  </div>
);

// == Export
export default InfoAdoption;
