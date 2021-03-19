/* eslint-disable max-len */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import News from './news';
import home from './home.jpg';
import './styles.scss';

const Header = () => (
  <Header />
);

// == Composant
const Home = ({ articles }) => {
  // articles.map((article) => console.log(article.title));
  const size = 3;
  const items = articles.slice(0, size);
  return (
    <main className="home">
      <img src={home} className="home__picture" alt="home logo" />
      <div className="home__contain">
        <h1 className="home__title">Association reconnue d'utilité publique</h1>
        <h2 className="home__subtitle"> Société protectrice des animaux</h2>
        <div className="home__paragraph">
          <p>
            Le premier combat du refuge créée en 1845 par Etienne Pariset portait sur la protection des chevaux que les cochers parisiens maltraitaient. Au fil du temps, notre action s'est developpée et notre intérêt s'est élargi aux autres éspèces animales, en particulier nos plus proches compagnons, les chiens et les chats.
          </p>
          <p>L’association a pour but d’améliorer, par tous les moyens qui sont en son pouvoir, le sort de tous les animaux, de lutter contre leur trafic, de veiller à ce que soient respectées les dispositions législatives et réglementaires qui les protègent et de leur accorder assistance, et de participer en ce sens à la sensibilisation de l’opinion publique.
          </p>
        </div>
        <p className="home__subtitle">Suivez nos actualités</p>
      </div>
      <section className="home__section">
        <div className="home__news">
          {items.map((article) => <News key={article.id} article={article} />)}
        </div>
      </section>
    </main>
  );
};

Home.propTypes = {
  articles: PropTypes.array.isRequired,
};

// == Export
export default Home;
