# city-info

Projecto de ejemplo de una pagina de noticias/clima.


# Herramientas usadas

* Docker
* ASP.NET Core 6.0
* React 18.2.0
* MSSQL Server

# Requerimientos adicionales
* Se necesita una API key de [OpenWeatherMap](https://openweathermap.org/)
* Se necesita una API key de [NewsApi](https://newsapi.org/)

# Uso sin docker

Antes de compilar. En el archivo appsettings.json relevante es necesario llenar los campos de **WeatherApiKey**, **NewsApiKey**, y **DefaultConnection** con la API key OpenWeatherMap, NewsAPI, y la informacion para la conexion a la base de datos.

# Uso con docker

Es necesario llenar los campos para las variables de ambiente **WeatherApiKey** y **NewsApiKey**.

Luego desde consola en el directorio raiz del proyecto ejecutar:

``docker-compose build``

``docker-compose up``

Luego de iniciarce los contenedores la aplicacion estara disponible en el puerto **15689** de la maquina local.