import React from 'react';
import './style.scss';

const Category = ({categories, filterCategories}) => {
  return (
    <>
      <button onClick={filterCategories} className="blog__categories__category" value="allCategories">Voir toutes les catégories</button>
      {categories.map((categorie) => <button onClick={filterCategories} key={categorie.id} value={categorie.name} className="blog__categories__category">{categorie.name}</button>)}
    </>
  )
};

export default Category;
