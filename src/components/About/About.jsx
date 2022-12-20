import React, { useContext } from "react";
import AboutImg from "../../assets/alexis.jpg";
import Info from "./Info";
import "./About.scss";
import { motion } from "framer-motion";
import { ThemeContext } from "../../contexts/ThemeContext";


const About = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <section
      className="about section"
      id="about"
      style={{ background: theme.bodyColor }}
    >
      <h2 className="section__title" style={{ color: theme.titleColor }}>
        About Me
      </h2>
      <div className="section__subtitle">My introduction</div>
      <div className="about__container container grid">
        <div className="about__img">
          <img
            src={AboutImg}
            alt="me"
            style={{ filter: "grayscale(100%)", opacity: ".6" }}
          />
        </div>
        <motion.div
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="about__data"
        >
          <Info />
          <p className="about__description">
            I have extensive experience working both alone and as part of the
            team on often time-sensitive, challenging web development projects
            that require outstanding create and technical capabilities and the
            ability to ensure all work is optimised across a wide range of
            platforms.
          </p>
          <a
            href="N. Alex CV.pdf"
            className="button button__flex"
            style={{
              backgroundColor: theme.buttonColor,
              color: theme.buttonTextColor,
            }}
          >
            Download CV
            <i className="uil uil-file-info-alt"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
