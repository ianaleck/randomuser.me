import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utitlities/chakra";
import { PeopleProvider } from "./contexts/usePeople";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme} resetCSS={true}>
    <PeopleProvider>
      <App />
    </PeopleProvider>
  </ChakraProvider>
);
