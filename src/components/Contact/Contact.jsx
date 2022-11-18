import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import './Contact.scss';


const Contact = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <section
      className="section contact" 
      id="contact"
      style={{ background: theme.bodyColor }}
    >
      <h2 className="section__title" style={{ color: theme.titleColor }}>
        Contact us
      </h2>
      <span className="section__subtitle">Reach out to us</span>

      <div className="contacts__container container grid">
        <div className="contact__card" style={{border: theme.border, background: theme.cardBackGround}}>
          <div><SiGmail className="contact__icon"/></div>
          <div>Email</div>
          <a href="aa" style={{color: theme.textColor}}>Send message</a>
        </div>
        <div className="contact__card" style={{border: theme.border, background: theme.cardBackGround}}>
          <div><BsWhatsapp className="contact__icon"/></div>
          <div>WhatsApp</div>
          <a href="aa" style={{color: theme.textColor}}>Send message</a>
        </div>
        <div className="contact__card" style={{border: theme.border, background: theme.cardBackGround}}>
          <div><RiMessengerLine className="contact__icon"/></div>
          <div>Messenger</div>
          <a href="aa" style={{color: theme.textColor}}>Send message</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
