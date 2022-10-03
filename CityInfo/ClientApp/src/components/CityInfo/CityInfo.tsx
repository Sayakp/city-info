import React, { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

const CityInfo = () => {
  const [cityQuery, setCityQuery] = useState<string>("");

  return (
    <Container>
      <SearchForm setCityQuery={setCityQuery} />
      {cityQuery !== "" ? (
        <SearchResults cityQuery={cityQuery} />
      ) : (
        <Typography align="center" variant="h5">
          Search for city news and weather
        </Typography>
      )}
    </Container>
  );
};

export default CityInfo;
