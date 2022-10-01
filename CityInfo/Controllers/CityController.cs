using System;
using Microsoft.AspNetCore.Mvc;
using CityInfo.Models;
using NewsAPI;
using NewsAPI.Models;
using NewsAPI.Constants;
using CityInfo.Services;
using CityInfo.Contexts;

namespace CityInfo.Controllers
{

    [Route("api/cities")]
    public class CityController : ControllerBase
    {
        private readonly ICityInfoService _cityInfoService;
        private readonly DataContext _context;

        public CityController(ICityInfoService cityInfoService, DataContext context){
            _cityInfoService = cityInfoService;
            _context = context;
    ***REMOVED***

        
        [HttpGet("{cityName}")]
        public async Task<ActionResult<CityInfoDto>> Get(string cityName)
        {
            QueryDto newQuery = new QueryDto {
                City = cityName,
                QueryTime = DateTime.Now,
        ***REMOVED***;

            Console.WriteLine(newQuery.City);
            Console.WriteLine(newQuery.QueryTime);
            Console.WriteLine(newQuery);

            _context.QueryHistory.Add(newQuery);
            await _context.SaveChangesAsync();

            WeatherDto weather = await _cityInfoService.GetWeather(cityName);
            ArticlesResult articles = await _cityInfoService.GetNews(cityName);
            CityInfoDto cityInfo = new CityInfoDto()
            {
                news = articles,
                city = cityName,
                weatherInfo = weather
        ***REMOVED***;

         
            return Ok(cityInfo);
    ***REMOVED***
***REMOVED***
}

