import React from "react";
import "./App.css";

export default function Weather() {
  let weatherInfo = {
    temperature: 5,
    city: "Toronto",
    time: "12:30",
    description: "cloudy",
    humidity: "8%",
    wind: "5 k/h"
  };

  return (
    <div>
      <span className="celcius-farenheit">
        <a href="#">C°</a> | <a href="/">F°</a>
      </span>
      <form className="searchbar">
        <input
          type="text"
          placeholder="Search Here 🔍"
          autocomplete="off"
          className="search"
        />
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
      <h2>Toronto </h2>
      <h1> 5° C</h1>
      <h2>
        <ul>
          <li> Snowing </li>
          <li> 6:30pm </li>
          <li>
            <span> Saturday </span>
            <span className="time"> {weatherInfo.time} </span>
          </li>
        </ul>
      </h2>
      <img src="" className="icon" />
      <h3>
        <ul className="weather-elements">
          <li>Humidity: 20%</li>
          <li>Wind: 5 km/h</li>
        </ul>
      </h3>
      <form className="current-location-btn">
        <input
          className="btn btn-primary"
          type="button"
          value="Current Location"
        />
      </form>
      <footer className="footer">
        <small>
          <a
            href="https://github.com/Shay9/SheCodes-Plus-Final.git"
            target="_blank"
          >
            Open-sourced Code
          </a>
          by Shadea Nance
        </small>
      </footer>
    </div>
  );
}
