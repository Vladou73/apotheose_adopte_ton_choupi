import React from 'react';
import Categories from './categories';
import Articles from './articles';
import './style.scss';

const Blog = () => (
  <div className="blog">
    <h2 className="blog__title">Nos articles</h2>
    <div className="blog__categories">
      <p className="blog__categories__title">Les catégories</p>
      <Categories />
    </div>
    <div className="blog__articles">
      <Articles />
    </div>
  </div>
);

export default Blog;
