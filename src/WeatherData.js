import React from "react";

export default function WeatherData() {
  return (
    <div className="WeatherData">
      <div>
        <div id="city"></div>
        <p>
          <span id="dateTime"> </span> |<span id="description"> </span>
          <br />
          humidity:{" "}
          <strong>
            <span id="humidity"></span>%
          </strong>{" "}
          | Wind:
          <strong>
            <span id="windSpeed"></span> km/h
          </strong>
        </p>
      </div>
      <div id="currentTemperature">
        <div id="icon"></div>

        <div className="temp" id="temp">
          <strong></strong>
        </div>
        <div class="unit">°C</div>
      </div>
    </div>
  );
}
