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
        <div className="flex justify-between">
          <div className=" w-2/5">
            <h2 className="text-7xl font-semibold">
              Let's Discuss Your Project
            </h2>
            <div className="mt-14">
              {contacts.map((contact, index) => (
                <ContactCard contact={contact} key={index} />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between relative border-2 border-zinc-800 rounded-full self-center h-[480px] w-[480px] p-10">
            <div className="flex items-end">
              <p className="text-5xl">👋</p>
              <p className="text-2xl font-semibold">Say Hi!</p>
            </div>
            <button className="flex items-center justify-center leading-none p-12 border-none gap-1 mr-3 bg-purple-600 text-zinc-50 rounded-full text-base hover:bg-purple-700 transition-all">
              <IconArrowUpRight stroke={1.5} size={60} />
            </button>
            <div className="absolute w-3/4 border-t-2 border-t-zinc-800 left-[46%] top-2/3 -translate-x-1/2 rotate-[15deg]"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t-zinc-800 border-t-2 mt-auto pt-4 text-xs font-semibold">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        <p>Designed By Ali Kouhfar</p>
        <p>support@alikouhfr.com</p>
      </div>
    </Section>
  );
}
