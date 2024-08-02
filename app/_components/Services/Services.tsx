import { services } from "@/app/_lib/services";
import VerticalLine from "../VerticalLine";
import { ServicesCarousel } from "../Carousel";

export default function Services() {
  return (
    <div className="relative flex w-full flex-wrap justify-center p-3 pb-14">
      <div className="max-w-full xl:max-w-container">
        <ServicesCarousel services={services} />
      </div>
      <VerticalLine
        linePosition="right-0"
        imagePosition="-left-5 md:-left-12"
      />
    </div>
  );
}
