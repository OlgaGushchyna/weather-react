import React from "react";
import FormatData from "./FormatData";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function ShowCityInfo(props) {
  function updateUnits(evt) {
    props.func(evt);
  }

  return (
    <div className="ShowCityInfo">
      <h1>{props.data.city} </h1>
      <ul>
        <li>
          Last updated:{" "}
          <span>
            <FormatData data={props.data.timedata} />
          </span>
        </li>
        <li>{props.data.description}</li>
      </ul>

      <div className="row ShowTemp">
        <div className="col-6">
          <div className="clearfix temperature">
            <div className="float-start">
              <WeatherIcon data={props.data.icon} size={52} />
            </div>
            <div className="float-start">
              <WeatherTemperature
                data={props.data.temperature}
                func={updateUnits}
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span></span> {props.data.humidity} %
            </li>
            <li>
              Wind: <span></span> {props.data.wind} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
