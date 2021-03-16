// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';
import cat from './cat.jpg';

// == Composant
const News = ({ article }) => {
  const content = `${article.content.substring(0, 200)}...`;
  return (
    <Link
      to={`/articles/${article.id}`}
      className="home-news__link"
    >
      <div className="home-news__box">
        <img
          className="home-news__picture"
          src={article.media_url}
          alt="article"
        />
        <div className="home-news__contain">
          <p className="home-news__title">{article.title}</p>
          <span className="home-news__category">{article.category_name}</span>
          <p className="home-news__text">
            {content}
          </p>
          <p className="home-news__more">En savoir d'avantage..</p>
        </div>
      </div>
    </Link>
  );
};

News.propTypes = {
  article: PropTypes.object.isRequired,
};

// == Export
export default News;
