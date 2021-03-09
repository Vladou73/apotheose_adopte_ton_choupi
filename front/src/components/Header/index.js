import React from 'react';
import './style.scss';
import { NavLink, Link } from 'react-router-dom';
import Logo from './logo.png';
import AdopterSubmenu from './AdopterSubmenu';
import AgirSubmenu from './AgirSubmenu';

const Header = ({ isLogged, adminDisconnect }) => (
  <div className="header">
    { isLogged
      ? (
        <>
          <img className="logoHeader" src={Logo} alt="Logo adopte ton choupi" />
          <h1 className="titleHeader">Adopte ton choupi</h1>
          <nav className="nav">
            <ul className="nav__menu">
              <li
                className="nav__menu-item"
              >
                <a>Gestion animaux</a>
              </li>
              <li
                className="nav__menu-item"
              >
                <NavLink
                  to="#"
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
          <a href="/"><img className="logoHeader" src={Logo} alt="Logo adopte ton choupi" />
            <h1 className="titleHeader">Adopte ton choupi</h1>
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
          <Link to="/don"><span className="donate">Faire un don</span></Link>
        </>
      )}
  </div>
);

export default Header;
