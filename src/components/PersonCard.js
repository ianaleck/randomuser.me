import {
  Badge,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import { MdClose } from "react-icons/md";
import React, { useEffect, useState } from "react";
import PeopleDetailed from "./PeopleDetailed";
import PersonAvatar from "./PersonAvatar";
import { usePeople } from "../contexts/usePeople";

export default function PersonCard({ person }) {
  //Single Person Card
  // @prop {Object} person - Person Object

  const { removePerson, country, countries } = usePeople();

  //initialize the flag state
  const [flag, setFlag] = useState("");
  useEffect(() => {
    //when countries are ready, call country method from useCountries and set the flag
    if (countries.length === 0) return;
    let c = country(person.nat);
    setFlag(c?.flag);
  }, [person, countries, country]);

  return (
    <Stack
      bg={useColorModeValue(
        person?.gender === "male" ? "blue.50" : "pink.50",
        person?.gender === "male" ? "blue.800" : "pink.800"
      )}
      _hover={{
        bg: useColorModeValue(
          person?.gender === "male" ? "blue.500" : "pink.700",
          person?.gender === "male" ? "blue.600" : "pink.700"
        ),
        shadow: "sm",
      }}
      borderRadius={5}
      borderBottomRightRadius="50px"
      position="relative"
      role="group"
      transition={"all 0.35s ease-in-out"}
      shadow="lg"
    >
      <IconButton
        position="absolute"
        size="xs"
        right="-10px"
        top="-10px"
        display="none"
        _groupHover={{ display: "flex" }}
        onClick={() => removePerson(person)}
        icon={<MdClose />}
        shadow="md"
        color="gray.500"
        _hover={{ color: useColorModeValue("gray.700", "gray.50") }}
        colorScheme={person?.gender === "male" ? "blue" : "pink"}
        bg={useColorModeValue(
          person?.gender === "male" ? "blue.50" : "pink.50",
          person?.gender === "male" ? "blue.800" : "pink.800"
        )}
      />

      <Stack justify={"space-between"} h="100%">
        <Stack p="3" spacing="0">
          <Flex align="center" justify="space-between">
            <Text
              fontSize={"sm"}
              color={useColorModeValue(
                person?.gender === "male" ? "blue.500" : "pink.500",
                person?.gender === "male" ? "blue.50" : "pink.50"
              )}
              _groupHover={{ color: useColorModeValue("gray.50", "gray.50") }}
            >
              {person?.name?.title}
            </Text>
            <Badge colorScheme={person?.gender === "male" ? "blue" : "pink"}>
              {person?.gender}
            </Badge>
          </Flex>
          <Heading
            size="sm"
            color={useColorModeValue("gray.700", "gray.50")}
            _groupHover={{ color: useColorModeValue("gray.50", "gray.50") }}
          >{`${person?.name?.first} ${person?.name?.last} ${flag}`}</Heading>
          <HStack
            pt="1"
            fontSize={"0.7em"}
            color="gray.500"
            _groupHover={{ color: useColorModeValue("gray.50", "gray.50") }}
          >
            <GoLocation />
            <Text
              color="gray.500"
              _groupHover={{ color: useColorModeValue("gray.50", "gray.50") }}
            >{`${person?.location?.city} ${person?.location?.country}`}</Text>
          </HStack>
        </Stack>

        <Flex justify="space-between" align="end">
          <PeopleDetailed flag={flag} person={person} />
          <PersonAvatar size="lg" person={person} />
        </Flex>
      </Stack>
    </Stack>
  );
}
