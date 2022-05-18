import { HStack, Stack, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PersonAvatar from "../components/PersonAvatar";
import axiosInstance from "../utitlities/axios";

const useRandomPeople = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const toast = useToast();
  const toastId = "new-person-toast";

  useEffect(() => {
    setLoading(true);
    let perpage = 20;
    axiosInstance
      .get(`?page=${page}&results=${perpage}`)
      .then((res) => res.data)
      .then((data) => {
        setLoading(false);
        setPeople((prevPeople) => [...prevPeople, ...data.results]);

        // pick a random person from data.results list
        if (toast.isActive(toastId)) {
          return;
        }
        const randomPerson =
          data.results[Math.floor(Math.random() * data.results.length)];

        toast({
          id: toastId,
          render: () => (
            <HStack
              color="white"
              p="0"
              bg={randomPerson.gender === "male" ? "blue.500" : "pink.500"}
              borderRadius={"50px"}
            >
              <PersonAvatar person={randomPerson} size="lg" />
              <Stack spacing="0" fontSize={"0.8em"}>
                <Text color="white">
                  <Text
                    as="span"
                    fontWeight={600}
                  >{`${randomPerson.name.first} ${randomPerson.name.last}`}</Text>{" "}
                  was added
                </Text>
                <Text color="white">{`together with ${
                  data.results.length - 1
                } other people`}</Text>
              </Stack>
            </HStack>
          ),
          position: "bottom-right",
        });
      })
      .catch((err) => {
        setLoading(false);
        toast({
          title: "Error",
          description: err.message,
          status: "error",
        });
      });
  }, [page, toast]);

  const removePerson = (person) => {
    setPeople((prevPeople) =>
      prevPeople.filter((p) => p.login.uuid !== person.login.uuid)
    );
  };

  return { people, page, setPage, loading, removePerson };
};
export default useRandomPeople;
