import { IconLanguage, IconMenu2 } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

const ScrollSpy = ({ targetIds }) => {
  const [activeId, setActiveId] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  function handleOpenMenu() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  function handleLanguageChange() {
    toggleLanguage();
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 650;

      for (const target of targetIds) {
        const targetElement = document.getElementById(target.id);
        if (targetElement) {
          const { offsetTop, offsetHeight } = targetElement;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveId(target.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetIds]);

  return (
    <div>
      <button
        className={`invisible fixed right-[68px] top-[50px] z-10 flex h-[55px] w-[55px] items-center justify-center rounded-[30px] border border-zinc-600 bg-dark-color hover:text-theme mobile:right-8 ${isMenuOpen ? "invisible" : ""} tablet:visible`}
        onClick={handleOpenMenu}
      >
        <IconMenu2 className="mx-auto" strokeWidth="1.8" size={20} />
      </button>
      <button
        className="fixed right-[68px] top-24 z-10 flex h-[55px] w-[55px] flex-col items-center justify-center rounded-[30px] border border-zinc-600 bg-dark-color hover:text-theme tablet:top-28 mobile:right-8"
        onClick={handleLanguageChange}
      >
        <IconLanguage className="mx-auto" strokeWidth="1.8" size={20} />
        <span className="text-[10px] font-semibold text-theme">
          {language === "en" ? "English" : "فارسی"}
        </span>
      </button>
      <ul
        className={`fixed right-[68px] top-[322px] z-10 flex w-[55px] -translate-y-1/2 flex-col gap-5 rounded-[30px] border border-zinc-600 bg-dark-color px-0 py-6 text-center large:top-1/2 tablet:hidden ${isMenuOpen ? "invisible" : ""}`}
      >
        {targetIds.map((target) => (
          <li key={target.id}>
            <a
              className={`menu-icon-link ${target.id === activeId ? "text-theme" : ""}`}
              href={`#${target.id}`}
            >
              <span className="invisible absolute right-full block rounded-md bg-zinc-800 p-[10px] px-2 py-1.5 text-xs text-white opacity-0">
                Home
              </span>
              {target.icon}
            </a>
          </li>
        ))}
      </ul>
      <div
        className={`fixed right-0 top-0 z-10 h-full w-full bg-zinc-700/50 ${isMenuOpen ? "" : "invisible"}`}
        onClick={handleCloseMenu}
      ></div>
      <div
        className={`fixed top-0 z-20 ml-auto h-full w-11/12 max-w-[345px] overflow-x-hidden bg-zinc-900 pt-14 transition-all ${isMenuOpen ? "right-0" : "invisible -right-2"}`}
      >
        <div className="m-auto w-[46%]">
          <p className="mb-5 text-xl">Menu</p>
          <ul className="relative left-0 right-auto top-0 mb-8 flex translate-y-0 flex-col gap-5 rounded-none border-none bg-none px-0 py-6 text-center">
            {targetIds.map((target) => (
              <li key={target.id}>
                <a
                  className={`relative flex items-center gap-3 ${target.id === activeId ? "text-theme" : ""}`}
                  href={`#${target.id}`}
                >
                  {target.icon}
                  <span
                    className={`relative right-0 m-0 block flex-1 rounded-none bg-none p-0 text-left text-xs capitalize opacity-100 ${target.id === activeId ? "text-white" : "text-zinc-500"}`}
                  >
                    {target.id}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScrollSpy;
