/* eslint-disable max-len */
// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import participatePicture from './participate.webp';
import './styles.scss';

// == Composant
const Join = () => (
  <div className="participate">
    <main className="mainParticipate">
      <h1 className="participateTitle">Rejoindre notre association</h1>
      <h2 className="participateTitle"> Adopte un choupi lutte chaque jour contre l'abandon d'animal en France</h2>
      <p className="introText">
        L’abandon sur la voie publique ou dans la nature est classé comme acte de cruauté et puni de 30 000 € d’amende et 2 ans de prison. Pourtant, en France près de 100 000 chiens et chats sont abandonnés chaque année, avec un pic durant la période estivale. La SPA recueille près de 42 000 animaux par an dont environ 10 000 l’été. L’association lutte quotidiennement contre ce fléau qu’est l’abandon.
      </p>
      <p className="introText">
        Les causes de l’abandon d’animaux sont multiples : déménagement, séparation, raisons financières…. Les départs en vacances sont également une cause récurrente d’abandon notamment l'été. Chaque année, ce sont près de 40 000 chiens et chats qui sont abandonnés sur la route des vacances. Pourtant, de nombreuses solutions sont aujourd’hui proposées pour faire garder son compagnon pendant ses congés : chenil, le faire garder par un ami ou encore faire appel à quelqu’un pour une garde à domicile…
      </p>
      <h2 className="participateTitle"> Devenir bénévole</h2>
      <p className="introText">
        S’engager auprès de refuge pour venir en aide aux animaux est une formidable expérience et un enrichissement personnel. C’est aussi rejoindre la plus ancienne association de protection animale dont l’expérience et le savoir-faire nous permettent de secourir, soigner et faire adopter des milliers d’animaux chaque année.
      </p>
      <img src={participatePicture} className="participatePicture" alt=" join us" />
      <div className="sponsorElements">
        <p className="subTitleSponsor"> Bien-etre des animaux </p>
        <p className="sponsorText">
          Per hoc minui studium suum existimans Paulus, ut erat in conplicandis negotiis artifex dirus, unde ei Catenae inditum est cognomentum, vicarium ipsum eos quibus praeerat adhuc defensantem ad sortem periculorum communium traxit. et instabat ut eum quoque cum tribunis et aliis pluribus ad comitatum imperatoris vinctum perduceret: quo percitus ille exitio urgente abrupto ferro eundem adoritur Paulum. et quia languente dextera, letaliter ferire non potuit, iam districtum mucronem in proprium latus inpegit. hocque deformi genere mortis excessit e vita iustissimus rector ausus miserabiles casus levare multorum.
        </p>
      </div>
      <div className="walkingElements">
        <p className="subTitleWalking"> Entretien des animaux </p>
        <p className="walkingText">
          Ut enim quisque sibi plurimum confidit et ut quisque maxime virtute et sapientia sic munitus est, ut nullo egeat suaque omnia in se ipso posita iudicet, ita in amicitiis expetendis colendisque maxime excellit. Quid enim? Africanus indigens mei? Minime hercule! ac ne ego quidem illius; sed ego admiratione quadam virtutis eius, ille vicissim opinione fortasse non nulla, quam de meis moribus habebat, me dilexit; auxit benevolentiam consuetudo.
        </p>
      </div>
      <div className="sponsorElements">
        <p className="subTitleSponsor"> Animation et Sensibilisation à la cause animale </p>
        <p className="sponsorText">
          Per hoc minui studium suum existimans Paulus, ut erat in conplicandis negotiis artifex dirus, unde ei Catenae inditum est cognomentum, vicarium ipsum eos quibus praeerat adhuc defensantem ad sortem periculorum communium traxit. et instabat ut eum quoque cum tribunis et aliis pluribus ad comitatum imperatoris vinctum perduceret: quo percitus ille exitio urgente abrupto ferro eundem adoritur Paulum. et quia languente dextera, letaliter ferire non potuit, iam districtum mucronem in proprium latus inpegit. hocque deformi genere mortis excessit e vita iustissimus rector ausus miserabiles casus levare multorum.
        </p>
      </div>
      <div className="sponsorElements">
        <p className="subTitleSponsor"> Administration bureautique </p>
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
