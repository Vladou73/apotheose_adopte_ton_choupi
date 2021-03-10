/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
// import Cookies from 'js-cookie';
import './style.scss';

const Admin = ({
  handleChangeUsername, handleChangePassword, handleSubmitAdmin, isLogged,
}) => (
  <>
    {
    isLogged && <h1>Bienvenue sur l'espace Admin</h1>
    }
    {
    !isLogged
    && (
    <div className="admin">
      <h1 className="admin__title">Espace Administration</h1>
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
};

export default Admin;
