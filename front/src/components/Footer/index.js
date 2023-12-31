import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import Logo from './logo.png';
import FacebookLogo from './fb.png';

const Footer = () => (
  <div className="footer">
    <div className="titleFooter">
      <img className="titleFooter__logo" src={Logo} alt="Logo Adope ton choupi" />
      <p className="titleFooter__text">Adopte ton choupi</p>
    </div>
    <div className="adress">
      <p className="adress__street">10 rue Penthièvre</p>
      <p className="adress__country">75008, Paris, France</p>
      <p className="adress__mail">adoptetonchoupi@gmail.com</p>
    </div>
    <div className="copyright">
      <a href="#"><img className="copyright__fbLogo" src={FacebookLogo} alt="Facebook logo" /></a>
      <Link to="/TousDroitsReserves"><p className="copyright__text">© Tous droits réservés</p></Link>
    </div>
  </div>
);

export default Footer;
