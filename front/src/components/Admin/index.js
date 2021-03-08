/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Admin = ({
  inputUsernameAdmin, handleChangeUsername, inputPasswordAdmin, handleChangePassword,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`username : ${inputUsernameAdmin} password : ${inputPasswordAdmin}`);
  };

  return (
    <div className="admin">
      <h1 className="admin__title">Espace Administration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="admin__username">Nom d'utilisateur :</label>
        <input id="username" name="username" value={inputUsernameAdmin} onChange={handleChangeUsername} className="admin__username__input" />
        <label htmlFor="password" className="admin__password">Mot de passe :</label>
        <input id="password" name="password" alue={inputPasswordAdmin} onChange={handleChangePassword} className="admin__password__input" />
        <button type="submit" className="admin__submit">Connexion</button>
      </form>
    </div>
  );
};

Admin.propTypes = {
  inputUsernameAdmin: PropTypes.string.isRequired,
  handleChangeUsername: PropTypes.func.isRequired,
  inputPasswordAdmin: PropTypes.string.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
};

export default Admin;
