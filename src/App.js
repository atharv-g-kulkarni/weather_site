import './App.css';
import "axios";

function App() {
  return (
    <div class = "weatherApp">


    
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
      
    </div >

<div class="App">
<div>

  <div class="input">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search Here" aria-label="Search" />
      <button class="btn" type="submit">Search</button>
    </form>



  </div>
  <hr></hr>
  <div class="page">Todays_weather</div>
  <table>
    <tr>
      <th>Clouds</th>
      <td>50%</td>
    </tr>
    <tr>
      <th>Density</th>
      <td>5.3Kg/m<sup>3</sup></td>
    </tr>
    <tr>
      <th>WindSpeed</th>
      <td>20mph</td>
    </tr>
  </table>
  <hr></hr>
    
  <div class = "cities">
  <button type="button" class="btn btn-light" id="butn">Pune</button>
  <button type="button" class="btn btn-light" id="butn">Kolkata</button>
  <button type="button" class="btn btn-light" id="butn">London</button>
  <button type="button" class="btn btn-light" id ="butn">Paris</button>
  </div>

</div>
</div>
</div>








  );
}

export default App;
