import { testimonials } from "@/app/_lib/testimonials";
import { TestimonialsCarousel } from "../Carousel";
import VerticalLine from "../VerticalLine";
import { FC } from "react";

const Testimonials: FC = () => {
  return (
    <div className="relative flex w-full flex-wrap justify-center p-3 pb-14">
      <div className="max-w-full xl:max-w-container">
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
      <VerticalLine
        linePosition="right-0"
        imagePosition="-left-5 md:-left-12"
      />
    </div>
  );
};

export default Testimonials;
