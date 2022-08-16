import { useState } from "react";
import ShowCityInfo from "./ShowCityInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  console.log(props);
  const [city, setCity] = useState(null);
  let [weather, setWeather] = useState({
    city: props.weather.city,
    timedata: new Date(props.weather.timedata * 1000),
    temperature: props.weather.temperature,
    description: props.weather.description,
    humidity: props.weather.humidity,
    wind: props.weather.wind,
    icon: props.weather.icon,
  });

  function handleResponse(response) {
    setWeather({
      coordinates: response.data.coord,
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
    search();
  }

  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "8de23b651e5e3f370c28643f6fc1640b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Weather">
      <span className="Cities">
        <span className="city text-primary">Lisbon</span>
        <span className="city text-primary">Paris</span>
        <span className="city text-primary">Sydney</span>
        <span className="city text-primary">San Francisco</span>
      </span>

      <form onSubmit={handleSubmit} className="row mb-3 mt-3">
        <div className="col-6">
          <input
            type="search"
            placeholder="Enter a city"
            autoFocus="on"
            autoComplete="off"
            className="form-control shadow-sm"
            onChange={handleCityChange}
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
          />
        </div>
      </form>
      <ShowCityInfo data={weather} />
    </div>
  );
}
