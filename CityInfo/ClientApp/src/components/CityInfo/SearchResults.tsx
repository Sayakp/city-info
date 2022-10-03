import React from "react";
import useCityInfo from "../../hooks/useCityInfo";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WeatherView from "./WeatherView";
import NewsView from "./NewsView";

interface ISearchResultsProps {
  cityQuery: string;
}

const SearchResults = ({ cityQuery }: ISearchResultsProps) => {
  const cityInfo = useCityInfo(cityQuery);

  return (
    <>
      {cityInfo.results === null ? (
        <Typography>Loading results</Typography>
      ) : (
        <>
          <WeatherView
            weather={cityInfo.results.weatherInfo}
            city={cityInfo.results.city}
          />
          <NewsView news={cityInfo.results.news} city={cityInfo.results.city} />
        </>
      )}
    </>
  );
};

export default SearchResults;
