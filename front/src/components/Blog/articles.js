import React from 'react';
import { Link } from 'react-router-dom';
import imageArticle from './image-article.jpg';
import './style.scss';

const Articles = () => (
  <>
    <div className="blog__article">
      <h3 className="blog__article__title">Nom de l'article</h3>
      <span className="blog__article__category">Catégorie</span>
      <img src={imageArticle} alt="article" />
      <p className="blog__article__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est urna, dapibus eget convallis eget, volutpat nec nisi. Suspendisse potenti. Sed ut viverra elit. Mauris auctor libero ullamcorper nunc sollicitudin elementum. Aenean dictum, elit ut sollicitudin aliquet, tellus lacus dictum erat, at euismod sapien justo ac urna. Fusce ut eleifend sem.</p>
      <Link className="blog__article__more" to="/articles/article">Lire plus...</Link>
    </div>
    <div className="blog__article">
      <h3 className="blog__article__title">Nom de l'article</h3>
      <span className="blog__article__category">Catégorie</span>
      <img src={imageArticle} alt="article" />
      <p className="blog__article__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est urna, dapibus eget convallis eget, volutpat nec nisi. Suspendisse potenti. Sed ut viverra elit. Mauris auctor libero ullamcorper nunc sollicitudin elementum. Aenean dictum, elit ut sollicitudin aliquet, tellus lacus dictum erat, at euismod sapien justo ac urna. Fusce ut eleifend sem.</p>
      <Link className="blog__article__more" to="/articles/article">Lire plus...</Link>
    </div>
  </>
);

export default Articles;
