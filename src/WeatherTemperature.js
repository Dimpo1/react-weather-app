import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function ShowFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function ShowCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span>
          <strong>{Math.round(props.celsius)}</strong>
        </span>
        <span className="unit">
          {" "}
          °C |
          <a href="/" onClick={ShowFarenheit}>
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let farenheit = props.celsius * (9 / 5) + 32;
    return (
      <div>
        <span>
          <strong>{Math.round(farenheit)}</strong>
        </span>
        <span className="unit">
          {" "}
          <a href="/" onClick={ShowCelsius}>
            °C
          </a>{" "}
          | °F{" "}
        </span>
      </div>
    );
  }
}
