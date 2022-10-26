import React from "react";
import { motion } from "framer-motion";


const Backend = () => {
  return (
    <motion.div
    whileInView={{ scale: [0, 1] }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <div className="skills__content">
        <h3 className="skills_title">Backend Developer</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="uil uil-award-alt"></i>
              <div>
                <h3 className="skills__name">React</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="uil uil-award-alt"></i>
              <div>
                <h3 className="skills__name">Vue</h3>
                <span className="skills__level">Beginner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Backend;
