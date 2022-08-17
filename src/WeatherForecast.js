import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";
import axios from "axios";

export default function WeatherForcast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "8de23b651e5e3f370c28643f6fc1640b";
  let lat = props.coord.lat;
  let lon = props.coord.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForcast">
      <div className="row">
        <div className="col">
          <div className="WeatherForcast-day">Wed</div>
          <WeatherIcon data={"01d"} size={36} />
          <div className="WeatherForcast-temperature">
            <strong className="WeatherForcast-temperature-max">20°</strong>
            <span className="WeatherForcast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
