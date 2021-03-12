import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import iconGitHub from '../../images/iconGitHub.svg';
import iconFB from '../../images/iconFB.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
      <section className="footer__nav-container">
        <nav className="footer__nav">
          <Link className="footer__nav-item" to="/">Главная</Link>
          <a className="footer__nav-item" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
        </nav>
        <nav className="footer__nav-icon">
          <a className="footer__nav-item" href="https://github.com" target="_blank" rel="noreferrer"><img src={iconGitHub} alt="Иконка GitHub" /></a>
          <a className="footer__nav-item" href="https://facebook.com/" target="_blank" rel="noreferrer"><img src={iconFB} alt="Иконка Facebook" /></a>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
