/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TrashIcon from './trash.png';
import EditIcon from './edit.png';

import './styles.scss';
// == Import

const ManageArticles = ({
  articles, deleteArticle, modalAddArticleIsOpen, handleSubmitAddArticle, handleChangeAddArticle, changeModalStateAddArticle, confirmationAdd, confirmationDelete, categories, handleChangeFirebase, handleUpload, url, progress,
}) => (
  <div className="manageArticles">
    <h2 className="manageArticles__title">Liste des articles :</h2>
    <p className={confirmationAdd}>Votre article a été ajouté !</p>
    <p className={confirmationDelete}>L'article a été supprimé !</p>
    <button type="button" className="manageArticles__link__add" onClick={changeModalStateAddArticle}>Ajouter</button>
    <Modal isOpen={modalAddArticleIsOpen}>
      <button type="button" onClick={changeModalStateAddArticle} className="manageArticles__closeModal">X</button>
      <h3 className="manageArticles__titleModal">Ajouter un article</h3>
      <div className="formAddArticle">
        <form onSubmit={handleSubmitAddArticle}>
          <label className="formAddArticle__label__title" htmlFor="title">Titre de l'article : </label>
          <input onChange={(e) => handleChangeAddArticle(e)} id="title" name="title" type="text" />
          <label className="formAddArticle__label__category" htmlFor="category-select">Catégorie :</label>
          <select onChange={(e) => handleChangeAddArticle(e)} className="formAddArticle__select" name="category_id" id="category_id">
            <option value="">-- Choisissez une catégorie --</option>
            {categories.map((category) => <option id="category_id" value={category.id}>{category.name}</option>)}
          </select>
          {/*
          <label className="formAddArticle__label__favoris" htmlFor="pin">Favoris</label>
          <input onChange={(e) => handleChangeAddArticle(e)} type="checkbox" id="pin" name="pin" value="false" />
          */}
          <div>
            <label className="formAddArticle__label__content" htmlFor="media">Médias :</label>
            <input type="file" onChange={handleChangeFirebase} />
            <progress value={progress} max="100" />
            <button type="button" onClick={handleUpload} className="formAddArticles__upluad">Aperçu de ma photo </button>
            <img src={url} alt="" className="formAddArticle__image" />
          </div>
          <label className="formAddArticle__label__content" htmlFor="content">Contenu : </label>
          <textarea onChange={(e) => handleChangeAddArticle(e)} id="content" name="content" rows="20" cols="100" className="formAddArticle__content" />
          <button type="submit" className="manageArticles__add">Ajouter</button>
        </form>
      </div>
    </Modal>
    <table className="manageArticles__table">
      <tbody>
        <tr>
          <td className="manageArticles__table__head">Auteur</td>
          <td className="manageArticles__table__head">Titre</td>
          <td className="manageArticles__table__head">Date</td>
          <td className="manageArticles__table__head">Catégorie</td>
          <td className="manageArticles__table__head">Options</td>
        </tr>
        {articles.map((article) => (
          <tr>
            <td>{article.author_firstname} {article.author_lastname}</td>
            <td>{article.title}</td>
            <td>{article.created_at}</td>
            <td>{article.category_name}</td>
            <td>
              <Link to={`/admin/gestion-articles/${article.id}`} className="manageArticles__link">
                <img
                  src={EditIcon}
                  alt="editer"
                  className="manageArticles__editIcon"
                />
              </Link>
              <img
                src={TrashIcon}
                alt="supprimer"
                className="manageArticles__trashIcon"
                onClick={(event) => {
                  event.preventDefault();
                  deleteArticle(article);
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

ManageArticles.propTypes = {
  articles: PropTypes.array.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  modalAddArticleIsOpen: PropTypes.bool.isRequired,
  handleSubmitAddArticle: PropTypes.func.isRequired,
  handleChangeAddArticle: PropTypes.func.isRequired,
  changeModalStateAddArticle: PropTypes.func.isRequired,
  confirmationAdd: PropTypes.string.isRequired,
  confirmationDelete: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleChangeFirebase: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default ManageArticles;
