import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastItem(props) {
  let [units, setUnits] = useState(props.units);
  useEffect(() => {
    setUnits(props.units);
  }, [props.units]);

  function setDay() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

  function setTemperaturaMax() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function setTemperaturaMin() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function setTemperaturFahrenheitaMax() {
    let temperature = Math.round((props.data.temp.max * 9) / 5 + 32);
    return `${temperature}°`;
  }

  function setTemperaturaFahrenheitMin() {
    let temperature = Math.round((props.data.temp.min * 9) / 5 + 32);
    return `${temperature}°`;
  }

  if (units === "metric") {
    return (
      <div>
        <div className="WeatherForecast-day">{setDay()}</div>
        <WeatherIcon data={props.data.weather[0].icon} size={36} />
        <div className="WeatherForecast-temperature">
          <strong className="WeatherForecast-temperature-max">
            {setTemperaturaMax()}{" "}
          </strong>
          <span className="WeatherForecast-temperature-min">
            {setTemperaturaMin()}{" "}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="WeatherForecast-day">{setDay()}</div>
        <WeatherIcon data={props.data.weather[0].icon} size={36} />
        <div className="WeatherForecast-temperature">
          <strong className="WeatherForecast-temperature-max">
            {setTemperaturFahrenheitaMax()}{" "}
          </strong>
          <span className="WeatherForecast-temperature-min">
            {setTemperaturaFahrenheitMin()}{" "}
          </span>
        </div>
      </div>
    );
  }
}
