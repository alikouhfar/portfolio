import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function DarkModeButton() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <button
      className="w-6 h-6 flex items-center justify-center mx-auto"
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <IconMoonFilled className="text-purple-600" size={22} />
      ) : (
        <IconSunFilled className="text-[#ffd670]" size={25} />
      )}
    </button>
  );
}

export default DarkModeButton;
