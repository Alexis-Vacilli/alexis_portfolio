import React from "react";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button__flex">
        <i className="uil uil-mouse-alt-2"></i>
        <div className="home__scroll-name">Scroll Down</div>
        <i className="uil uil-arrow-down"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
