// Import Swiper React components
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "./Services/ServiceCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/app/_styles/carousel.css";
import TestimonialCard from "./Testimonials/TestimonialCard";

type CardType = "service" | "testimonial";

interface ICarouselProps {
  slides: any[];
  cardType: CardType;
}

export default function Carousel({ slides, cardType }: ICarouselProps) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      speed={1000}
      breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      watchSlidesProgress
      className="w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {cardType === "service" && <ServiceCard service={slide} />}
          {cardType === "testimonial" && (
            <TestimonialCard testimonial={slide} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
