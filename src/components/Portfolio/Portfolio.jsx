import React, { useState, useContext } from "react";
import "./Portfolio.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

const Portfolio = () => {
  const [activeFilter] = useState("All");
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <section
      className="portfolio section"
      id="portfolio"
      style={{ background: theme.bodyColor }}
    >
      <h2 className="section__title" style={{color: theme.titleColor}}>Portfolio</h2>
      <span className="section__subtitle">The services we can offer</span>

      <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <div className="projects" style={{ textAlign: "center" }}>
        Projects will be uploaded soon...
      </div>
    </section>
  );
};

export default Portfolio;
