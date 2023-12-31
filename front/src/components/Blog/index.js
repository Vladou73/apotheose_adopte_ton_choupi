/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import Category from './category';
import Article from './article';
import './style.scss';

const Blog = ({
  datas, categories, filterCategories, onClickPageArticles,
  pageArticles,
}) => {
  // PAGINATION
  const articlesPerPage = 6;
  const indexOfLastArticle = pageArticles * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = datas.slice(indexOfFirstArticle, indexOfLastArticle);
  return (
    <div className="blog">
      <h2 className="blog__title">L'ensemble de nos articles</h2>
      <div className="blog__categories">
        <Category
          filterCategories={filterCategories}
          categories={categories}
        />
      </div>
      <section className="blog__section">
        <div className="blog__articles__blog">
          {currentArticles.map((data) => <Article key={data.id} {...data} />)}
        </div>
        <Pagination
          activePage={pageArticles}
          itemsCountPerPage={articlesPerPage}
          pageRangeDisplayed={3}
          totalItemsCount={datas.length}
          onChange={onClickPageArticles}
          prevPageText="<"
          firstPageText=".."
          lastPageText=".."
          nextPageText=">"
          innerClass="pagination"
          activeClass="pagination__active"
          itemClass="pagination__li"
        />
      </section>
    </div>
  );
};

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
  // articleCount: PropTypes.number.isRequired,
};

export default Blog;
