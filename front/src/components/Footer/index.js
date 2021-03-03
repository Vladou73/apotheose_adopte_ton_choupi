import React from 'react';
import './styles.scss';
import Logo from './logo.png';
import FacebookLogo from './fb.png';

const Footer = () => (
  <div className="footer">
    <div className="title">
      <img className="title__logo" src={Logo} alt="Logo Adope ton choupi" />
      <p className="title__text">Adopte ton choupi</p>
    </div>
    <div className="adress">
      <p className="adress__street">123 rue,</p>
      <p className="adress__country">12345 Ville, Pays</p>
      <p className="adress__mail">bonjour@siteweb.com</p>
    </div>
    <div className="copyright">
      <a href="#"><img className="copyright__fbLogo" src={FacebookLogo} alt="Facebook logo" /></a>
      <p className="copyright__text">© Tous droits réservés</p>
    </div>
  </div>
);

export default Footer;
