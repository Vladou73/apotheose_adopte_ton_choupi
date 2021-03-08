import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Category = ({ categories, filterCategories }) => (
  <>
    <button
      type="button"
      onClick={filterCategories}
      className="blog__categories__category"
      value="allCategories"
    >
      Voir toutes les catégories
    </button>

    {categories.map((categorie) => (
      <button
        type="button"
        onClick={filterCategories}
        key={categorie.id}
        value={categorie.name}
        className="blog__categories__category"
      >
        {categorie.name}
      </button>
    ))}
  </>
);

Category.propTypes = {
  categories: PropTypes.array.isRequired,
  filterCategories: PropTypes.func.isRequired,
};

export default Category;
