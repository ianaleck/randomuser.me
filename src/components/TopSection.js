import {
  Flex,
  Heading,
  HStack,
  Select,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import ColorSwitcher from "./ColorSwitcher";

export default function TopSection({ filter, setFilter }) {
  //Top Section
  //@props filter: string //could be "male", "female" or "..." other
  //@props setFilter: function setStates to filter
  return (
    <Stack>
      <Flex justify={"space-between"} align="center">
        <Heading
          as="h1"
          color={useColorModeValue("gray.800", "gray.50")}
          size={useBreakpointValue({ base: "md", lg: "lg" })}
        >
          RANDOM USER API
        </Heading>
        <HStack>
          <Select
            fontSize={"0.9em"}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            color={useColorModeValue("gray.800", "gray.50")}
          >
            <option>No Filter</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
          <ColorSwitcher />
        </HStack>
      </Flex>
    </Stack>
  );
}
