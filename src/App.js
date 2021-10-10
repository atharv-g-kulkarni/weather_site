import './App.css';

function App() {
  return (
    <div class="app">
      <div class="Todays_weather">
        <div class="temp">16 &deg;</div>
        <div class="city_datetime">
          <span class="city">London</span>
          <span class="datetime">06:09-Monday 9 sep'19</span>
        </div>
        <div class="weather">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon" height="50px" width="50px"></img>
          <span>Cloudy</span>
        </div>
      </div>
    </div>
  );
}

export default App;
