/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import classname from 'classnames';
import './style.scss';
import Error404 from '../Error404';

const Article = ({ article }) => {
  const { id } = useParams();
  console.log(id);

  const data = article.find((articleObject) => articleObject.id === parseInt(id, 10));
  console.log(data);

  if (!data) return <Error404 />;
  const {
    title, category_name, author_firstname, author_lastname, media_url, content, created_at,
  } = data;

  return (
    <div className="article">
      <h2 className="article__title">{title}</h2>
      <span className={classname({
        blog__article__category: true,
        covid: data.category_name === 'covid',
        actu: data.category_name === 'actu',
        adoption: data.category_name === 'adoption',
        maltraitance: data.category_name === 'maltraitance',
      })}
      >{category_name}
      </span>
      <img src={media_url} alt={title} />
      <div className="article__content">
        <p>{content}</p>
        <span className="article__author">{author_firstname} {author_lastname}</span>
        <span className="article__date">{created_at}</span>
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author_firstname: PropTypes.string.isRequired,
      author_lastname: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      media_url: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      category_name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Article;
