import { IContact } from "@/app/_models/contact.model";
import { caveat } from "@/app/_ui/fonts";

interface IProps {
  contact: IContact;
}

export default function ContactCard({ contact }: IProps) {
  return (
    <div className="flex min-h-28 gap-20">
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-zinc-800 bg-white text-center shadow-primary-light after:absolute after:left-full after:h-0.5 after:w-10 after:bg-zinc-800 after:content-[''] dark:border-zinc-400 dark:bg-card-dark dark:shadow-primary-dark dark:after:bg-zinc-400">
        {contact.icon}
      </div>
      <div>
        <div
          className={`${caveat.className} mt-1 text-3xl font-bold text-zinc-800 antialiased transition duration-700 dark:text-zinc-100`}
        >
          {contact.title}
        </div>
        <div className="text-zinc-700 transition duration-700 dark:text-zinc-300">
          {contact.data}
        </div>
      </div>
    </div>
  );
}
