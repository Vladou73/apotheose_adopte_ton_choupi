import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

const ManageArticles = ({ articles }) => (
  <div className="manageArticles">
    <Link to="/admin/gestion-articles/1" className="manageArticles__link"> articles 1 </Link>
    <Link to="#" className="manageArticles__link__add"> Ajouter </Link>
    <Link to="#" className="manageArticles__link__delete"> Supprimer </Link>
    <table className="manageArticles__table">
      <tbody>
        <tr>
          <td />
          <td>Auteur</td>
          <td>Titre</td>
          <td>Date</td>
          <td>Tag</td>
        </tr>
        {articles.map((article) => (
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>{article.author_firstname} {article.author_lastname}</td>
            <td>{article.title}</td>
            <td>{article.created_at}</td>
            <td>{article.category_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

ManageArticles.propTypes = {};

export default ManageArticles;
