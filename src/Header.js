import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function Header(props) {
  let [ready, setReady] = useState(false);
  let [temperatureData, setTemperatureData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

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

  function search() {
    let apikey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(url).then(handleresponse);
  }

  function handeSubmit(event) {
    event.preventDefault();
    search();
  }

  function handeCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="MainContent">
        <div>
          <header>
            <form onSubmit={handeSubmit} id="searchForm">
              <input
                type="search"
                name="city"
                id="citySearch"
                placeholder="Enter a city..."
                className="searchInput"
                autoFocus="on"
                onChange={handeCityChange}
                required
              />
              <input type="submit" value="Search" className="search" />
            </form>
          </header>
        </div>
        <div>
          <WeatherData data={temperatureData} />{" "}
          {/* changed 'info' to 'data' */}
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
