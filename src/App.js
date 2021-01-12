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
      <div className="weather-app">
      <span>
        <a className="celcius-farenheit" href="#">C°</a> | <a className="celcius-farenheit" href="/">F°</a>
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
      <h2 className="city">Toronto </h2>
      <h1 className="temperature"> 5° C</h1>
      <h2>
        <ul>
          <li className="description"> Snowing </li>
          <br/>
          <li className="time"> 6:30pm </li>
          <br/>
          <li className="day">
            <span className="day"> Saturday </span>
            
          </li>
        </ul>
      </h2>
      <img src="" className="icon" alt="Weather"/>
      <h3>
        <ul className="weather-elements">
          <li>Humidity: 20%</li>
          <li>Wind: 5 km/h</li>
        </ul>
      </h3>
      <span className="weekday"> Monday </span>
      <span className="weekday"> Tuesday </span>
      <span className="weekday"> Wednesday </span>
      <span className="weekday"> Thursday </span>
       <span className="weekday"> Friday </span>
      

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
            rel="noreferrer"
          >
            Open-sourced Code
          </a>
          by Shadea Nance
        </small>
      </footer>
      </div>
    </div>
  );
}

