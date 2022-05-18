import { Avatar } from "@chakra-ui/react";
import React from "react";

export default function PersonAvatar({ person, ...rest }) {
  // Person Avatar
  // @prop {Object} person - Person Object
  // @prop {Object} rest - Other props passed to Avatar may inclide size, etc.
  return (
    <Avatar
      shadow="md"
      {...rest}
      name={`${person?.name?.first} ${person?.name?.last}`}
      src={person?.picture?.large}
    />
  );
}
