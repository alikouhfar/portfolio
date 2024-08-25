import { IContact } from "@/app/_models/contact.model";
import { caveat } from "@/app/_ui/fonts";
import { FC } from "react";

interface IContactCardProps {
  contact: IContact;
}

const ContactCard: FC<IContactCardProps> = ({ contact }) => {
  return (
    <div className="flex min-h-28 gap-8 sm:gap-14 md:gap-20">
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-zinc-800 bg-white text-center text-zinc-800 shadow-primary-light transition-all duration-700 after:absolute after:left-full after:h-[1.5px] after:w-5 after:bg-zinc-800 after:content-[''] sm:after:w-10 dark:border-zinc-400 dark:bg-card-dark dark:text-zinc-100 dark:shadow-primary-dark dark:after:bg-zinc-400">
        {contact.icon}
      </div>
      <div>
        <div
          className={`${caveat.className} mt-1 text-3xl font-bold text-zinc-800 antialiased transition duration-700 dark:text-zinc-100`}
        >
          {contact.title}
        </div>
        <p className="text-zinc-700 transition duration-700 dark:text-zinc-300">
          {contact.data}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
