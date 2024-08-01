import { services } from "@/app/_lib/services";
import Carousel from "../Carousel";
import VerticalLine from "../VerticalLine";

export default function Services() {
  return (
    <div className="relative flex w-full flex-wrap justify-center p-3 pb-14">
      <div className="max-w-full xl:max-w-container">
        <Carousel slides={services} cardType="service" />
      </div>
      <VerticalLine
        linePosition="right-0"
        imagePosition="-left-5 md:-left-12"
      />
    </div>
  );
}
