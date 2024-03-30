import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function Header() {
  let [ready, setReady] = useState(false);
  let [temperatureData, setTemperatureData] = useState({});

  function handleresponse(response) {
    console.log(response.data.dt);
    setTemperatureData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div>
        <header>
          <form id="searchForm">
            <input
              type="search"
              name="city"
              id="citySearch"
              placeholder="Enter a city..."
              className="searchInput"
              autoFocus="on"
              required
            />
            <input type="submit" value="Search" className="search" />
          </form>
        </header>
        <WeatherData data={temperatureData} />; {/* changed 'info' to 'data' */}
      </div>
    );
  } else {
    let apikey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
    let city = "Paris";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(url).then(handleresponse);

    return "Loading...";
  }
}
