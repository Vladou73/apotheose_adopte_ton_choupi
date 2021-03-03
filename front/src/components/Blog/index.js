import React from 'react';
import imageArticle from './image-article.jpg';
import './style.scss';

const Blog = () => (
  <div className="blog">
    <h2 className="blog__title">Nos articles</h2>
    <div className="blog__categories">
      <p className="blog__categories__title">Les catégories</p>
      <a href="#"><span className="blog__categories__category">Catégorie1</span></a>
      <a href="#"><span className="blog__categories__category">Catégorie2</span></a>
      <a href="#"><span className="blog__categories__category">Catégorie3</span></a>
      <a href="#"><span className="blog__categories__category">Catégorie4</span></a>
      <a href="#"><span className="blog__categories__category">Catégorie5</span></a>
    </div>
    <div className="blog__articles">
      <div className="blog__article">
        <h3 className="blog__article__title">Nom de l'article</h3>
        <span className="blog__article__category">Catégorie</span>
        <img src={imageArticle} alt="article" />
        <p className="blog__article__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est urna, dapibus eget convallis eget, volutpat nec nisi. Suspendisse potenti. Sed ut viverra elit. Mauris auctor libero ullamcorper nunc sollicitudin elementum. Aenean dictum, elit ut sollicitudin aliquet, tellus lacus dictum erat, at euismod sapien justo ac urna. Fusce ut eleifend sem.</p>
        <a href="#" className="blog__article__more"><p>Lire plus...</p></a>
      </div>
      <div className="blog__article">
        <h3 className="blog__article__title">Nom de l'article</h3>
        <span className="blog__article__category">Catégorie</span>
        <img src={imageArticle} alt="article" />
        <p className="blog__article__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est urna, dapibus eget convallis eget, volutpat nec nisi. Suspendisse potenti. Sed ut viverra elit. Mauris auctor libero ullamcorper nunc sollicitudin elementum. Aenean dictum, elit ut sollicitudin aliquet, tellus lacus dictum erat, at euismod sapien justo ac urna. Fusce ut eleifend sem.</p>
        <a href="#" className="blog__article__more"><p>Lire plus...</p></a>
      </div>
    </div>
  </div>
);

export default Blog;
