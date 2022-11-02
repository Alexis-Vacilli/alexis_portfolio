import React, { useContext } from "react";
import "./Skills.scss";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { ThemeContext } from "../../contexts/ThemeContext";

const Skills = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <section className="skills section" id="skills" style={{background: theme.bodyColor}}>
      <h2 className="section__title" style={{color: theme.titleColor}}>Skills</h2>
      <span className="section__subtitle">My skills</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
