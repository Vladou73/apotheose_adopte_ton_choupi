import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

const AgirSubmenu = () => (
  <ul className="nav__submenu">
    <li className="nav__submenu-item">
      <NavLink
        to="/rejoindre"
        exact
      >
        Rejoindre l'association
      </NavLink>
    </li>
  </ul>
);

export default AgirSubmenu;
