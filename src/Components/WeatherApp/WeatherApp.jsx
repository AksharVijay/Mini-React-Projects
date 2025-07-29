import React, { useEffect, useRef, useState } from "react";
import search from "../../assets/weatherapp/search.png";
import clear from "../../assets/weatherapp/clear.png";
import cloud from "../../assets/weatherapp/cloud.png";
import drizzle from "../../assets/weatherapp/drizzle.png";
import humidity from "../../assets/weatherapp/humidity.png";
import rain from "../../assets/weatherapp/rain.png";
import snow from "../../assets/weatherapp/snow.png";
import wind from "../../assets/weatherapp/wind.png";
import "./weather.css";

const WeatherApp = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const [loading, setLoading] = useState(true);
  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
  };

  const weatherSearch = async (city) => {
    if (!city) return;

    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);

      const data = await response.json();
      console.log(data);

      if (data.cod !== 200) {
        throw new Error(data.message);
      }
      const icon = allIcons[data.weather[0].icon] || clear;

      setWeatherData({
        humidity: data.main.humidity,
        wind: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.error("error fetching weather data", error.message);
      setWeatherData(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    weatherSearch("Auckland");
  }, []);
  return (
    <>
      <div className="weather">
        <div className="search">
          <input
            ref={inputRef}
            type="text"
            className="search-text"
            required
            placeholder="Enter city name"
          />
          <img
            src={search}
            className="search-icon"
            onClick={() => {
              weatherSearch(inputRef.current.value);
            }}
          ></img>
        </div>
        {weatherData ? (
          <>
            <div className="present-weather">
              <img src={weatherData.icon} className="present-weather-img" />
              <p>{weatherData.temperature}&deg;C</p>
              <p>{weatherData.location}</p>
            </div>
            <div className="weather-data">
              <div className="col">
                <img src={humidity} className="humidity"></img>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
              <div className="col">
                <img src={wind} className="wind"></img>
                <p>{weatherData.wind}</p>
                <span>Wind</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <p>Oops! sorry!! No Weather data</p>
          </>
        )}
      </div>
    </>
  );
};

export default WeatherApp;
