import Weather from "./Weather";
import Sign from "./Sign";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  let [weather, setWeather] = useState({ load: false });
  function showTemperature(responce) {
    console.log(responce);
    setWeather({
      city: responce.data.name,
      timedata: responce.data.dt,
      temperature: responce.data.main.temp,
      description: responce.data.weather[0].description,
      humidity: responce.data.main.humidity,
      wind: responce.data.wind.speed,
      icon: responce.data.weather[0].icon,
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
