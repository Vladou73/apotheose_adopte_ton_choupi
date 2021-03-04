/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Article = ({ article }) => (
  <div className="article">
    <h2 className="article__title">{article.title}</h2>
    <span className="article__category">{article.category}</span>
    <span className="article__author">{article.author}</span>
    <span className="article__date">date</span>
    <img src={article.img} alt="article" />
    <div className="article__content">
      <p>{article.content}</p>
    </div>
    <div className="article__similar">
      Bonus
    </div>
  </div>
);

Article.propTypes = {
  article: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      category: PropTypes.array.isRequired,
    }),
  ).isRequired,
};

export default Article;
