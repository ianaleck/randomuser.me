import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: (props) => ({
      "html, body, #__next": {
        fontSize: "16px",
        height: "100%",
        fontFamily: "Helvetica",
        color: "#24292e",
        background: props.colorMode === "light" && "#fafafa",
        scrollBehavior: "smooth",
      },
      p: {
        color: props.colorMode === "light" ? "initial" : "#fbfbfb",
      },
      "h1, h2, h3, h4, h5, h6": {
        fontSize: "revert",
        color: "revert",
      },
      button: {
        boxShadow: "none !important",
      },
    }),
  },
});

export default theme;
