import React, { useContext } from "react";
import "./Footer.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

const Footer = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <footer
      className="footer"
      style={{ background: theme.bodyColor, borderTop: theme.border }}
    >
      <div className="footer__container container">
        <h1 className="footer__title" style={{ color: theme.titleColor }}>
          Alexis
        </h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://twitter.com/alexis_vacilli"
            rel="noreferrer"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-twitter-alt"></i>
          </a>
          <a
            href="https://github.com/Alexis-Vacilli"
            rel="noreferrer"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/alexis-vacilli-024961197/"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; 2022 all rights reserved alexis vacilli</span>
      </div>
    </footer>
  );
};

export default Footer;
