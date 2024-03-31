import React from "react";
import WeatherData from "./WeatherData";
import Appforecast from "./Appforecast";

export default function Main() {
  return (
    <main>
      <WeatherData defaultCity="Paris" />
      <Appforecast />
    </main>
  );
}
