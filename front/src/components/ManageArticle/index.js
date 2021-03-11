import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Error404 from '../Error404';

const ManageArticle = ({ articles }) => {
  const { id } = useParams();

  const data = articles.find((article) => article.id === parseInt(id, 10));

  if (!data) return <Error404 />;
  const {
    title,
    category_name,
    author_firstname,
    author_lastname,
    created_at,
    content,
    media_url,
  } = data;

  const author = author_firstname + ' ' + author_lastname

  return (

    <div className="article">
      <div className="article__title">
        <input type="text" id="title" name="ut ultrices vel augue vestibulum" value={title} />
        <button type="button">edit</button>
      </div>

      <div className="article__category">
        <input type="text" id="category" name="Histoires" value={category_name} />
        <button type="button">edit</button>
      </div>

      <div className="article__author">
        <input type="text" id="author" name="Léane" value={author} />
        <button type="button">edit</button>
      </div>

      <div className="article__date">
        <input type="text" id="date" name="19/01/2021" value={created_at} />
        <button type="button">edit</button>
      </div>

      <img src={media_url} alt={title} />

      <div className="article__content">
        <input type="text" id="content" name="Lorem ipsum" value={content} />
        <button type="button">edit</button>
      </div>
    </div>
  );
};

ManageArticle.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category_name: PropTypes.string.isRequired,
      author_firstname: PropTypes.string.isRequired,
      media_url: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ManageArticle;
