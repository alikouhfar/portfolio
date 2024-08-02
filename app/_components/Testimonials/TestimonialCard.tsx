import { ITestimonial } from "@/app/_models/testimonial.model";
import { caveat } from "@/app/_ui/fonts";
import dotsSmall from "@/public/dots-small.png";
import test from "@/public/test.png";
import Image from "next/image";
import { FC } from "react";

interface ITestimonialCardProps {
  testimonial: ITestimonial;
}

const TestimonialCard: FC<ITestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-7 text-zinc-800 shadow transition duration-700 dark:bg-card-dark dark:text-zinc-100">
      <div className="flex h-full flex-col">
        <div className="relative block h-52 overflow-hidden rounded-2xl">
          <Image
            fill
            src={test}
            alt="Project Image"
            className="object-cover transition duration-300"
          />
          <div className="absolute left-0 top-0 z-50 h-16 w-16 rounded-br-2xl bg-white p-1 text-primary-green transition duration-700 dark:bg-card-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="44px" height="34px">
              <path
                fillRule="evenodd"
                strokeWidth="2px"
                stroke="rgb(0, 0, 0)"
                fill="currentColor "
                d="M17.360,8.325 C15.490,5.563 11.616,4.762 8.705,6.536 C6.901,7.635 5.815,9.533 5.826,11.567 C5.828,14.854 8.637,17.516 12.101,17.515 C13.290,17.513 14.456,17.192 15.460,16.587 C14.967,17.975 14.049,19.457 12.537,20.942 C11.934,21.533 11.951,22.476 12.574,23.048 C13.198,23.619 14.192,23.604 14.794,23.012 C20.384,17.515 19.658,11.539 17.360,8.333 L17.360,8.325 ZM32.407,8.325 C30.538,5.563 26.663,4.762 23.752,6.536 C21.949,7.635 20.863,9.533 20.873,11.567 C20.875,14.854 23.685,17.516 27.148,17.515 C28.338,17.513 29.503,17.192 30.508,16.587 C30.015,17.975 29.097,19.457 27.585,20.942 C26.982,21.533 26.999,22.476 27.622,23.048 C28.245,23.619 29.239,23.604 29.842,23.012 C35.432,17.515 34.706,11.539 32.407,8.333 L32.407,8.325 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between pt-8">
          <div>
            <p className="min-h-36 leading-7 opacity-80 sm:min-h-28 lg:min-h-32">
              {testimonial.testimonial}
            </p>
            <div>
              <h5 className="mb-4 text-2xl font-bold leading-7">
                {testimonial.name}
              </h5>
              <div className="flex flex-col text-sm font-semibold text-primary-green">
                <span className="uppercase">{testimonial.jobTitle}</span>
                <span
                  className={`${caveat.className} text-xl font-bold leading-5 antialiased`}
                >
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-5 -right-5 h-32 w-32">
          <Image
            fill
            src={dotsSmall}
            alt="Dots Element"
            className={`transition duration-700 dark:opacity-60 dark:invert`}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
