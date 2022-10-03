import React from "react";
import Typography from "@mui/material/Typography";
import { IWeatherInfo, IWeather, IWeatherMain } from "../../types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import ThermostatAutoSharpIcon from "@mui/icons-material/ThermostatAutoSharp";
import Box from "@mui/material/Box";

interface WeatherViewProps {
  weather: IWeatherInfo;
  city: string;
}

const WeatherView = ({ weather, city }: WeatherViewProps) => {
  const weatherInfo = (
    weatherEntry: IWeather,
    main: IWeatherMain,
    index: number
  ) => (
    <Card key={`${weatherEntry.id}_${index}`} sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={`https://openweathermap.org/img/wn/${weatherEntry.icon}@2x.png`}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography gutterBottom variant="h5" component="div">
            {weatherEntry.main}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {weatherEntry.description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            <ThermostatAutoSharpIcon /> Max temp{" "}
            {(main.temp_max - 273.15).toFixed(2)} C
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            <ThermostatAutoSharpIcon /> Min temp{" "}
            {(main.temp_min - 273.15).toFixed(2)} C
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );

  return (
    <>
      {weather.cod === 0 ? (
        <Typography align="center" variant="h5">
          No weather results found for {city}
        </Typography>
      ) : (
        <>
          <Typography align="center" variant="h5">
            Weather in {city}
          </Typography>
          {weather.weather.map((weatherEntry, index) =>
            weatherInfo(weatherEntry, weather.main, index)
          )}
        </>
      )}
    </>
  );
};

export default WeatherView;
