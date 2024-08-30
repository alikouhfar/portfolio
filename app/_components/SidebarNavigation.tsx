import { sections } from "@/app/_lib/sections";
import { FC } from "react";
import SocialMedia from "./SocialMedia";

interface ISidebarNavigation {
  handleCloseMenu: Function;
}

const SidebarNavigation: FC<ISidebarNavigation> = ({ handleCloseMenu }) => {
  const handleClick = (href: string, event: any) => {
    event.preventDefault();
    const sectionElement = document.querySelector(href) as HTMLElement;

    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop - 120,
        behavior: "smooth",
      });

      setTimeout(() => {
        handleCloseMenu();
      }, 600);
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-between p-5 pb-12 pl-14 sm:pl-24 xl:p-10 xl:pl-24 dark:text-zinc-100">
      <ul className="flex flex-col gap-6">
        {sections.map((section, index) => {
          return (
            <li
              key={index}
              className="hover:text-primary-violet cursor-pointer transition-all duration-500 hover:scale-105"
            >
              <button
                onClick={(e) => handleClick(`#${section}`, e)}
                className="text-[22px] font-bold uppercase tracking-widest"
              >
                {section}
              </button>
            </li>
          );
        })}
      </ul>
      <SocialMedia justifyPosition="start" hasMarginTop={true} />
    </div>
  );
};

export default SidebarNavigation;
