import React from 'react';
import './App.css';
import { ClockApp } from './pages/ClockApp';
import { WeatherApp } from './pages/WeatherApp';




function App() {
  
  return (
    <div>
    <WeatherApp/>
    <ClockApp/>
    </div>
  );
}

export default App;
