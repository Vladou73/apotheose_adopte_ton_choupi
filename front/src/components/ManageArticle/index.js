/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Error404 from '../Error404';
import './style.scss';

const ManageArticle = ({
  articles, categories, handleSubmitEditArticle, confirmation,
  handleChangeFirebase, handleUpload, url, handleUploadDelete,
}) => {
  const { id } = useParams();

  const data = articles.find((article) => article.id === parseInt(id, 10));

  if (!data) return <Error404 />;
  const {
    title,
    category_id,
    author_firstname,
    author_lastname,
    created_at,
    content,
    media_url,
  } = data;

  const author = `${author_firstname} ${author_lastname}`;

  const [articleData, setArticleData] = useState({
    title,
    category_id,
    content,
  });

  // Method onChange to edit an article
  const handleChangeEditArticle = (e) => {
    const newData = { ...articleData };
    newData[e.target.id] = e.target.value;
    setArticleData(newData);
    console.log(newData);
  };

  return (

    <div className="article">
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmitEditArticle(id, articleData);
      }}
      >
        <p className={confirmation}>Votre article a été modifié !</p>
        <div className="article__title">
          <label htmlFor="title">Titre de l'article : </label>
          <input onChange={(e) => handleChangeEditArticle(e)} type="text" id="title" className="article__input" name="title" value={articleData.title} />
        </div>
        <div className="article__category">
          <label htmlFor="category">Catégorie : </label>
          <select onChange={(e) => handleChangeEditArticle(e)} name="category_id" id="category_id" value={articleData.category_id}>
            {categories.map((category) => <option id="category_id" value={category.id}>{category.name}</option>)}
          </select>
        </div>
        <div>
          <img src={url || media_url} alt="" className="article__image" />
          <label className="" htmlFor="media">Modifier la photo :</label>
          <input type="file" onChange={handleChangeFirebase} />
          <button type="button" onClick={handleUpload} className="article__upluad">Aperçu de ma photo </button>
          <button type="button" className="article__upluadDelete" onClick={handleUploadDelete}>Supprimer ma photo </button>
          <label className="article__content__label" htmlFor="content">Contenu : </label>
          <textarea onChange={(e) => handleChangeEditArticle(e)} className="article__content__textarea" id="content" name="content" rows="20" cols="100" value={articleData.content} />
          <div className="article__author">
            <p>Auteur : {author}</p>
          </div>
          <div className="article__date">
            <p>Date d'ajout : {created_at}</p>
          </div>
        </div>
        <button className="article__submit" type="submit">Sauvegarder</button>
      </form>
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
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleSubmitEditArticle: PropTypes.func.isRequired,
  confirmation: PropTypes.string.isRequired,
  handleChangeFirebase: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  handleUploadDelete: PropTypes.func.isRequired,
};

export default ManageArticle;
