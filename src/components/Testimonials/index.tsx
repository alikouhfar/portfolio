import {
  IconChevronLeft,
  IconChevronRight,
  IconMessage,
} from "@tabler/icons-react";

import "./style.css";
import TestimonialSwiper from "../Shared/Swiper";
import { useState } from "react";

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const testimonials = [1, 2, 3, 4];

  function handleActiveSlide(index: number) {
    setActiveSlide(index);
  }

  return (
    <>
      {testimonials.length > 0 && (
        <section
          className={`overflow-hidden py-[60px] tablet:pb-[40px]`}
          id="testimonials"
        >
          <div className="m-auto max-w-[1130px] px-8 py-0 tablet:max-w-[650px]">
            <div className="ml-auto w-full max-w-[770px] tablet:max-w-full">
              <div>
                <h4 className="m-0 mb-14 inline-flex items-center gap-1 rounded-[30px] border border-zinc-600 px-5 py-2 text-xs font-light uppercase text-white">
                  <IconMessage
                    className="mx-auto -ml-1"
                    strokeWidth="1.8"
                    size={16}
                  />
                  <span>Testimonials</span>
                </h4>
                <h1 className="mb-8 font-oswald text-6xl font-normal leading-[60px] text-white mobile:text-[58px] small:text-[44px] small:leading-[1]">
                  Trusted by{" "}
                  <span className="text-theme">Hundered Clients</span>
                </h1>
              </div>
              <div>
                <TestimonialSwiper
                  testimonials={testimonials}
                  setActiveSlide={handleActiveSlide}
                />
                <div className="mt-14 flex items-center gap-4">
                  <button
                    id="testimonial-button-previous"
                    className="rounded-full border-2 border-zinc-600 p-2 text-zinc-300 transition-all hover:border-theme hover:text-theme disabled:opacity-30 disabled:hover:border-zinc-600 disabled:hover:text-zinc-300"
                  >
                    <IconChevronLeft strokeWidth="1.5px" />
                  </button>
                  <div className="flex min-w-8 items-center gap-1 text-sm text-zinc-600">
                    <span className="text-lg font-medium text-white">
                      {activeSlide + 1}
                    </span>
                    <span className="text-[8px] font-medium">/</span>
                    <span>{testimonials.length}</span>
                  </div>
                  <button
                    id="testimonial-button-next"
                    className="rounded-full border-2 border-zinc-600 p-2 text-zinc-300 transition-all hover:border-theme hover:text-theme disabled:opacity-30 disabled:hover:border-zinc-600 disabled:hover:text-zinc-300"
                  >
                    <IconChevronRight strokeWidth="1.5px" />
                  </button>
                </div>
              </div>
              <div className="pt-28">
                <h4 className="mb-14 text-sm font-light uppercase text-white">
                  work with 60+ brands worldwide
                </h4>
                <div className="grid grid-cols-4 items-center gap-x-6 mobile:grid-cols-3 small:grid-cols-2">
                  <div className="mx-auto mb-[74px]">
                    <img
                      src="jeep-logo.png"
                      className="brand-logo block max-h-14 self-center transition-all"
                    />
                  </div>
                  <div className="mx-auto mb-[74px]">
                    <img
                      src="coca-cola-logo.png"
                      className="brand-logo block max-h-14 self-center transition-all"
                    />
                  </div>
                  <div className="mx-auto mb-[74px]">
                    <img
                      src="facebook-logo.png"
                      className="brand-logo block max-h-14 self-center transition-all"
                    />
                  </div>
                  <div className="mx-auto mb-[74px]">
                    <img
                      src="notion-logo.png"
                      className="brand-logo block max-h-14 self-center transition-all"
                    />
                  </div>
                  <div className="mx-auto mb-[74px]">
                    <img
                      src="fedex-logo.png"
                      className="brand-logo block max-h-14 self-center transition-all"
                    />
                  </div>
                  <div className="mx-auto mb-[74px]">
                    <img
                      src="hyundai-logo.png"
                      className="brand-logo block max-h-14 self-center transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
