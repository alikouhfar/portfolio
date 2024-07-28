import { sections } from "@/app/_lib/sections";
import { jost } from "@/app/_ui/fonts";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

export default function SidebarNavigation() {
  return (
    <div className="flex flex-1 flex-col justify-between p-5 pb-12 pl-14 sm:pl-24 xl:p-10 xl:pl-24 dark:text-zinc-100">
      <ul className={`${jost.className} flex flex-col gap-5`}>
        {sections.map((section, index) => {
          return (
            <li
              key={index}
              className="cursor-pointer text-[22px] font-bold uppercase tracking-widest transition-all duration-500 hover:scale-105 hover:text-primary-green"
            >
              <Link href={`#${section}`}>{section}</Link>
            </li>
          );
        })}
      </ul>
      <SocialMedia justifyPosition="start" hasMarginTop={true} />
    </div>
  );
}
