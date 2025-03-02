"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import useLocalStorage from "../_hooks/useLocalStorage";

type Theme = "light" | "dark";

// Define the context shape
interface IThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

interface IThemeProvider {
  children: ReactNode;
}

// Create the context with an initial value
const ThemeContext = createContext<IThemeContext | undefined>(undefined);

// Provider component to wrap around the app
export const ThemeProvider = ({ children }: IThemeProvider) => {
  const { setItem, getItem } = useLocalStorage();
  const [theme, setTheme] = useState<Theme>("light");

  // Function to toggle theme
  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setItem("portfolio-theme", newTheme);
  }

  // Retrieve theme from local storage on mount
  useEffect(() => {
    const storedTheme = getItem("portfolio-theme");
    if (storedTheme) {
      setTheme(storedTheme as Theme);
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook implementation
export const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
