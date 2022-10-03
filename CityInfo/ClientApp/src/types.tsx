export interface ICityQuery {
  id: number;
  city: string;
  queryTime: string;
}

export interface ICityInfo {
  weatherInfo: IWeatherInfo;
  news: ICityNews;
  city: string;
}

export interface ICityNews {
  status: number;
  error: { errorCode: number; message: string } | null;
  totalResults: number;
  articles: IArticle[];
}

export interface IArticle {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt?: string;
}

interface Coord {
  lon: number;
  lat: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrice: number;
  sunset: number;
}
export interface IWeatherInfo {
  coord: Coord;
  weather: IWeather[];
  _base: string;
  main: IWeatherMain;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
