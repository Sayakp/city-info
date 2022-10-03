import React from "react";
import useCityInfo from "../../hooks/useCityInfo";
import WeatherView from "./WeatherView";
import NewsView from "./NewsView";
import LinearProgress from "@mui/material/LinearProgress";

interface ISearchResultsProps {
  cityQuery: string;
}

const SearchResults = ({ cityQuery }: ISearchResultsProps) => {
  const cityInfo = useCityInfo(cityQuery);

  return (
    <>
      {cityInfo.results === null ? (
        <LinearProgress />
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
