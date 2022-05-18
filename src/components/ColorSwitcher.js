import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import React from "react";

export default function ColorSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  // Toggle Between Light Mode and Dark Mode
  return (
    <IconButton
      colorScheme={useColorModeValue("blue", "yellow")}
      variant="ghost"
      onClick={toggleColorMode}
      color={colorMode === "light" ? "gray.500" : "yellow.400"}
      icon={colorMode === "light" ? <BsFillMoonFill /> : <BsSunFill />}
    />
  );
}
