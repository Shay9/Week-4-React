import React from "react";
import "./App.css";



  return (
    <div>
      <span className="celcius-farenheit">
        <span href="#">C°</span> | <span href="/">F°</span>
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
      <img src="" className="icon" alt="Weather Type" />
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
            rel="noreferrer"
          >
            Open-sourced Code
          </a>
          by Shadea Nance
        </small>
      </footer>
    </div>
  );

