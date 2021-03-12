/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TrashIcon from './trash.png';
// == Import

import './styles.scss';

const ManageArticles = ({
  articles, deleteArticle, modalAddArticleIsOpen, handleSubmitAddArticle, handleChangeAddArticle, changeModalStateAddArticle,
}) => (
  <div className="manageArticles">
    <h2 className="manageArticles__title">Liste des articles :</h2>
    <button type="button" className="manageArticles__link__add" onClick={changeModalStateAddArticle}>Ajouter</button>
    <Modal isOpen={modalAddArticleIsOpen}>
      <button type="button" onClick={changeModalStateAddArticle} className="manageArticles__closeModal">Fermer</button>
      <h3>Ajouter un article</h3>
      <div className="formAddArticle">
        <form onSubmit={handleSubmitAddArticle}>
          <label htmlFor="title">Titre de l'article : </label>
          <input onChange={(e) => handleChangeAddArticle(e)} id="title" name="title" type="text" />
          <label htmlFor="content">Contenu : </label>
          <textarea onChange={(e) => handleChangeAddArticle(e)} id="content" name="content" rows="20" cols="100" />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </Modal>
    <table className="manageArticles__table">
      <tbody>
        <tr>
          <td className="manageArticles__table__head">Auteur</td>
          <td className="manageArticles__table__head">Titre</td>
          <td className="manageArticles__table__head">Date</td>
          <td className="manageArticles__table__head">Tag</td>
          <td />
        </tr>
        {articles.map((article) => (
          <tr>
            <td>{article.author_firstname} {article.author_lastname}</td>
            <td><Link to={`/admin/gestion-articles/${article.id}`} className="manageArticles__link">{article.title}</Link></td>
            <td>{article.created_at}</td>
            <td>{article.category_name}</td>
            <td>
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
};

export default ManageArticles;
