import React, { useState, useContext } from "react";
import "./Navbar.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { TbCircleTriangle } from "react-icons/tb";

const Navbar = () => {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const [toggle, setToggle] = useState(true);
  const handleToggle = (e) => {
    setToggle(!toggle);
    toggleTheme();
  };
  return (
    <div className="navbar" style={{ background: theme.navBgColor }}>
      <nav className="nav container">
        <a
          href="index.html"
          className="nav__logo"
          style={{ color: theme.titleColor, display: "flex", alignItems: "center", gap: "15px"}}
        >
          <TbCircleTriangle style={{transform: "scale(2)"}}/>Alexis Vacilli
        </a>
        <div className="nav__menu">
          <ul className="nav__list grid">
            {["home", "about", "skills", "testimonials", "portfolio"].map(
              (link) => (
                <li className="nav__item" key={link}>
                  <a
                    href={`#${link}`}
                    className="nav__link"
                    style={{ color: theme.titleColor, opacity: ".8" }}
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div
          className="toggle"
          onClick={handleToggle}
          style={{
            backgroundColor: theme.buttonColor,
            color: theme.buttonTextColor,
          }}
        >
          {toggle ? (
            <i className="uil uil-sun"></i>
          ) : (
            <i className="uil uil-moon"></i>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
