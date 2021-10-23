import './App.css';
import "axios";
import { useState } from 'react';
import axios from 'axios';

function App() {
  
  const [weather,setWeather]=useState("");
  const apikey="c6b22ba82ac0661c3d775b2062b31250";

  const apiCall=async(event)=>{
    event.preventDefault();
    const loc=event.target.elements.loc.value;
    const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=${apikey}`);
    setWeather({
      descp: res.data.weather[0].description,
      temp:res.data.main.temp,
      city:res.data.name,
      icon:res.data.weather[0].icon,
      pressure:res.data.main.pressure,
      humidity:res.data.main.humidity,
      mintemp:res.data.main.temp_min,
      maxtemp:res.data.main.temp_min,
      windspeed:res.data.wind.speed,
    });
  };
  // let k=weather.temp;
  // let c=k.toFixed(2);
  return (
    <div className = "weatherApp">
    <div className="Todays_weather">
      <div className="temp">{weather.temp} &deg;</div>
      <div className="city_datetime">
        <span className="city">{weather.city}</span>
        <span className="datetime">06:09-Monday 9 sep'19</span>
      </div>
      <div className="weather">
        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="weather icon" className="w-icon" height="50px" width="50px"></img>
        <span>{weather.descp}</span>
      </div>
      
    </div >

<div className="App">
<div>

  <div className="input">
    <form className="d-flex" onSubmit={apiCall}>
      <input className="form-control me-2" type="search" placeholder="Search Here" aria-label="Search" name="loc"/>
      <button className="btn" type="submit">Search</button>
    </form>



  </div>
  <hr></hr>
  <div className="page">Todays weather</div>
  <table>
    <tbody>
    <tr>
      <th>Min Temp</th>
      <td>{weather.mintemp}&deg;</td>
    </tr>
    <tr>
      <th>Max Temp</th>
      <td>{weather.maxtemp}&deg;</td>
    </tr>
    <tr>
      <th>Presssure</th>
      <td>{weather.pressure}</td>
    </tr>
    <tr>
      <th>Humidity</th>
      <td>{weather.humidity}</td>
    </tr>
    <tr>
      <th>WindSpeed</th>
      <td>{weather.windspeed}</td>
    </tr>
    </tbody>
  </table>
  <hr></hr>
  <div className="page">Cities</div>
  {/* <div className = "cities">
       <button  id="butn1">Button</button>  
       <button  id="butn2">Button</button>
       <button  id="butn3">Button</button>
       <button  id="butn4">Button</button>
  </div> */}
  <div className = "cities">
      <div><button className="butn">Pune</button></div>
      <div><button className="butn">Kolkata</button></div>
      <div><button className="butn">London</button></div>
      <div><button className="butn">Paris</button></div>
  </div>
</div>
</div>
</div>
);
}

export default App;
