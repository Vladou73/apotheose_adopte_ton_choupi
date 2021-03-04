import React from 'react';
import './style.scss';

const Category = (data) => (
  <>
    <a href="#"><span className="blog__categories__category">{data.category}</span></a>
  </>
);

export default Category;
