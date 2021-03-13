/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Maps from './maps';
import './style.scss';

const Contact = () => {
  const [sent, setSent] = useState('hidden');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7bte7pa', 'template_99pe6lg', e.target, 'user_cSO2WlUe84NqrUR3pJH05')
      .then((result) => {
        console.log(result.text);
        if (result.status === 200) setSent('visible');
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div className="containerContact">
      <div className="contact">
        <form onSubmit={sendEmail}>
          <h2 className="contact__title">Formulaire de contact</h2>
          <label htmlFor="name">Votre nom (requis) :</label>

          <input
            type="text"
            id="name"
            name="name"
            required
            minLength="1"
            maxLength="20"
            size="20"
          />
          <label htmlFor="email">Votre e-mail (requis) :</label>

          <input type="email" id="email" name="email" size="20" required />
          <label htmlFor="category-select">Catégorie :</label>
          <select name="category" id="category-select">
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
          <p className={sent}>Votre message a bien été envoyé !</p>
        </form>
      </div>
      <div className="maps">
        <h2 className="maps__title">Trouver notre association :</h2>
        <Maps />
      </div>
    </div>
  );
};

export default Contact;
