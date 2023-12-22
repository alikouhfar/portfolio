import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";

function ColorModeButton() {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <button
      className="w-6 h-6 flex items-center justify-center mx-auto"
      onClick={toggleColorMode}
    >
      {colorMode === "dark" ? (
        <IconMoonFilled className="text-purple-600" size={22} />
      ) : (
        <IconSunFilled className="text-[#ffd670]" size={25} />
      )}
    </button>
  );
}

export default ColorModeButton;
