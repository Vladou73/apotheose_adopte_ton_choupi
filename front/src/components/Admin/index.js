/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './style.scss';

const Admin = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit');
  };

  return (
    <div className="admin">
      <h1 className="admin__title">Espace administration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="admin__username">Nom d'utilisateur :</label>
        <input id="username" name="username" />
        <label htmlFor="password" className="admin__password">Mot de passe :</label>
        <input id="password" name="password" />
        <button type="submit" className="admin__submit">Connexion</button>
      </form>
    </div>
  );
};

export default Admin;
