import React from 'react';
import { Link } from 'react-router-dom';
import classname from 'classnames';

import './style.scss';

const Article = (data) => {
  const content = `${data.content.substring(0, 200)}...`;
  return (
    <Link to={`/articles/${data.id}`}>
      <div className="blog__article">
        <h2 className="blog__article__title">{data.title}</h2>
        <span
          className={classname({
            blog__article__category: true,
            covid: data.category_name === 'covid',
            actu: data.category_name === 'actu',
            adoption: data.category_name === 'adoption',
            maltraitance: data.category_name === 'maltraitance',
          })}
        >{data.category_name}
        </span>
        <img src={data.media_url} alt="article" className="blog__article__picture" />
        <p className="blog__article__content">{content}</p>
        <p className="blog__article__more">En savoir d'avantage..</p>
      </div>
    </Link>
  );
};

export default Article;
