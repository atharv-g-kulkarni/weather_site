import './App.css';
import axios from "axios";

function App() {
  return (
      <div className="Todays_weather">
        <div className="temp">16 &deg;</div>
        <div className="city_datetime">
          <span className="city">London</span>
          <span className="datetime">06:09-Monday 9 sep'19</span>
        </div>
        <div className="weather">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon" height="50px" width="50px"></img>
          <span>Cloudy</span>
        </div>
      </div>
  );
}

export default App;
