import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const ScrollDown = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button__flex" style={{color: theme.titleColor}}>
        <i className="uil uil-mouse-alt-2"></i>
        <div className="home__scroll-name">Scroll Down</div>
        <i className="uil uil-arrow-down"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
