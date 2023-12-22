import { createContext, useState } from "react";

const ColorModeContext = createContext();

function ColorModeProvider({ children }) {
  const [colorMode, setColorMode] = useState(
    localStorage.getItem("colorMode") || "light"
  );

  const toggleColorMode = () => {
    setColorMode((colorMode) => (colorMode === "dark" ? "light" : "dark"));
  };
  localStorage.setItem("colorMode", colorMode);

  return (
    <div>
      <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
        {children}
      </ColorModeContext.Provider>
    </div>
  );
}

export { ColorModeContext, ColorModeProvider };
