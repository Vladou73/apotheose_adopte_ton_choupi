import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TrashIcon from './trash.png';

// == Import
import './styles.scss';

const deleteArticle = () => {
  console.log('delete article');
};

const ManageArticles = ({ articles }) => (
  <div className="manageArticles">
    <h2 className="manageArticles__title">Liste des articles :</h2>
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
              <img src={TrashIcon} alt="supprimer" className="manageArticles__trashIcon" onClick={deleteArticle} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

ManageArticles.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ManageArticles;
