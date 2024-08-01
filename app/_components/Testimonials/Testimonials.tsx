import { testimonials } from "@/app/_lib/testimonials";
import Carousel from "../Carousel";
import VerticalLine from "../VerticalLine";

export default function Testimonials() {
  return (
    <div className="relative flex w-full flex-wrap justify-center p-3 pb-14">
      <div className="max-w-full xl:max-w-container">
        <Carousel slides={testimonials} cardType="testimonial" />
      </div>
      <VerticalLine
        linePosition="right-0"
        imagePosition="-left-5 md:-left-12"
      />
    </div>
  );
}
