import React from "react";
import FormattedDate from "./formattedDate";

export default function WeatherData(props) {
  return (
    <div className="container">
      <div className="WeatherData">
        <div className="row">
          <div className="col-9 text-start">
            <div id="city">{props.data.city}</div>
            <p>
              <span id="dateTime">
                {" "}
                <FormattedDate date={props.data.date} />
              </span>{" "}
              |
              <span className="text-capitalize" id="description">
                {" "}
                {props.data.description}{" "}
              </span>
              <br />
              Humidity:{" "}
              <strong>
                <span id="humidity">{props.data.humidity}</span>%
              </strong>{" "}
              | Wind:{" "}
              <strong>
                <span id="windSpeed">{props.data.wind}</span> km/h
              </strong>
            </p>
          </div>

          <div className="col-3 text-center">
            <div id="currentTemperature">
              <div id="icon">
                <img src={props.data.icon} alt={props.data.description} />
              </div>

              <div className="temp" id="temp">
                <strong>{Math.round(props.data.temperature)}</strong>
              </div>
              <div className="unit">°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
