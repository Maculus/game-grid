import { IconButton } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton onClick={toggleColorMode} variant="outline" size="sm">
      {colorMode === "light" ? <LuSun /> : <LuMoon />}
    </IconButton>
  );
};

export default ColorModeSwitch;
