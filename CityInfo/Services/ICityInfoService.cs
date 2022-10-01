using System;
using NewsAPI.Models;
using CityInfo.Models;

namespace CityInfo.Services
{
	public interface ICityInfoService
	{
		Task<ArticlesResult> GetNews(string cityName);

		Task<WeatherDto> GetWeather(string cityName);
	}
}

