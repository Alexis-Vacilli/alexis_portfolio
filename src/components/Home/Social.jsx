import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Social = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className="home__social">
      <a href="https://twitter.com/alexis_vacilli" rel="noreferrer" className="home__social-icon" target="_blank" style={{color: theme.titleColor}}>
        <i className="uil uil-twitter-alt"></i>
      </a>
      <a href="https://github.com/Alexis-Vacilli" rel="noreferrer" className="home__social-icon" target="_blank" style={{color: theme.titleColor}}>
        <i className="uil uil-github-alt"></i>
      </a>
      <a href="https://www.linkedin.com/in/alexis-vacilli-024961197/" className="home__social-icon" rel="noreferrer" target="_blank" style={{color: theme.titleColor}}>
        <i className="uil uil-linkedin-alt"></i>
      </a>
    </div>
  );
};

export default Social;
