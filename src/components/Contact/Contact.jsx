import React, { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Contact.scss";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Form from "./Form";

const Contact = () => {
  const handleclick = (e) => {
    e.preventDefault();
    setToggleForm(!toggleForm);
  };
  const [toggleForm, setToggleForm] = useState(false);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <>
      {toggleForm && <Form />}
      <div
        style={{ backgroundColor: theme.buttonColor }}
        className="message-btn"
        onClick={handleclick}
      >
        {toggleForm ? (
          <MdClose
            className="message-icon"
            style={{ color: theme.buttonTextColor }}
          />
        ) : (
          <BiMessageSquareDetail
            className="message-icon"
            style={{ color: theme.buttonTextColor }}
          />
        )}
      </div>
    </>
  );
};

export default Contact;
