import { IconArrowDownLeft, IconArrowUpRight } from "@tabler/icons-react";
import { testimonials } from "../../data/testimonials";
import Swiper from "../Swiper";
import "./style.css";
import Tag from "../Shared/Tag";
import Section from "../Shared/Section";

export default function Testimonials() {
  return (
    <Section id="testimonial">
      <div className="relative">
        <Tag>Testimonial</Tag>
        <div className="flex justify-between flex-col gap-8">
          <div className="h-full">
            <div className="flex flex-col xl:flex-row gap-3">
              <h2 className="text-5xl md:text-7xl font-semibold md:w-[420px]">
                Client&apos;s Kind Words
              </h2>
              <div className="flex w-full xl:w-1/2 gap-5 items-start">
                <span className="block w-8 border-t-zinc-700 border-t-2 mt-2"></span>
                <p className="text-base w-full md:w-3/5 text-zinc-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full relative mt-5 pt-10 md:pt-0">
            {/* Swiper Custom Buttons */}
            <div className="absolute flex gap-2 -top-8 md:-top-16 right-0">
              <button
                id="swiper-button-prev"
                className="flex items-center justify-center leading-none p-3 border-zinc-800 border-2 text-zinc-800 rounded-full self-start text-base hover:bg-[#ffd670] transition-all"
              >
                <IconArrowDownLeft stroke={1.5} className="text-inherit" />
              </button>
              <button
                id="swiper-button-next"
                className="border-zinc-800 text-zinc-800 border-2 rounded-full hover:bg-[#ffd670] overflow-hidden"
              >
                <div className="flex items-center transition-all">
                  <div className="flex items-center justify-center leading-none p-3 self-start text-base">
                    <IconArrowUpRight stroke={1.5} className="text-inherit" />
                  </div>
                  <div className="border-l-zinc-300 border-l-2 px-3 py-1 group-hover:border-l-zinc-800">
                    <span className="block text-xs font-semibold -rotate-45">
                      {testimonials.length}+
                    </span>
                  </div>
                </div>
              </button>
            </div>
            <Swiper slides={testimonials} />
          </div>
        </div>
      </div>
    </Section>
  );
}
