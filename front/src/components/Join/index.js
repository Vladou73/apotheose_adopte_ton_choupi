/* eslint-disable max-len */
// == Import npm
import React from 'react';

// == Import
import joinPicture from './joinUs.jpg';
import './styles.scss';

// == Composant
const Join = () => (
  <div className="join">
    <main className="main">
      <h1 className="joinTitle">Rejoindre notre association</h1>
      <img src={joinPicture} className="main__joinPicture" alt=" join us" />
      <div className="blocJoin">
        <h2 className="blocJoin__subtitle"> Adopte un choupi lutte chaque jour contre l'abandon d'animal en France</h2>
        <p>
          L’abandon sur la voie publique ou dans la nature est classé comme acte de cruauté et puni de 30 000 € d’amende et 2 ans de prison. Pourtant, en France près de 100 000 chiens et chats sont abandonnés chaque année, avec un pic durant la période estivale. La SPA recueille près de 42 000 animaux par an dont environ 10 000 l’été. L’association lutte quotidiennement contre ce fléau qu’est l’abandon.
        </p>
        <p>
          Les causes de l’abandon d’animaux sont multiples : déménagement, séparation, raisons financières…. Les départs en vacances sont également une cause récurrente d’abandon notamment l'été. Chaque année, ce sont près de 40 000 chiens et chats qui sont abandonnés sur la route des vacances. Pourtant, de nombreuses solutions sont aujourd’hui proposées pour faire garder son compagnon pendant ses congés : chenil, le faire garder par un ami ou encore faire appel à quelqu’un pour une garde à domicile…
        </p>
      </div>
      <a href="/contact" className="main__redirection__ToContact">
        <p> Contactez-nous !</p>
      </a>
    </main>
  </div>
);

// == Export
export default Join;
