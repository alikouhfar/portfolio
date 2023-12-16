// import Swiper core and required modules
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import TestimonialCard from "./Testimonials/TestimonialCard";

export default ({ slides }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1.1}
      navigation={{
        nextEl: "#swiper-button-next",
        prevEl: "#swiper-button-prev",
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <TestimonialCard testimonial={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
