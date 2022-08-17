import { useState, useEffect } from "react";
import ShowCityInfo from "./ShowCityInfo";
import WeatherForcast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const apiKey = "8de23b651e5e3f370c28643f6fc1640b";
  const [city, setCity] = useState(props.weather.city);
  let [units, setUnits] = useState("metric");

  function updateUnits(evt) {
    setUnits(evt);
  }

  useEffect(() => {
    searchCity();
  }, [city]);

  let [weather, setWeather] = useState({
    city: props.weather.city,
    coord: props.weather.coord,
    timedata: new Date(props.weather.timedata * 1000),
    temperature: props.weather.temperature,
    description: props.weather.description,
    humidity: props.weather.humidity,
    wind: props.weather.wind,
    icon: props.weather.icon,
  });

  function handleResponse(response) {
    setWeather({
      coord: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      timedata: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (event.target[0].value === "") {
      alert("Enter the city name...");
    } else {
      setCity(event.target[0].value);
    }
  }

  function geolocationClick(event) {
    event.preventDefault();
    function showPosition(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function defaultCity(event) {
    event.preventDefault();
    setCity(event.currentTarget.innerText);
  }

  function searchCity() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Weather">
      <span className="Cities">
        <span
          className="city text-primary"
          onClick={defaultCity}
          value="Lisbon"
        >
          Lisbon
        </span>
        <span className="city text-primary" onClick={defaultCity}>
          Paris
        </span>
        <span className="city text-primary" onClick={defaultCity}>
          Sydney
        </span>
        <span className="city text-primary" onClick={defaultCity}>
          San Francisco
        </span>
      </span>

      <form onSubmit={handleSubmit} className="row mb-3 mt-3">
        <div className="col-6">
          <input
            type="search"
            placeholder="Enter a city"
            autoFocus="on"
            autoComplete="off"
            className="form-control shadow-sm"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="form-control btn btn-primary shadow-sm w-200"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Current"
            name="place"
            className="form-control btn btn-success shadow-sm"
            onClick={geolocationClick}
          />
        </div>
      </form>

      <ShowCityInfo data={weather} func={updateUnits} />

      <div className="mt-3 mb-3">
        <WeatherForcast coord={weather.coord} units={units} />
      </div>
    </div>
  );
}
