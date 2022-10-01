using System;
namespace CityInfo.Models
{
    public class Coord
    {
        public float lon { get; set;***REMOVED***
        public float lat { get; set;***REMOVED***
***REMOVED***

    public class Weather
    {
        public int id { get; set;***REMOVED***
        public string main { get; set;***REMOVED***
        public string description { get; set;***REMOVED***
        public string icon { get; set;***REMOVED***
***REMOVED***

    public class Main
    {
        public float temp { get; set;***REMOVED***
        public float feels_like { get; set;***REMOVED***
        public float temp_min { get; set;***REMOVED***
        public float temp_max { get; set;***REMOVED***
        public int pressure { get; set;***REMOVED***
        public int humidity { get; set;***REMOVED***
***REMOVED***

    public class Wind
    {
        public float speed { get; set;***REMOVED***
        public int deg { get; set;***REMOVED***
***REMOVED***

    public class Clouds
    {
        public int all { get; set;***REMOVED***
***REMOVED***

    public class Sys
    {
        public int type { get; set;***REMOVED***
        public int id { get; set;***REMOVED***
        public string country { get; set;***REMOVED***
        public int sunrice { get; set;***REMOVED***
        public int sunset { get; set;***REMOVED***
***REMOVED***
    public class WeatherDto
    {
        public Coord coord { get; set;***REMOVED***
        public Weather[] weather { get; set;***REMOVED***
        public string _base { get; set;***REMOVED***
        public Main main { get; set;***REMOVED***
        public int visibility { get; set;***REMOVED***
        public Wind wind { get; set;***REMOVED***
        public Clouds clouds { get; set;***REMOVED***
        public int dt { get; set;***REMOVED***
        public Sys sys { get; set;***REMOVED***
        public int timezone { get; set;***REMOVED***
        public int id { get; set;***REMOVED***
        public string name { get; set;***REMOVED***
        public int cod { get; set;***REMOVED***
***REMOVED***
}