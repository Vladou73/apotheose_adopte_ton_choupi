/* eslint-disable max-len */
// == Import npm
import React from 'react';

// == Import
import News from './News/news';
import homepicture from './homepicture.jpg';
import './styles.scss';

const Header = () => (
  <Header />
);

// == Composant
const Home = () => (

  <div className="home">
    <main className="main">
      <img src={homepicture} className="homePicture" alt="home logo" />
      <h1 className="main__title">Association reconnue d'utilité publique</h1>
      <h2 className="main__subtitle"> Société protectrice des animaux</h2>
      <div className="main__paragraph">
        <p>
          Soleo saepe ante oculos ponere, idque libenter crebris usurpare sermonibus, omnis nostrorum imperatorum, omnis exterarum gentium potentissimorumque populorum, omnis clarissimorum regum res gestas, cum tuis nec contentionum magnitudine nec numero proeliorum nec varietate regionum nec celeritate conficiendi nec dissimilitudine bellorum posse conferri; nec vero disiunctissimas terras citius passibus cuiusquam potuisse peragrari, quam tuis non dicam cursibus, sed victoriis lustratae sunt.
          Ego vero sic intellego, Patres conscripti, nos hoc tempore in provinciis decernendis perpetuae pacis habere oportere rationem.
        </p>
        <p>Nam quis hoc non sentit omnia alia esse nobis vacua ab omni periculo atque etiam suspicione belli?
          Mensarum enim voragines et varias voluptatum inlecebras, ne longius progrediar, praetermitto illuc transiturus quod quidam per ampla spatia urbis subversasque silices sine periculi metu properantes equos velut publicos signatis quod dicitur calceis agitant, familiarium agmina tamquam praedatorios globos post terga trahentes ne Sannione quidem, ut ait comicus, domi relicto. quos imitatae matronae complures opertis capitibus et basternis per latera civitatis cuncta discurrunt.
        </p>
      </div>
      <h1 className="newsTitle">Suivez nos actualités</h1>
      <div className="news">
        <News />
        <News />
        <News />
      </div>
    </main>
  </div>

);

// == Export
export default Home;
