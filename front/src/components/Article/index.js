/* eslint-disable max-len */
import React from 'react';
import imageArticle from './image-article.jpg';
import './style.scss';

const Article = () => (
  <div className="article">
    <h2 className="article__title">Titre de l'article</h2>
    <span className="article__category">Catégorie</span>
    <span className="article__author">Autheur</span>
    <span className="article__date">Date de publication</span>
    <img src={imageArticle} alt="article" />
    <div className="article__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est urna, dapibus eget convallis eget, volutpat nec nisi. Suspendisse potenti. Sed ut viverra elit. Mauris auctor libero ullamcorper nunc sollicitudin elementum. Aenean dictum, elit ut sollicitudin aliquet, tellus lacus dictum erat, at euismod sapien justo ac urna. Fusce ut eleifend sem. Donec scelerisque ligula leo, sed lobortis sem ullamcorper sit amet. Proin vitae mauris dignissim, feugiat massa nec, porttitor sem. Cras vulputate ipsum at lectus semper fringilla.</p>

      <p>Mauris euismod ex id mauris aliquet, eget viverra urna placerat. Sed sit amet lacinia neque. Nullam consequat mollis mauris, nec aliquet turpis mattis vitae. Mauris eget dictum odio. Nam sem elit, tempus id feugiat sed, consectetur eu nunc. Ut quis pharetra risus. Fusce vehicula sem dui, gravida efficitur dui dapibus non. Maecenas lobortis urna in dui eleifend, id facilisis purus hendrerit. Aenean imperdiet maximus tortor, eu suscipit tortor dapibus vitae. Vestibulum ac semper arcu, et sodales elit.</p>

      <p>Nulla mollis massa lectus. Donec sed accumsan nunc. Vivamus in velit ut neque iaculis condimentum quis sit amet ex. Praesent vel luctus lorem, in pretium augue. Vestibulum nibh dui, tincidunt consectetur lacus eu, fermentum condimentum lectus. Ut in elit bibendum, pulvinar nunc eu, interdum sapien. Curabitur arcu turpis, lobortis at semper vitae, convallis a arcu.</p>

      <p>Maecenas aliquam nunc placerat, bibendum magna at, cursus felis. Nunc ligula turpis, cursus et nisi eu, condimentum auctor odio. Duis dignissim purus sed ligula auctor, nec facilisis diam placerat. Quisque elementum ipsum ut risus sodales laoreet. Vivamus mauris dolor, venenatis vel quam non, sollicitudin lacinia felis. Suspendisse sit amet elementum eros. Pellentesque diam lacus, sodales non dapibus non, tempus ut leo. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam tempus lacinia mollis. Maecenas ornare mi vitae tempor gravida. Aenean eu condimentum velit, quis laoreet metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vitae est dapibus, porttitor sem eget, tempor justo.
      </p>
    </div>
    <div className="article__similar">
      Bonus
    </div>
  </div>
);

export default Article;
