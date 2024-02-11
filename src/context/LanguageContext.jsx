import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(
    function () {
      if (language === "en") {
        document.documentElement.dir = "ltr";
        document.documentElement.lang = "en";
      }
      if (language === "fa") {
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "fa";
      }
    },
    [language],
  );

  function toggleLanguage() {
    setLanguage((language) => {
      if (language === "en") {
        changeLanguage("fa");
        return "fa";
      } else {
        changeLanguage("en");
        return "en";
      }
    });
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined)
    throw new Error("LanguageContext was used outside of LanguageProvider");
  return context;
}

export { LanguageProvider, useLanguage };
