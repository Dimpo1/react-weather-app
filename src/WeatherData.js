import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";

export default function WeatherData() {
  let [ready, setReady] = useState(false);
  let [temperatureData, setTemperatureData] = useState({});
  function handleresponse(response) {
    console.log(response.data.weather[0].description);
    setTemperatureData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather.icon,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="container">
        <div className="WeatherData">
          <div className="row">
            <div className="col-8">
              <div id="city">{temperatureData.city}</div>
              <p>
                <span id="dateTime"> </span> |
                <span className="text-capitalize" id="description">
                  {" "}
                  {temperatureData.description}{" "}
                </span>
                <br />
                Humidity:{" "}
                <strong>
                  <span id="humidity">{temperatureData.humidity}</span>%
                </strong>{" "}
                | Wind:{" "}
                <strong>
                  <span id="windSpeed">{temperatureData.wind}</span> km/h
                </strong>
              </p>
            </div>

            <div className="col-4">
              <div id="currentTemperature">
                <div id="icon">
                  <img
                    src={temperatureData.icon}
                    alt={temperatureData.description}
                  />
                </div>

                <div className="temp" id="temp">
                  <strong>{Math.round(temperatureData.temperature)}</strong>
                </div>
                <div className="unit">°C</div>
              </div>
            </div>
          </div>
        </div>
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
