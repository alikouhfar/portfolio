import { contact } from "@/app/_lib/contact";
import dots from "@/public/dots.png";
import Image from "next/image";
import VerticalLine from "../VerticalLine";
import ContactCard from "./ContactCard";
import { LinkButtonPrimary } from "../Button";
import { FC } from "react";

const Contact: FC = () => {
  return (
    <section className="relative flex w-full flex-wrap justify-center p-3 pb-14">
      <div className="flex w-full max-w-full flex-col gap-16 lg:flex-row lg:items-start lg:gap-0 xl:max-w-container">
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10 lg:w-2/5 lg:grid-cols-1 lg:gap-4">
          {contact.map((data, index) => (
            <ContactCard key={index} contact={data} />
          ))}
        </div>
        <div className="w-full lg:w-3/5">
          <form className="grid grid-cols-2 gap-6 gap-y-8 text-zinc-800 transition-all duration-700 dark:text-zinc-100">
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="name"
                className="mb-3 block cursor-pointer pl-5 font-bold uppercase"
              >
                Full name <b className="font-semibold text-primary-green">*</b>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="relative h-16 w-full rounded-[30px] border-2 border-zinc-800 bg-white px-8 text-base font-normal text-zinc-800 transition duration-500 dark:border-zinc-400 dark:bg-card-dark"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="email"
                className="mb-3 block cursor-pointer pl-5 font-bold uppercase"
              >
                Email address{" "}
                <b className="font-semibold text-primary-green">*</b>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="relative h-16 w-full rounded-[30px] border-2 border-zinc-800 bg-white px-8 text-base font-normal text-zinc-800 transition duration-500 dark:border-zinc-400 dark:bg-card-dark"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="subject"
                className="mb-3 block cursor-pointer pl-5 font-bold uppercase"
              >
                Subject <b className="font-semibold text-primary-green">*</b>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="relative h-16 w-full rounded-[30px] border-2 border-zinc-800 bg-white px-8 text-base font-normal text-zinc-800 transition duration-500 dark:border-zinc-400 dark:bg-card-dark"
              />
            </div>
            <div className="relative col-span-2">
              <label
                htmlFor="message"
                className="mb-3 block cursor-pointer pl-5 font-bold uppercase"
              >
                Message <b className="font-semibold text-primary-green">*</b>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="relative z-10 w-full rounded-[30px] border-2 border-zinc-800 bg-white p-8 text-base font-normal text-zinc-800 transition duration-500 dark:border-zinc-400 dark:bg-card-dark"
              />
              <div className="absolute bottom-[14px] h-20 w-20 md:-bottom-[145px] md:-left-[135px] md:h-60 md:w-60">
                <Image
                  fill
                  src={dots}
                  alt="Dots Element"
                  className="transition duration-700 dark:opacity-60 dark:invert"
                />
              </div>
            </div>
            <div className="col-span-2 ml-auto">
              <LinkButtonPrimary link="" text="Send Message" />
            </div>
          </form>
        </div>
      </div>
      <VerticalLine
        linePosition="right-0"
        imagePosition="-left-5 md:-left-12"
      />
    </section>
  );
};

export default Contact;
