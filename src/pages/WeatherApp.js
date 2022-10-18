import React,{useState} from 'react'
import { dateBuilder } from '../shared/things_functions';
import { capitalizeFirstLetter } from '../shared/things_functions';
import { api } from '../shared/things_functions';

export const WeatherApp = () => {
    const [query, setQuery] = useState('');
    const [weather,setWeather] = useState('');
   
    const search = evt => {
    if (evt.key === "Enter"){
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res=> res.json())
            .then(result =>{
                setWeather(result);
                setQuery('');
                console.log(result);
              });
              
      }
    }
    
  return (
    <div className={(typeof weather.main != "undefined")
                      ? ((weather.main.temp > 15)
                      ? 'app pink' : 'app'):"app"}>
      <main>
        <div className="buscador-box">
          <input type="text"
                className="buscador"
                placeholder="What weather is it in..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
                />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div className='info-box'>
        <div className='local-box'>
          <div className='local'>
            {weather.name}, {weather.sys.country}
          </div>
          <div className='date'>
            {dateBuilder(new Date())}
          </div>
        </div>
        <div className="tiempo-box">
          <div className="temp">
            {Math.round(weather.main.temp)}ºc
          </div>
          <div className="temp_max">
            {Math.round(weather.main.temp_max)}ºc
          </div>
          <div className="temp_min">
            {Math.round(weather.main.temp_min)}ºc
          </div>
          <div className="tiempo">
            {capitalizeFirstLetter(weather.weather[0].description)}
          </div>
        </div>
        </div>
        ):('')}
      </main>
    </div>
  )
}
