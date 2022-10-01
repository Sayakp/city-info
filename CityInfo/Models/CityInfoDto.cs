using System;
using NewsAPI.Models;


namespace CityInfo.Models
{
    public class CityInfoDto
    {
        public WeatherDto weatherInfo { get; set; }
        public ArticlesResult news { get; set; }
        public string city { get; set; }
    }
}

