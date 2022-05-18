import { createContext, useContext } from "react";
import useCountries from "../hooks/useCountries";
import useRandomPeople from "../hooks/useRandomPeople";
const PeopleContext = createContext();

export const usePeople = () => {
  return useContext(PeopleContext);
};

export const PeopleProvider = ({ children }) => {
  const randomPeople = useRandomPeople();
  const countries = useCountries();

  const values = { ...randomPeople, ...countries };

  return (
    <PeopleContext.Provider value={values}>{children}</PeopleContext.Provider>
  );
};
