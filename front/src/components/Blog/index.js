import React from 'react';
import PropTypes from 'prop-types';
import Categories from './categories';
import Article from './article';
import './style.scss';

const Blog = ({ datas }) => {
  console.log(datas);
  return (
    <div className="blog">
      <h2 className="blog__title">Nos articles</h2>
      <div className="blog__categories">
        <p className="blog__categories__title">Les catégories</p>
        <Categories />
      </div>
      <div className="blog__articles">
        {datas.map((data) => <Article key={data.id} {...data} />)}
      </div>
    </div>
  );
};

Blog.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Blog;
