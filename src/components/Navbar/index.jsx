import {
  IconBriefcase,
  IconCode,
  IconCurrencyDollar,
  IconHome,
  IconMessage,
  IconPhoneCall,
  IconStarsFilled,
  IconUser,
  IconVip,
} from "@tabler/icons-react";

export default function Navbar() {
  return (
    <ul className="fixed right-[68px] top-[322px] z-10 flex w-[55px] -translate-y-1/2 flex-col gap-5 rounded-[30px] border border-zinc-600 bg-dark-color px-0 py-6 text-center large:top-1/2 tablet:hidden">
      <li>
        <a className="menu-icon-link" href="#home">
          <span className="invisible absolute right-full block rounded-md bg-zinc-800 p-[10px] px-2 py-1.5 text-xs text-white opacity-0 transition-all">
            Home
          </span>
          <IconHome className="mx-auto" strokeWidth="1.8" size={20} />
        </a>
      </li>
      <li>
        <a className="menu-icon-link" href="#about">
          <span className="menu-icon-text">About</span>
          <IconUser
            className="mx-auto"
            color="currentColor"
            strokeWidth="1.8"
            size={20}
          />
        </a>
      </li>
      <li>
        <a className="menu-icon-link" href="#resume">
          <span className="menu-icon-text">Resume</span>
          <IconBriefcase className="mx-auto" strokeWidth="1.8" size={20} />
        </a>
      </li>
      <li>
        <a className="menu-icon-link" href="#services">
          <span className="menu-icon-text">Services</span>
          <IconVip className="mx-auto" strokeWidth="1.8" size={20} />
        </a>
      </li>
      <li>
        <a className="menu-icon-link" href="#skills">
          <span className="menu-icon-text">Skills</span>
          <IconStarsFilled className="mx-auto" strokeWidth="1.8" size={20} />
        </a>
      </li>
      <li>
        <a className="menu-icon-link" href="#projects">
          <span className="menu-icon-text">Projects</span>
          <IconCode className="mx-auto" strokeWidth="1.8" size={20} />
        </a>
      </li>
      <li>
        <a className="menu-icon-link" href="#testimonials">
          <span className="menu-icon-text">Testimonials</span>
          <IconMessage className="mx-auto" strokeWidth="1.8" size={20} />
        </a>
      </li>
      <li>
        <a className="menu-icon-link" href="#pricing">
          <span className="menu-icon-text">Pricing</span>
          <IconCurrencyDollar className="mx-auto" strokeWidth="1.8" size={20} />
        </a>
      </li>
      <li>
        <a className="menu-icon-link" href="#contact">
          <span className="menu-icon-text">Contact</span>
          <IconPhoneCall className="mx-auto" strokeWidth="1.8" size={20} />
        </a>
      </li>
    </ul>
  );
}
