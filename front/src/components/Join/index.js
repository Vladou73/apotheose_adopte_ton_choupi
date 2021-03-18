/* eslint-disable max-len */
// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Join = () => (
  <div className="participate">
    <h1 className="act-title">Rejoindre notre association et devenez bénévole !</h1>
    <main className="mainParticipate">
      <div className="sponsorElements">
        <h2 className="subTitleSponsor"> L'abandon des animaux en France </h2>
        <p className="walkingText">
          L’abandon sur la voie publique ou dans la nature est classé comme acte de cruauté et puni de 30 000 € d’amende et 2 ans de prison. Pourtant, en France près de 100 000 chiens et chats sont abandonnés chaque année, avec un pic durant la période estivale. La SPA recueille près de 42 000 animaux par an dont environ 10 000 l’été. L’association lutte quotidiennement contre ce fléau qu’est l’abandon.
          Les causes de l’abandon d’animaux sont multiples : déménagement, séparation, raisons financières…. Les départs en vacances sont également une cause récurrente d’abandon notamment l'été. Chaque année, ce sont près de 40 000 chiens et chats qui sont abandonnés sur la route des vacances. Pourtant, de nombreuses solutions sont aujourd’hui proposées pour faire garder son compagnon pendant ses congés : chenil, le faire garder par un ami ou encore faire appel à quelqu’un pour une garde à domicile…
          S’engager auprès de refuge pour venir en aide aux animaux est une formidable expérience et un enrichissement personnel. C’est aussi rejoindre la plus ancienne association de protection animale dont l’expérience et le savoir-faire nous permettent de secourir, soigner et faire adopter des milliers d’animaux chaque année.
        </p>
      </div>
      <div className="sponsorElements">
        <h2 className="subTitleSponsor"> Animation et sensibilisation à la cause animale </h2>
        <p className="sponsorText">
          Le refuge intervient auprès des jeunes dans le secteur public (établissements scolaires : maternelles, primaires, collèges, lycées ; collectivités locales...) ou privé (associations socio-éducatives, structures culturelles et de loisirs…) pour des animations pédagogiques autour de la découverte et de la protection des animaux.
          Les jeunes sont sensibilisés aux actions de du refuge, au bien-être de l’animal et à ses besoins, au bon comportement à adopter avec eux, et sur de nombreuses thématiques selon leurs âges (le langage du chien et du chat, les abandons, les Nacs, l’identification, la stérilisation, la maltraitance…).
          La stérilisation n’est pas toujours un réflexe pour les particuliers car beaucoup ne comprennent pas son intérêt et la voient comme une mutilation, alors qu’elle permet de gérer des naissances non planifiées, éviter les abandons et prévenir certaines pathologies comme le cancer, la protection contre les maladies infectieuses ou encore la diminution des fugues pendant les chaleurs.
        </p>
      </div>
      <div className="sponsorElements">
        <h2 className="subTitleSponsor"> Entretien et bien-être des animaux </h2>
        <p className="sponsorText">
        <h3 className="subTitleSponsor-subtitle">En adoptant un animal je m'engage:</h3>
            À le respecter, à lui apporter toute l’affection et l’attention dont il a besoin et à ne jamais l’abandonner,tous les soins nécessaires pour le maintenir en bonne santé a fournir des conditions de vie et d’hébergement assurant son bien-être et a respecter les obligations que m’impose la loi si mon animal est un chien de deuxième catégorie.<br />
        </p>
        <p className="sponsorText">
        <h3 className="subTitleSponsor-subtitle">A son arrivée, j’accueille mon animal dans des conditions permettant la réussite de son adoption :</h3>
        <ul className="join-ul">
          <li className="join-li">Je suis vigilant à son comportement (stress de quitter le refuge et de se retrouver dans un nouvel environnement) afin d’éviter les risques de morsures/griffures et de fugues.</li>
          <li className="join-li">J’apprends aux enfants à respecter l’animal en tant que membre de la famille.</li>
          <li className="join-li">Je suis compréhensif et patient avec un animal adopté qui a pu subir des traumatismes par le passé (abandon, violence…).</li>
        </ul>
        </p>
        <p className="sponsorText">
        <h3 className="subTitleSponsor-subtitle">A son arrivée, j’accueille mon animal dans des conditions permettant la réussite de son adoption :</h3>
        <ul>
          <li className="join-li">J’éduque mon animal en lui donnant une place dans la maison, mais pas toute la place !</li>
          <li className="join-li">Je l’habitue à mon environnement et aux différents bruits.</li>
          <li className="join-li">Je le stimule par le jeu et je le balade le plus possible s’il s’agit d’un chien.</li>
          <li className="join-li">Je le récompense de manière positive quand il se comporte bien.</li>
          <li className="join-li">Je lui apprends la propreté.</li>
          <li className="join-li">Je suis ferme et je sais dire NON, par le ton et sans violence.</li>
        </ul>
        </p>
        <p className="sponsorText">
        <h3 className="subTitleSponsor-subtitle">Les soins :</h3>
        <ul>
          <li className="join-li">Je le fais vacciner et suivre régulièrement par le vétérinaire.</li>
          <li className="join-li">Je le fais stériliser et lui applique un traitement antiparasitaire.</li>
          <li className="join-li">J’entretiens son pelage et je vérifie ses pattes et ses oreilles.</li>
          <li className="join-li">Je le nourris bien et je lui laisse de l’eau fraîche et propre en permanence.</li>
        </ul>
        </p>
      </div>
      <div className="sponsorElements">
        <h2 className="subTitleSponsor"> Administration bureautique </h2>
        <p className="sponsorText">
          Per hoc minui studium suum existimans Paulus, ut erat in conplicandis negotiis artifex dirus, unde ei Catenae inditum est cognomentum, vicarium ipsum eos quibus praeerat adhuc defensantem ad sortem periculorum communium traxit. et instabat ut eum quoque cum tribunis et aliis pluribus ad comitatum imperatoris vinctum perduceret: quo percitus ille exitio urgente abrupto ferro eundem adoritur Paulum.
        </p>
      </div>
      <Link to="/contact" className="contactButton">Nous contacter</Link>
    </main>
  </div>
);

// == Export
export default Join;
