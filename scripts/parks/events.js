import { Park } from "./Park.js";
import { fetchWeather, weatherData } from "../weather/WeatherProvider.js";
import { forecast } from "../weather/WeatherCard.js";
import { useParks } from "./ParkProvider.js";

export const parkSelectEvent = (e, parkLatLong = {}) => {
  if (e.target.id === 'parkFilter') {
    const selected = useParks().find( park => park.fullName === e.target.value );
    parkLatLong['lat'] = selected.latitude;
    parkLatLong['lon'] = selected.longitude;
    document.querySelector('.parkEntry').innerHTML = Park(selected);
    fetchWeather(parkLatLong).then(() => {
      let forecastHTML = '';
      const forecastData = weatherData();
      forecastData.forEach((daily, i) => {
        if (i < 5) forecastHTML += forecast(daily);
      });
      document.querySelector('.weather').innerHTML = forecastHTML;
    });
    
  }
}