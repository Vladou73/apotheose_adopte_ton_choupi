import React from 'react';
import { Link } from 'react-router-dom';
import TrashIcon from './trash.png';

// == Import
import './styles.scss';

const deleteArticle = () => {
  console.log('delete article');
};

const ManageArticles = ({ articles }) => (
  <div className="manageArticles">
    <Link to="/admin/gestion-articles/1" className="manageArticles__link"> articles 1 </Link>
    <table className="manageArticles__table">
      <tbody>
        <tr>
          <td>Auteur</td>
          <td>Titre</td>
          <td>Date</td>
          <td>Tag</td>
          <td />
        </tr>
        {articles.map((article) => (
          <tr>
            <td>{article.author_firstname} {article.author_lastname}</td>
            <td>{article.title}</td>
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

ManageArticles.propTypes = {};

export default ManageArticles;
