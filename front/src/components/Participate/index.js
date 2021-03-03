/* eslint-disable max-len */
// == Import npm
import React from 'react';

// == Import
// import sponsorPicture from './sponsor.png';
// import walkingPicture from './walking.jpg';
import participatePicture from './participate.webp';
import './styles.scss';

// == Composant
const Participate = () => (
  <div className="participate">
    <h1 className="participateTitle"> Participer occasionnellement </h1>
    <main className="mainParticipate">
      <p className="introText">
        Haec dum oriens diu perferret, caeli reserato tepore Constantius consulatu suo septies et Caesaris ter egressus Arelate Valentiam petit, in Gundomadum et Vadomarium fratres Alamannorum reges arma moturus, quorum crebris excursibus vastabantur confines limitibus terrae Gallorum.
      </p>
      <img src={participatePicture} className="participatePicture" alt=" join us" />
      <div className="sponsorElements">
        <p className="subTitleSponsor"> Parrainer un animal </p>
        <p className="sponsorText">
          Per hoc minui studium suum existimans Paulus, ut erat in conplicandis negotiis artifex dirus, unde ei Catenae inditum est cognomentum, vicarium ipsum eos quibus praeerat adhuc defensantem ad sortem periculorum communium traxit. et instabat ut eum quoque cum tribunis et aliis pluribus ad comitatum imperatoris vinctum perduceret: quo percitus ille exitio urgente abrupto ferro eundem adoritur Paulum. et quia languente dextera, letaliter ferire non potuit, iam districtum mucronem in proprium latus inpegit. hocque deformi genere mortis excessit e vita iustissimus rector ausus miserabiles casus levare multorum.
          Nunc vero inanes flatus quorundam vile esse quicquid extra urbis pomerium nascitur aestimant praeter orbos et caelibes, nec credi potest qua obsequiorum diversitate coluntur homines sine liberis Romae.
        </p>
      </div>
      <div className="walkingElements">
        <p className="subTitleWalking"> Promener les animaux </p>
        <p className="walkingText">
          Ut enim quisque sibi plurimum confidit et ut quisque maxime virtute et sapientia sic munitus est, ut nullo egeat suaque omnia in se ipso posita iudicet, ita in amicitiis expetendis colendisque maxime excellit. Quid enim? Africanus indigens mei? Minime hercule! ac ne ego quidem illius; sed ego admiratione quadam virtutis eius, ille vicissim opinione fortasse non nulla, quam de meis moribus habebat, me dilexit; auxit benevolentiam consuetudo. Sed quamquam utilitates multae et magnae consecutae sunt, non sunt tamen ab earum spe causae diligendi profectae.
          Nec piget dicere avide magis hanc insulam populum Romanum invasisse quam iuste. Ptolomaeo enim rege foederato nobis et socio ob aerarii nostri angustias iusso sine ulla culpa proscribi ideoque hausto veneno voluntaria morte deleto et tributaria facta est et velut hostiles eius exuviae classi inpositae in urbem advectae sunt per Catonem, nunc repetetur ordo gestorum.
        </p>
      </div>
    </main>
  </div>
);

// <img src={sponsorPicture} className="sponsorElements__sponsorPicture" alt=" sponsor us !" />
// <img src={walkingPicture} className="walkingElements__walkingPicture" alt=" walking with us !" />

// == Export
export default Participate;
