/* eslint-disable jsx-a11y/label-has-associated-control */
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
        <label htmlFor="title">Titre de l'article : </label>
        <input type="text" id="title" name="title" placeholder={title} />
      </div>

      <div className="article__category">
        <label htmlFor="category">Catégorie : </label>
        <input type="text" id="category" name="category" placeholder={category_name} />
      </div>

      <div className="article__author">
        <label htmlFor="author">Auteur : </label>
        <input type="text" id="author" name="author" placeholder={author} />
      </div>

      <div className="article__date">
        <p>Date d'ajout : {created_at}</p>
      </div>

      <img src={media_url} alt={title} />

      <div className="article__content">
        <label className="article__content__label" htmlFor="content">Contenu : </label>
        <textarea className="article__content__textarea" id="content" name="content" rows="20" cols="100" placeholder={content} />
      </div>
      <button className="article__submit" type="submit">Sauvegarder</button>
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
