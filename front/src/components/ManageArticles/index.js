import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

const ManageArticles = () => (
  <div>
    <Link to="/admin/gestion-articles/1"> articles 1 </Link>
    <p>Gestion articles</p>
  </div>
);

ManageArticles.propTypes = {};

export default ManageArticles;
