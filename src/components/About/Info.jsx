import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Info = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div>
      <div className="about__info grid">
        <div className="about__box" style={{background: theme.containerColor, border: theme.border}}>
          <i className="uil uil-trophy about__icon" style={{color: theme.titleColor}}></i>
          <h3 className="about__title" style={{color: theme.titleColor}}>Experince</h3>
          <span className="about__subtitle">4 years working</span>
        </div>
        <div className="about__box" style={{background: theme.containerColor, border: theme.border}}>
          <i className="uil uil-briefcase-alt about__icon" style={{color: theme.titleColor}}></i>
          <h3 className="about__title" style={{color: theme.titleColor}}>Completed</h3>
          <span className="about__subtitle">10 projects</span>
        </div>
        <div className="about__box" style={{background: theme.containerColor, border: theme.border}}>
          <i className="uil uil-life-ring about__icon" style={{color: theme.titleColor}}></i>
          <h3 className="about__title" style={{color: theme.titleColor}}>Support</h3>
          <span className="about__subtitle">Online 24/7</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
