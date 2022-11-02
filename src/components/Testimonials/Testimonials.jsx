import React, { useContext } from "react";
import "./Testimonials.scss";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../contexts/ThemeContext";

// Swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

import { Pagination } from "swiper";

const Testimonials = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <motion.section
      className="testimonial  section"
      style={{ background: theme.bodyColor }}
      id="testimonials"
    >
      <h2 className="section__title" style={{color: theme.titleColor}}>Testimonials</h2>
      <span className="section__subtitle">My clients say</span>
      <Swiper
        className="testimonial__container container"
        loop={true}
        grabCursor={true}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, name, title, description }) => {
          return (
            <SwiperSlide
              className="testimonial__card"
              key={id}
              style={{ background: theme.containerColor, border: theme.border }}
            >
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name" style={{color: theme.titleColor}}>{name}</h3>
              <h5 className="testimonial__title">{title}</h5>
              <p className="testimonial__description">{`"${description}"`}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.section>
  );
};

export default Testimonials;
