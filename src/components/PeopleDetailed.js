import {
  Box,
  Button,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
  Heading,
  Text,
  Image,
  Divider,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { BsMailbox, BsPhone } from "react-icons/bs";

import PersonAvatar from "./PersonAvatar";

export default function PeopleDetailed({ person, flag }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //People Detailed Button and Modal
  return (
    <>
      <Box p="2">
        <Button
          size="sm"
          fontWeight={400}
          fontSize="0.7em"
          borderColor={useColorModeValue(
            person?.gender === "male" ? "blue.300" : "pink.300",
            person?.gender === "male" ? "blue.200" : "pink.200"
          )}
          borderWidth="1px"
          borderStyle={"solid"}
          bg={useColorModeValue(
            person?.gender === "male" ? "blue.100" : "pink.100",
            person?.gender === "male" ? "blue.400" : "pink.400"
          )}
          color={useColorModeValue("blue.800", "gray.50")}
          _hover={{ color: "blue.800" }}
          onClick={onOpen}
        >
          CONNECT
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg={useColorModeValue(
            person?.gender === "male" ? "blue.100" : "pink.100",
            person?.gender === "male" ? "blue.800" : "pink.800"
          )}
          color={useColorModeValue("gray.700", "gray.50")}
        >
          <ModalCloseButton />
          <ModalBody py="10">
            <Stack>
              <Stack align="center" spacing="0">
                <PersonAvatar size="xl" person={person} />
                <Heading size="md" pt="5">
                  {person?.name?.first} {person?.name?.last} {flag}
                </Heading>
                <Text fontWeight={400} fontSize="0.8em">
                  Member since {person?.registered?.age} years ago
                </Text>
                <HStack pt="3">
                  <BsPhone />
                  <Text fontWeight={400} fontSize="0.8em">
                    {person?.phone}
                  </Text>
                </HStack>
                <HStack>
                  <BsMailbox />
                  <Text fontWeight={400} fontSize="0.8em">
                    {person?.email}
                  </Text>
                </HStack>
              </Stack>

              <Divider />
              {/* Best practice to put keys in environment variables */}
              <Image
                src={`https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s-${person.gender.substring(
                  0,
                  1
                )}+${person.gender === "male" ? "63B3ED" : "B83280"}(${
                  person.location.coordinates.longitude
                },${person.location.coordinates.latitude})/${
                  person.location.coordinates.longitude
                },${
                  person.location.coordinates.latitude
                },2/500x300?access_token=pk.eyJ1IjoiaWFuYWxlY2siLCJhIjoiY2t2eGIzeXl2MDNsZDJ2bm93bDFhNzZ0eSJ9.yvw9FPfRGD0NIrOaPoEO8g`}
                maxW="100%"
                borderRadius="md"
              />
              {/* The Map positions on the api mostly arent accurate */}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
