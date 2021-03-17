import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import classname from 'classnames';

const Category = ({ categories, filterCategories }) => (
  <>

    {categories.map((categorie) => (
      <button
        type="button"
        onClick={filterCategories}
        key={categorie.id}
        value={categorie.name}
        className={classname({
          blog__categories__category: true,
          covid: categorie.name === 'covid',
          actu: categorie.name === 'actu',
          adoption: categorie.name === 'adoption',
          maltraitance: categorie.name === 'maltraitance',
        })}
      >
        {categorie.name}
      </button>
    ))}
    <div>
      <button
        type="button"
        onClick={filterCategories}
        className="blog__categories__category all"
        value="allCategories"
      >
        Voir toutes les catégories
      </button>
    </div>
  </>
);

Category.propTypes = {
  categories: PropTypes.array.isRequired,
  filterCategories: PropTypes.func.isRequired,
};

export default Category;
