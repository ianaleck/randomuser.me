import { Center, Spinner } from "@chakra-ui/react";
import React from "react";

export default function LoadingSection() {
  // Loading Component
  return (
    <Center p="3">
      <Spinner color="blue.400" />
    </Center>
  );
}
