import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";


const Data = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  

  return (
    <div className="home__data">
      <h1
        className="home__title"
        style={{
          color: theme.titleColor,
        }}
      >
        Alexis Vacilli👋🏾{" "}
      </h1>{" "}
      <h3
        className="home__subtitle"
        style={{
          color: theme.titleColor,
        }}
      >
        Software developer
      </h3>{" "}
      <p className="home__description">
        I take my work as a software developer seriously and this means I will
        always ensure my skills are kept up to date within this rapidly changing
        industry{" "}
      </p>{" "}
      <a
        href="#contact"
        className="button button--flex"
        style={{
          backgroundColor: theme.buttonColor,
          color: theme.buttonTextColor,
        }}
      >
        Get in touch <i className="uil uil-message"> </i>{" "}
      </a>{" "}
    </div>
  );
};

export default Data;
