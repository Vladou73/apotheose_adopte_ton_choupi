/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
// import Cookies from 'js-cookie';
import './style.scss';

const Admin = ({
  handleChangeUsername, handleChangePassword, handleSubmitAdmin, isLogged, adminUsername, articlesNumber, animalsNumber,
}) => (
  <>
    {
    isLogged && (
    <div className="admin">
      <h2 className="admin__title">Bienvenue sur l'espace Admin : {adminUsername}</h2>
      <img src="https://media.giphy.com/media/xUPGcyi4YxcZp8dWZq/source.gif" alt="cat welcome" />
      <p className="admin__subtitle">Vous avez actuellement : </p>
      <ul>
        <li><p className="admin__number">{animalsNumber}</p> Animaux à l'adoption</li>
        <li><p className="admin__number">{articlesNumber}</p> Articles dans votre blog</li>
      </ul>
    </div>
    )
    }
    {
    !isLogged
    && (
    <div className="admin">
      <h2 className="admin__title">Espace Administration</h2>
      <form onSubmit={handleSubmitAdmin}>
        <label htmlFor="username" className="admin__username">Nom d'utilisateur :</label>
        <input id="username" name="username" onChange={handleChangeUsername} className="admin__username__input" />
        <label htmlFor="password" className="admin__password">Mot de passe :</label>
        <input id="password" name="password" type="password" onChange={handleChangePassword} className="admin__password__input" />
        <button type="submit" className="admin__submit">Connexion</button>
      </form>
    </div>
    )
  }
  </>
);

Admin.propTypes = {
  handleSubmitAdmin: PropTypes.func.isRequired,
  handleChangeUsername: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  adminUsername: PropTypes.string.isRequired,
  articlesNumber: PropTypes.number.isRequired,
  animalsNumber: PropTypes.number.isRequired,
};

export default Admin;
