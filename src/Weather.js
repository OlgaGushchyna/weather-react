import "./Weather.css";

export default function Weather(props) {
  let weather = {
    city: props.weather.city,
    date: props.weather.date,
    temperature: props.weather.temperature,
    description: props.weather.description,
    humidity: props.weather.humidity,
    wind: props.weather.wind,
    icon: props.weather.icon,
  };

  return (
    <div className="Weather">
      <span className="Cities">
        <span className="city text-primary">Lisbon</span>
        <span className="city text-primary">Paris</span>
        <span className="city text-primary">Sydney</span>
        <span className="city text-primary">San Francisco</span>
      </span>

      <form className="row mb-3 mt-3">
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
          />
        </div>
      </form>
      <div className="ShowCity">
        <h1>{weather.city} </h1>
        <ul>
          <li>
            Last updated: <span>{weather.date} </span>
          </li>
          <li>{weather.description}</li>
        </ul>
      </div>

      <div className="row ShowTemp">
        <div className="col-6">
          <div className="clearfix temperature">
            <img src={weather.icon} className="float-start" alt="Sun" />
            <div className="float-start">
              <strong>{Math.round(weather.temperature)}</strong>
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
              Humidity: <span></span> {weather.humidity} %
            </li>
            <li>
              Wind: <span></span> {weather.wind} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
