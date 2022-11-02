import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../contexts/ThemeContext";
import { SiPhp, SiSolidity, SiFirebase, SiPostgresql, SiMongodb, SiMocha } from 'react-icons/si';



const Backend = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <motion.div
    whileInView={{ scale: [0, 1] }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="skills__content" style={{ background: theme.containerColor, border: theme.border }}>
        <h3 className="skills_title" style={{color: theme.titleColor}}>Backend Developer</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
            <i class="uil uil-java-script"></i>
              <div>
                <h3 className="skills__name" style={{color: theme.titleColor}}>Nodejs</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <div className="skills__data">
              <SiPhp />
              <div>
                <h3 className="skills__name" style={{color: theme.titleColor}}>PHP</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <SiSolidity />
              <div>
                <h3 className="skills__name" style={{color: theme.titleColor}}>Solidity</h3>
                <span className="skills__level">Beginner</span>
              </div>
            </div>
            <div className="skills__data">
              <SiFirebase />
              <div>
                <h3 className="skills__name" style={{color: theme.titleColor}}>Firebase</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <div className="skills__data">
              <SiPostgresql />
              <div>
                <h3 className="skills__name" style={{color: theme.titleColor}}>Postgressql</h3>
                <span className="skills__level">Intermidiate</span>
              </div>
            </div>
            <div className="skills__data">
              <SiMongodb />
              <div>
                <h3 className="skills__name" style={{color: theme.titleColor}}>Mongodb</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <div className="skills__data">
              <SiMocha />
              <div>
                <h3 className="skills__name" style={{color: theme.titleColor}}>Mocha</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="uil uil-award-alt"></i>
              <div>
                <h3 className="skills__name" style={{color: theme.titleColor}}>Express</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Backend;
