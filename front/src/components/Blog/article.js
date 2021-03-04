import React from 'react';
import { Link } from 'react-router-dom';
import imageArticle from './image-article.jpg';
import './style.scss';

const Article = (data) => {
  const excerpt = data.content.substring(0, 200);
  return (
    <>
      <div className="blog__article">
        <h3 className="blog__article__title">{data.title}</h3>
        <span className="blog__article__category">{data.category}</span>
        <img src={data.img} alt="article" />
        <p className="blog__article__content">{excerpt}</p>
        <Link className="blog__article__more" to="/articles/article">Lire plus...</Link>
      </div>
    </>
  );
};

export default Article;
