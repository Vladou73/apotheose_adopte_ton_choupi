import React from 'react';
import PropTypes from 'prop-types';

const ManageArticle = ({ articles }) => {
  console.log(articles);

  return (

      <div className="article">
        <div className="article__title">
          <input type="text" id="title" name="ut ultrices vel augue vestibulum" value={articles.title}/>
          <button>edit</button>
        </div>

        <div className="article__category">
          <input type="text" id="category" name="Histoires" value={articles.category_name}/>
          <button>edit</button>
        </div>

        <div className="article__author">
          <input type="text" id="author" name="Léane" value={articles.author_firstname}/>
          <button>edit</button>
        </div>

        <div className="article__date">
          <input type="text" id="date" name="19/01/2021" value={articles.created_at}/>
          <button>edit</button>
        </div>

        <img src={articles.media_url}/>

        <div className="article__content">
          <input type="text" id="content" name="Lorem ipsum" value={articles.content}/>
          <button>edit</button>
        </div>

        <div className="article__similar">
          Bonus
        </div>
      </div>
  )
};

ManageArticle.propTypes = {
  articles: PropTypes.arrayOf (
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category_name: PropTypes.string.isRequired,
      author_firstname: PropTypes.string.isRequired,
      media_url: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ManageArticle;
