import React, { PropsWithChildren, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type ContextType = {
  language: string;
  toggleLanguage: () => void;
};

const defaultValues: ContextType = {
  language: "fa",
  toggleLanguage: () => {
    console.log("Default Function");
  },
};

const LanguageContext = React.createContext<ContextType>(defaultValues);

function LanguageProvider(props: PropsWithChildren) {
  const [language, setLanguage] = useState("en");
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
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
      {props.children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (context === undefined)
    throw new Error("LanguageContext was used outside of LanguageProvider");
  return context;
}

export { LanguageProvider, useLanguage };
