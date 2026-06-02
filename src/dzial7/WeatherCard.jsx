import React from "react";

function WeatherCard({city, temperature, conditions, warning})
{
      if(conditions == "rainy" && city != undefined && temperature != undefined)
         {
            return(<><h2>🌧️ {city} {temperature}</h2> <p>{warning}</p></>) 
         }
        if(conditions == "sunny" && city != undefined && temperature != undefined)
         {
            return(<><h2>☀️  {city} {temperature}</h2> <p>{warning}</p></>) 
         }
         if(conditions == "cloudy" && city != undefined && temperature != undefined)
         {
            return(<><h2>☁️ {city} {temperature}</h2> <p>{warning}</p></>) 
         }
}
export default WeatherCard