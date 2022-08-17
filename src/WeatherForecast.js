import React, { useState, useEffect } from "react";
import WeatherForecastItem from "./WeatherForecastItem";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [load, setLoad] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoad(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoad(true);
  }

  if (load) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dayliForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastItem
                    data={dayliForecast}
                    units={props.units}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "8de23b651e5e3f370c28643f6fc1640b";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
