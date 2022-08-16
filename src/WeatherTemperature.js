import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <span>
        <strong>{Math.round(props.data)}</strong>
        <span className="units">
          °C |
          <a href="/" onClick={convertFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.data * 9) / 5 + 32;
    return (
      <span>
        <strong>{Math.round(fahrenheit)}</strong>
        <span className="units">
          <a href="/" onClick={convertMetric}>
            °C
          </a>
          | °F
        </span>
      </span>
    );
  }
}
