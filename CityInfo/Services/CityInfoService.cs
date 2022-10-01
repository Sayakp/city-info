using System;
using CityInfo.Models;
using NewsAPI;
using NewsAPI.Constants;
using NewsAPI.Models;

namespace CityInfo.Services
{
    public class CityInfoService : ICityInfoService
    {
        private readonly IConfiguration _configuration;
        public CityInfoService(IConfiguration configuration)
        {
            _configuration = configuration;
    ***REMOVED***

        public async Task<WeatherDto> GetWeather(string cityName)
        {
            HttpClient client = new HttpClient();
            WeatherDto weather = new();
            string weatherUrl = string.Format(
                "http://api.openweathermap.org/data/2.5/weather?q={0}&appid={1}",
                cityName,
                _configuration["WeatherApiKey"]);
            HttpResponseMessage weatherResponse = await client.GetAsync(weatherUrl);
            if (weatherResponse.IsSuccessStatusCode)
            {
                weather = await weatherResponse.Content.ReadAsAsync<WeatherDto>();
        ***REMOVED***
            return weather;
    ***REMOVED***

        public async Task<ArticlesResult> GetNews(string cityName)
        {
            NewsApiClient client = new NewsApiClient(_configuration["NewsApiKey"]);
            EverythingRequest query = new EverythingRequest
            {
                Q = cityName,
                SortBy = SortBys.Relevancy,
                Language = Languages.EN,
                From = DateTime.Today.AddDays(-2)
        ***REMOVED***;
            ArticlesResult result = await client.GetEverythingAsync(query);
            return result;
    ***REMOVED***
***REMOVED***
}

