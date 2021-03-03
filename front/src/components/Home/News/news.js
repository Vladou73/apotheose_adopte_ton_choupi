/* eslint-disable max-len */
// == Import npm
import React from 'react';

// == Import
import profileLogo from './profilePicture.png';
import './styles.scss';

// == Composant
const News = () => (
  <div className="box">
    <img src={profileLogo} className="profileLogo" alt="profile logo" />
    <p className="individualNews__text"> Eodem tempore Serenianus ex duce, cuius ignavia populatam in Phoenice Celsen ante rettulimus, pulsatae maiestatis imperii reus iure postulatus ac lege, incertum qua potuit suffragatione absolvi, aperte convictus familiarem suum cum pileo, quo caput operiebat, incantato vetitis artibus ad templum misisse fatidicum, quaeritatum expresse an ei firmum portenderetur imperium, ut cupiebat, et cunctum.
    </p>
  </div>
);

// == Export
export default News;
