import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let weather = {
    city: "London",
    date: "Sunday, 12:35",
    temperature: 20,
    description: "cloud",
    humidity: 75,
    wind: 2.5,
    icon: `http://openweathermap.org/img/wn/04d@2x.png`,
  };

  return (
    <div className="App">
      <Weather weather={weather} />
    </div>
  );
}

export default App;
