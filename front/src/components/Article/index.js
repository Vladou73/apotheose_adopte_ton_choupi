/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Error404 from '../Error404';
import './style.scss';

const Article = ({ article }) => {
  const { id } = useParams();
  console.log(id);

  const data = article.find((articleObject) => articleObject.id === parseInt(id, 10));
  console.log(data);

  if (!data) return <Error404 />;
  const {
    title, category, author, img, content, date,
  } = data;

  return (
    <div className="article">
      <h2 className="article__title">{title}</h2>
      <span className="article__category">{category}</span>
      <span className="article__author">{author}</span>
      <span className="article__date">{date}</span>
      <img src={img} alt="article" />
      <div className="article__content">
        <p>{content}</p>
      </div>
      <div className="article__similar">
        Bonus
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Article;
