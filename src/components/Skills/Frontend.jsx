import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../contexts/ThemeContext";
import {FaSass} from 'react-icons/fa';
import {TbBrandNextjs} from 'react-icons/tb';
import {SiTailwindcss} from 'react-icons/si';
import {SiRedux } from 'react-icons/si';




const Frontend = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <motion.div
      whileInView={{ scale: [0, 1] }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div
        className="skills__content"
        style={{ background: theme.containerColor, border: theme.border }}
      >
        <h3 className="skills_title" style={{ color: theme.titleColor }}>
          Frontend Developer
        </h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
            <i class="uil uil-java-script"></i>
              <div>
                <h3
                  className="skills__name"
                  style={{ color: theme.titleColor }}
                >
                  JavaScript
                </h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <div className="skills__data">
            <i class="uil uil-react"></i>
              <div>
                <h3
                  className="skills__name"
                  style={{ color: theme.titleColor }}
                >
                  React
                </h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <div className="skills__data">
            <i class="uil uil-react"></i>
              <div>
                <h3
                  className="skills__name"
                  style={{ color: theme.titleColor }}
                >
                  ReactNative
                </h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <div className="skills__data">
              <TbBrandNextjs />
              <div>
                <h3
                  className="skills__name"
                  style={{ color: theme.titleColor }}
                >
                  Nextjs
                </h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <div className="skills__data">
            <i class="uil uil-vuejs"></i>
              <div>
                <h3
                  className="skills__name"
                  style={{ color: theme.titleColor }}
                >
                  Vue
                </h3>
                <span className="skills__level">Beginner</span>
              </div>
            </div>
            <div className="skills__data">
              <SiRedux />
              <div>
                <h3
                  className="skills__name"
                  style={{ color: theme.titleColor }}
                >
                  React/Redux
                </h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <div className="skills__data">
              <FaSass />
              <div>
                <h3
                  className="skills__name"
                  style={{ color: theme.titleColor }}
                >
                  SASS
                </h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <div className="skills__data">
              <SiTailwindcss />
              <div>
                <h3
                  className="skills__name"
                  style={{ color: theme.titleColor }}
                >
                  Tailwind
                </h3>
                <span className="skills__level">Intermidiate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Frontend;
