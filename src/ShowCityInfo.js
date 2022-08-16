import React from "react";
import FormatData from "./FormatData";

export default function ShowCityInfo(props) {
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
            <img
              src={props.data.icon}
              className="float-start"
              alt={props.data.description}
            />
            <div className="float-start">
              <strong>{Math.round(props.data.temperature)}</strong>
              <span className="units">
                <a href="https://www.google.com/" className="active">
                  °C
                </a>
                |<a href="https://www.google.com/">°F</a>
              </span>
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
