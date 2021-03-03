import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import loulou from './pictures/loulou2.jpg';

const Animal = () => (
  <div className="animal">
    <h2 className="animal__name">Loulou</h2>
    <img src={loulou} alt="loulou" />
    <div className="animal__category">
      <p className="animal__category-text">Espèce : Chien </p>
      <p className="animal__category-text">Race / Apparence : Epagnol </p>
      <p className="animal__category-text">Sexe : Male </p>
      <p className="animal__category-text">Date de naissance : 14/11/2015</p>

    </div>
    <div className="animal__content">
      <p>Loulou a été retiré il y a quelques semaines il vivait dans de mauvaises conditions.</p>
      <p>C'est un chien sportif qui aime le jeu. Ses ententes chiens et chats sont inconnu</p>
    </div>
    <Link
      to="/info_adoption"
      className="animal__link animal__link-adoption"
    >En savoir plus sur l'adoption
    </Link>
    <p className="animal__span">Vous souhaitez en savoir plus sur Loulou ?</p>
    <Link
      to="/contact"
      className="animal__link  animal__link-contact"
    >Contactez nous
    </Link>
  </div>
);

export default Animal;
