import { settings } from "../Settings.js"

let weather = []

export const weatherData = () => {
    return weather.slice()
}

export const fetchWeather = (park) => {
    return fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${park.lat}&lon=${park.lon}&exclude=alerts,hourly,minutely,current&units=imperial&appid=${settings.weatherKey}`)
    .then (weatherResponse => weatherResponse.json())
    .then (weatherReceipt => {
        weather = weatherReceipt.daily;
    })
}

// Unmolested fetch URLs:
// api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={API key}
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}