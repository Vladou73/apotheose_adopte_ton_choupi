import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Logo from './logo.png';
import AdopterSubmenu from './AdopterSubmenu';
import AgirSubmenu from './AgirSubmenu';

const Header = ({ isLogged, adminDisconnect }) => (
  <div className="header">
    { isLogged
      ? (
        <>
          <Link to="/admin"><img className="logoHeader" src={Logo} alt="Logo adopte ton choupi" />
            <h1 className="titleHeader">Adopte ton choupi</h1>
          </Link>
          <nav className="nav">
            <ul className="nav__menu">
              <li
                className="nav__menu-item"
              >
                <NavLink
                  to="/admin/gestion-animaux"
                  exact
                >
                  Gestion animaux
                </NavLink>
              </li>
              <li
                className="nav__menu-item"
              >
                <NavLink
                  to="/admin/gestion-articles"
                  exact
                >
                  Gestion articles
                </NavLink>
              </li>
            </ul>
          </nav>
          <button onClick={adminDisconnect} type="button" className="disconnect">Se déconnecter</button>
        </>
      )
      : (
        <>
          <Link to="/"><img className="logoHeader" src={Logo} alt="Logo adopte ton choupi" />
            <h1 className="titleHeader">Adopte ton choupi</h1>
          </Link>
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
                className="nav__menu-items-withSubitems"
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
                <NavLink
                  to="/rejoindre"
                  exact
                >
                  Agir
                </NavLink>
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
          <Link to="/don"><span className="donate">Faire un don</span></Link>
        </>
      )}
  </div>
);

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  adminDisconnect: PropTypes.func.isRequired,
};

export default Header;
