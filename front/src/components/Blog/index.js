import React from 'react';
import PropTypes from 'prop-types';
import Category from './category';
import Article from './article';
import './style.scss';

const Blog = ({ datas, categories, filterCategories }) => (
  <div className="blog">
    <h2 className="blog__title">Nos articles</h2>
    <div className="blog__categories">
      <p className="blog__categories__title">Les catégories</p>
      <Category
      filterCategories={filterCategories}
      categories={categories}/>
    </div>
    <div className="blog__articles">
      {datas.map((data) => <Article key={data.id} {...data} />)}
    </div>
  </div>
);

Blog.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Blog;
