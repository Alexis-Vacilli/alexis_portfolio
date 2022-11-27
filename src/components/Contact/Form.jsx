import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ImSpinner9 } from "react-icons/im";

const Form = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
      emailjs.sendForm('service_3ltioxs', 'template_wnsv23w', form.current, '9VWF_-FuCrCx0Hr45')
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          document.getElementById("contact-form").reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      { <motion.form
        id="contact-form"
        ref={form}
        onSubmit={sendEmail}
        whileInView={{ width: [0, 300], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="contact-form"
        style={{ backgroundColor: theme.cardBackGround }}
      >
        <h3
          className="form-title"
          style={{ color: theme.textColor, textAlign: "center" }}
        >
          Get in touch
        </h3>
        <label>Name:</label>
        <input
          type="text"
          name="user_name"
          style={{ border: theme.border, color: theme.textColor }}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="user_email"
          style={{ border: theme.border, color: theme.textColor }}
          required
        />
        <label>Message:</label>
        <textarea
          rows="10"
          cols="30"
          name="message"
          style={{ border: theme.border, color: theme.textColor }}
          required
        />
        <button
          type="submit"
          value="Send"
          style={{
            background: theme.buttonColor,
            color: theme.buttonTextColor,
          }}
        >
          {loading ? (
            <ImSpinner9 className="loading-spinner" />
          ) : (
            "Send"
          )}
        </button>
      </motion.form>}
    </>
  );
};

export default Form;
