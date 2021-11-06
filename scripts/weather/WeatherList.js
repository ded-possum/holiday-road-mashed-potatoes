import { weatherData, fetchWeather } from "./WeatherProvider.js";
import { forecast } from "./WeatherCard.js";


const weatherTarget = document.querySelector("")

export const fiveDayForecast = () => {
    weatherData()
    .then(() => {
        let forecastArray = fetchWeather()
        let weatherHTML = ""
        forecastArray.forEach((singleWeatherObj) => {
            weatherHTML += forecast(singleWeatherObj)
        })
        weatherTarget.innerHTML = weatherHTML
    })
}