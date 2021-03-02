import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import Logo from './logo.png';

const Header = () => (
  <div className="header">
    <img src={Logo} alt="Logo adopte ton choupi" />
    <h1 className="title">Adopte ton choupi</h1>
    <nav className="menu">
      <NavLink
        className="menu-link"
        to="/"
        activeClassName="menu-link--active"
        exact
      >
        Accueil
      </NavLink>
      <NavLink
        className="menu-link"
        to="/animaux"
        activeClassName="menu-link--active"
        exact
      >
        Adopter
      </NavLink>
      <NavLink
        className="menu-link"
        to="/articles"
        activeClassName="menu-link--active"
        exact
      >
        Blog
      </NavLink>
      <NavLink
        className="menu-link"
        to="/agir"
        activeClassName="menu-link--active"
        exact
      >
        Agir
      </NavLink>
      <NavLink
        className="menu-link"
        to="/contact"
        activeClassName="menu-link--active"
        exact
      >
        Contact
      </NavLink>
      <a href="#"><span className="donate">Faire un don</span></a>
    </nav>
  </div>
);

export default Header;
