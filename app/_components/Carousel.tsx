"use client";

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
import { FC } from "react";
import { IService } from "@/app/_models/service.model";
import { ITestimonial } from "@/app/_models/testimonial.model";

interface IServicesCarousel {
  services: IService[];
}

interface ITestimonialsCarousel {
  testimonials: ITestimonial[];
}

export const ServicesCarousel: FC<IServicesCarousel> = ({ services }) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      speed={1000}
      breakpoints={{ 768: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } }}
      watchSlidesProgress
      className="w-full"
    >
      {services.map((service) => (
        <SwiperSlide key={service.id}>
          {({ isVisible }) => (
            <article
              className={`${isVisible ? "visible-slide" : "invisible-slide"} h-full`}
            >
              <ServiceCard service={service} />
            </article>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const TestimonialsCarousel: FC<ITestimonialsCarousel> = ({
  testimonials,
}) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={3}
      pagination={{ clickable: true }}
      speed={1000}
      breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      watchSlidesProgress
      className="w-full"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          {({ isVisible }) => (
            <article
              className={`${isVisible ? "visible-slide" : "invisible-slide"} h-full`}
            >
              <TestimonialCard testimonial={testimonial} />
            </article>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
