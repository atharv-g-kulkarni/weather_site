import './App.css';
import  "axios";

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
      <div class="App">
        <div>

          <div class="input">
          <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search Here" aria-label="Search"/>
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
        
          

        </div>
      </div>
    </div>


  );
}

export default App;
