import { Grid, Stack, Text } from "@chakra-ui/react";
import React, { useCallback, useEffect, useRef } from "react";
import { usePeople } from "../contexts/usePeople";
import LoadingSection from "./LoadingSection";
import PersonCard from "./PersonCard";

export default function PeopleCards({ filter }) {
  const { people, setPage, loading } = usePeople();

  const loader = useRef(null); // returns mutable ref object to detect if user has scrolled to the bottom of the page.
  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage((prev) => prev + 1);
      }
    },
    [setPage]
  );

  useEffect(() => {
    // Intersection Options
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    // Intersection Observer
    const observer = new IntersectionObserver(handleObserver, option);
    // Add observer to the loader element
    if (loader.current) observer.observe(loader.current);

    // Cleanup
    return () => observer.disconnect();
  }, [handleObserver, people]);

  return (
    <Stack>
      <Text>Showing {people.length} results</Text>
      <Grid
        gap={5}
        templateColumns={{
          base: "1fr 1fr",
          md: "1fr 1fr 1fr",
          lg: "1fr 1fr 1fr 1fr",
        }}
      >
        {people.map((person) => {
          if (filter === "male" || filter === "female") {
            return (
              filter === person.gender && (
                <PersonCard person={person} key={person.login.uuid} />
              )
            );
          } else {
            return <PersonCard person={person} key={person.login.uuid} />;
          }
        })}
      </Grid>
      {loading && <LoadingSection />}
      {people.length > 0 && <div ref={loader} />}
    </Stack>
  );
}
