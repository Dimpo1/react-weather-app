import React from "react";

export default function Header() {
  return (
    <header>
      <form id="searchForm">
        <input
          type="search"
          name="city"
          id="citySearch"
          placeholder="Enter a city..."
          className="searchInput"
          required
        />
        <input type="submit" value="Search" className="search" />
      </form>
    </header>
  );
}
