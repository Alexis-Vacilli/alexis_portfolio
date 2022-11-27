import React, { useState, useContext } from "react";
import "./Service.scss";
import { motion } from "framer-motion";
import { ThemeContext } from "../../contexts/ThemeContext";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
    console.log("button clicked!");
  };

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <section
      className="services section"
      id="services"
      style={{ background: theme.bodyColor }}
    >
      <h2 className="section__title" style={{ color: theme.titleColor }}>
        Services
      </h2>
      <span className="section__subtitle">The services we can offer</span>
      <div className="services__container container grid">
        <motion.div
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="services__content"
          style={{ border: theme.border }}
        >
          <div>
            <i
              className="uil uil-palette services__icon"
              style={{ color: theme.titleColor }}
            ></i>
            <h3 className="services__title" style={{ color: theme.titleColor }}>
              UI/UX <br /> Designer
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => toggleTab(1)}
            style={{ color: theme.buttonColor }}
          >
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <motion.div
              className="services__modal-content"
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ background: theme.containerColor, border: theme.border }}
            >
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                As a UI UX designer, I am always striving to create interfaces
                that are easy to use and look beautiful. I take into account the
                user's needs and wants when designing my interfaces, and I
                always aim to create a positive user experience.
              </p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="services__content"
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          style={{ border: theme.border }}
        >
          <div>
            <i
              className="uil uil-arrow services__icon"
              style={{ color: theme.titleColor }}
            ></i>
            <h3 className="services__title" style={{ color: theme.titleColor }}>
              Frontend <br /> Developer
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => toggleTab(2)}
            style={{ color: theme.buttonColor }}
          >
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <motion.div
              className="services__modal-content"
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ background: theme.containerColor, border: theme.border }}
            >
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3
                className="services__modal-title"
                style={{ color: theme.titleColor }}
              >
                Frontend
              </h3>
              <p className="services__modal-description">
                I'm an experienced front-end developer with over 5 years in the
                company and over 50 websites and apps developed to date.
              </p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="services__content"
          whileInView={{ y: [150, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          style={{ border: theme.border }}
        >
          <div>
            <i
              className="uil uil-brackets-curly services__icon"
              style={{ color: theme.titleColor }}
            ></i>
            <h3 className="services__title" style={{ color: theme.titleColor }}>
              Backend <br /> Developer
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => toggleTab(3)}
            style={{ color: theme.buttonColor }}
          >
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <motion.div
              className="services__modal-content"
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ background: theme.containerColor, border: theme.border }}
            >
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3
                className="services__modal-title"
                style={{ color: theme.titleColor }}
              >
                Backend
              </h3>
              <p className="services__modal-description">
                I have just over a year of experience as a backend developer with Nodejs, php,... In my short time there, I've already contributed to over a dozen projects and assisted with
                managing one project for one of the firm's long-time clients.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
