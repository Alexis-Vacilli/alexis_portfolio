import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./Dropdown.scss";

const Dropdown = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <>
      <select name="" id="" style={{border: theme.border, color: theme.textColor}}>
        <option value="0">🇬🇧 English</option>
        <option value="0">🇫🇷 Français</option>
        <option value="0">🇬🇧 English</option>
      </select>
    </>
  );
};

export default Dropdown;
