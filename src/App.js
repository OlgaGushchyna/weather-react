import Weather from "./Weather";
import Sign from "./Sign";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  let [weather, setWeather] = useState({ load: false });
  function showTemperature(response) {
    console.log(response);
    setWeather({
      city: response.data.name,
      coord: response.data.coord,
      timedata: response.data.dt,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      load: true,
    });
  }

  if (weather.load) {
    return (
      <div className="App">
        <div className="WeatherApp">
          <Weather weather={weather} />
        </div>
        <Sign />
      </div>
    );
  } else {
    const apiKey = "8de23b651e5e3f370c28643f6fc1640b";

    function showPosition(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(showTemperature);
      console.log(apiUrl);
    }
    navigator.geolocation.getCurrentPosition(showPosition);

    return (
      <div className="App">
        <div className="WeatherApp">
          <h3>Loading weather....</h3>
        </div>
        <Sign />
      </div>
    );
  }
}
