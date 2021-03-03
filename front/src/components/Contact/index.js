/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './style.scss';

const Contact = () => (
  <div className="contact">
    <form>
      <h2 className="contact__title">Formulaire de contact</h2>
      <label htmlFor="name">Votre nom (requis) :</label>

      <input
        type="text"
        id="name"
        name="name"
        required
        minLength="5"
        maxLength="20"
        size="20"
      />
      <label htmlFor="email">Votre e-mail (requis) :</label>

      <input type="email" id="email" pattern=".+@globex.com" size="20" required />
      <label htmlFor="category-select">Catégorie :</label>
      <select id="category-select">
        <option value="">-- Choisissez une catégorie --</option>
        <option value="adopter">Adopter un animal</option>
        <option value="participer">Participer occasionnellement</option>
        <option value="rejoindre">Rejoindre l'association</option>
        <option value="don">Faire un don</option>
        <option value="autre">Autre</option>
      </select>
      <label className="contact__content" htmlFor="content">Votre message :</label>
      <textarea className="contact__contentField" name="content" rows="10" cols="60" />
      <button className="contact__submitButton" type="submit">Envoyer</button>
    </form>
  </div>
);

export default Contact;
