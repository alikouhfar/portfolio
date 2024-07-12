"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

interface IThemeProvider {
  children: ReactNode;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

function ThemeProvider({ children }: IThemeProvider) {
  const [theme, setTheme] = useState<string>("light");

  function toggleTheme() {
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
