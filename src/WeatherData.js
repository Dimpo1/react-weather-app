import React from "react";
import FormattedDate from "./formattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherData(props) {
  return (
    <div className="container">
      <div className="WeatherData">
        <div className="row">
          <div className="col-8 text-start">
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

          <div className="col-4 text-start">
            <div id="currentTemperature">
              <div id="icon">
                <WeatherIcon code={props.data.icon} />
              </div>
              <div className="temp" id="temp">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
