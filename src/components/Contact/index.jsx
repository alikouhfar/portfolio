import { IconArrowUpRight } from "@tabler/icons-react";
import { contacts } from "../../data/contacts";
import ContactCard from "./ContactCard";
import Tag from "../Shared/Tag";
import Section from "../Shared/Section";

export default function () {
  return (
    <Section id="contact" isColored={true}>
      <div className="relative">
        <Tag>Contact</Tag>
        <div className="flex flex-col xl:flex-row justify-between gap-8">
          <div className="w-full xl:w-2/5">
            <h2 className="text-5xl md:text-7xl font-semibold">
              Let's Discuss Your Project
            </h2>
            <div className="flex flex-col md:flex-row xl:flex-col mt-14 gap-4">
              {contacts.map((contact, index) => (
                <ContactCard contact={contact} key={index} />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between relative border-2 border-zinc-800 rounded-full self-center h-60 w-60 md:h-[480px] md:w-[480px] p-2 md:p-10">
            <div className="flex items-end">
              <p className="text-3xl md:text-5xl">👋</p>
              <p className="text-xl md:text-2xl font-semibold">Say Hi!</p>
            </div>
            <button className="flex items-center justify-center leading-none p-5 md:p-12 border-none gap-1 mr-3 bg-purple-600 text-zinc-50 rounded-full hover:bg-purple-700 transition-all">
              <IconArrowUpRight stroke={1.5} size={60} />
            </button>
            <div className="absolute w-3/4 border-t-2 border-t-zinc-800 left-[46%] top-2/3 -translate-x-1/2 rotate-[15deg]"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-between border-t-zinc-800 border-t-2 mt-10 xl:mt-auto pt-4 text-xs font-semibold mb-2 md:mb-0">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        <p>Designed By Ali Kouhfar</p>
        <p>support@alikouhfr.com</p>
      </div>
    </Section>
  );
}
