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
      <h1 className="joinTitle">Rejoindre l'association</h1>
      <img src={joinPicture} className="main__joinPicture" alt=" join us" />
      <div className="blocJoin">
        <h2 className="blocJoin__subtitle"> Sous-titre </h2>
        <p>
          Ex turba vero imae sortis et paupertinae in tabernis aliqui pernoctant vinariis, non nulli velariis umbraculorum theatralium latent, quae Campanam imitatus lasciviam Catulus in aedilitate sua suspendit omnium primus; aut pugnaciter aleis certant turpi sono fragosis naribus introrsum reducto spiritu concrepantes; aut quod est studiorum omnium maximum ab ortu lucis ad vesperam sole fatiscunt vel pluviis, per minutias aurigarum equorumque praecipua vel delicta scrutantes.
          Rogatus ad ultimum admissusque in consistorium ambage nulla praegressa inconsiderate et leviter proficiscere inquit ut praeceptum est, Caesar sciens quod si cessaveris, et tuas et palatii tui auferri iubebo prope diem annonas. hocque solo contumaciter dicto subiratus abscessit nec in conspectum eius postea venit saepius arcessitus.
          Ideo urbs venerabilis post superbas efferatarum gentium cervices oppressas latasque leges fundamenta libertatis et retinacula sempiterna velut frugi parens et prudens et dives Caesaribus tamquam liberis suis regenda patrimonii iura permisit.
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
