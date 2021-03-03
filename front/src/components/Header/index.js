import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import Logo from './logo.png';
import AdopterSubmenu from './AdopterSubmenu';
import AgirSubmenu from './AgirSubmenu';

const Header = () => (
  <div className="header">
    <a href="/"><img src={Logo} alt="Logo adopte ton choupi" />
      <h1 className="title">Adopte ton choupi</h1>
    </a>
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__menu-item">
          <NavLink
            to="/"
            exact
          >
            Accueil
          </NavLink>
        </li>
        <li
          className="nav__menu-item"
        >
          <a>Adopter</a>
          <AdopterSubmenu />
        </li>
        <li
          className="nav__menu-item"
        >
          <NavLink
            to="/articles"
            exact
          >
            Blog
          </NavLink>
        </li>
        <li className="nav__menu-item">
          <a>Agir</a>
          <AgirSubmenu />
        </li>
        <li className="nav__menu-item">
          <NavLink
            to="/contact"
            exact
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
    <a href="/don"><span className="donate">Faire un don</span></a>
  </div>
);

export default Header;
