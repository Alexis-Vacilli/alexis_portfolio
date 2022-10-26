import React, { useState } from "react";
import "./Navbar.scss";

// import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
//   const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = (e) => {
    setToggle(!toggle);
  };
  return (
    <div className="navbar">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Alexis Vacilli
        </a>
        <div className="nav__menu">
          <ul className="nav__list grid">
            {["home", "about", "skills", "testimonials", "portfolio"].map(
              (link) => (
                <li className="nav__item" key={link}>
                  <a href={`#${link}`} className="nav__link">
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="toggle" onClick={handleToggle}>
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
