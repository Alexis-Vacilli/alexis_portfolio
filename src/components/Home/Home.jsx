import React from "react";
import Data from "./Data";
import "./Home.scss";
import Social from "./Social";
import { motion } from "framer-motion";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <div>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="home__content grid"
          >
            <Social />
            <div className="home__img"> </div>
            <Data />
          </motion.div>
          <ScrollDown />
        </div>
      </section>
    </div>
  );
};

export default Home;
