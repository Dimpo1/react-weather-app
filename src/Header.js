import React, { useState } from "react";
import axios from "axios";

export default function Header() {
  let [ready, setReady] = useState(false);
  let [temperature, setTemperature] = useState(null);
  function handleresponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
  }
  let apikey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
  let city = "Paris";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  axios.get(url).then(handleresponse);
  return (
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
  );
}
