import React from "react";
// import AboutImg from '../../assets/me.png';
import Info from "./Info";
import "./About.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="section__subtitle">My introduction</div>
      <div className="about__container container grid">
        <div className="about__img"></div>
        <motion.div
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="about__data"
        >
          <Info />
          <p className="about__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ut
            minima inventore. Quos at fugiat, consequatur nemo architecto
            dignissimos officia?
          </p>
          <a href="j" className="button button__flex">
            Download CV
            <i className="uil uil-file-info-alt"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
