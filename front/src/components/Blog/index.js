/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import Category from './category';
import Article from './article';
import './style.scss';

const Blog = ({
  datas, categories, filterCategories, onClickPageArticles,
  pageArticles, articleCount,
}) => (
  <div className="blog">
    <h2 className="blog__title">Nos articles</h2>
    <div className="blog__categories">
      <p className="blog__categories__title">Les catégories</p>
      <Category
        filterCategories={filterCategories}
        categories={categories}
      />
    </div>
    <div className="blog__articles">
      {datas.map((data) => <Article key={data.id} {...data} />)}
    </div>
    <Pagination
      activePage={pageArticles}
      itemsCountPerPage={6}
      pageRangeDisplayed={3}
      totalItemsCount={articleCount}
      onChange={onClickPageArticles}
      prevPageText="<"
      firstPageText=".."
      lastPageText=".."
      nextPageText=">"
      innerClass="pagination"
      activeClass="pagination__active"
      itemClass="pagination__li"
    />
  </div>
);

Blog.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  categories: PropTypes.array.isRequired,
  filterCategories: PropTypes.func.isRequired,
  onClickPageArticles: PropTypes.func.isRequired,
  pageArticles: PropTypes.number.isRequired,
  articleCount: PropTypes.number.isRequired,
};

export default Blog;
