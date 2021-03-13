/* eslint-disable max-len */
// == Import npm
import React from 'react';

// == Import
// import sponsorPicture from './sponsor.png';
// import walkingPicture from './walking.jpg';
import { Link } from 'react-router-dom';
import participatePicture from './participate.webp';
import './styles.scss';

// == Composant
const Participate = () => (
  <div className="participate">
    <main className="mainParticipate">
      <h2 className="participateTitle"> Devenir bénévole au sein de notre association</h2>
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

// <img src={sponsorPicture} className="sponsorElements__sponsorPicture" alt=" sponsor us !" />
// <img src={walkingPicture} className="walkingElements__walkingPicture" alt=" walking with us !" />

// == Export
export default Participate;
