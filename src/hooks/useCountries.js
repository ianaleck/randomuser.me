import React from "react";

const useCountries = () => {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_COUNTRIES ||
            "https://restcountries.com/v3.1/all"
        );
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

  const country = (iso2) => {
    return countries.find((country) => country.cca2 === iso2);
  };

  return { country, countries };
};

export default useCountries;
