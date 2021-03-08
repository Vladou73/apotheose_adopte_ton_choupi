import React from 'react';
import { Link } from 'react-router-dom';
// import imageArticle from './image-article.jpg';

import './style.scss';

const Article = (data) => {
  const content = `${data.content.substring(0, 200)}...`;
  return (
    <>
      <div className="blog__article">
        <h3 className="blog__article__title">{data.title}</h3>
        <span className="blog__article__category">{data.category_name}</span>
        <img src={data.media_url} alt="article" />
        <p className="blog__article__content">{content}</p>
        <Link className="blog__article__more" to={`/articles/${data.id}`}>Lire plus...</Link>
      </div>
    </>
  );
};

export default Article;
