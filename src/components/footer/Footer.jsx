import React from 'react';
import "./footer.css";
import { FiInstagram, FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">BKMN</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://instagram.com/biruk__m" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiInstagram />
                </a>
                <a href="https://twitter.com/Bi2kmes" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiTwitter />
                </a>
                <a href="https://www.github.com/cypghost" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/biruk-mesfin/" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>    
            </div>
            
            <span className="footer__copy">
                <h2 className="footer__title">"It doesn't matter who we are, What matters is our plan."</h2>
                ©2022 Biruk Mesfin
            </span>
        </div>
    </footer>
  );
}

export default Footer;