import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

const AdopterSubmenu = () => (
  <ul className="nav__submenu">
    <li className="nav__submenu-item ">
      <NavLink
        to="/info_adoption"
        exact
      >
        Formalités
      </NavLink>
    </li>
    <li className="nav__submenu-item ">
      <NavLink
        to="/animaux"
        exact
      >
        Chercher un animal
      </NavLink>
    </li>
  </ul>
);

export default AdopterSubmenu;
