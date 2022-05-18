import { Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import PeopleCards from "./PeopleCards";
import TopSection from "./TopSection";

export default function PeopleContainer() {
  const [filter, setFilter] = useState("");

  return (
    <Stack>
      {/* TOP SECTION */}
      <TopSection filter={filter} setFilter={setFilter} />
      {/* PEOPLE CARDS */}
      <PeopleCards filter={filter} />
    </Stack>
  );
}
