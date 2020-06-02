import React, { useState } from 'react'
import axios from 'axios'
const api = {
  ApiKey: "a88f916a25b2e9f8461ad6d8bd52db4b",
  baseUrl: "https://api.openweathermap.org/data/2.5/"
}

const App = () => {
  const [query, SetQuery] = useState('')
  const [weather, SetWeather] = useState({})

  const search = (event) => {
    if (event.key === "Enter") {
      axios.get(`${api.baseUrl}/weather?q=${query}&units=metric&appid=${api.ApiKey}`)
        .then(response => {
          SetWeather(response.data)
          SetQuery('')
          console.log(response.data)
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
  const dataBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day}${date}${month}${year}`
  }
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" value={query} onChange={e => SetQuery(e.target.value)} onKeyPress={search} placeholder="Enter your City" />
        </div>
        {(typeof weather.main !== "undefined") ? (
          <div >
            <div className="location-box">
              <div className="location">{weather.name} , {weather.sys.country}</div>
              <div className="date">{dataBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp"> {Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>

          </div>) : null}

      </main>

    </div>
  )
}

export default App
