// src/App.jsx
import { useState } from 'react';
import WeatherSearch from './components/WeatherSearch';
import WeatherDetails from './components/WeatherDetails';
import weatherService from './services/weatherService'; // Assuming weatherService.js is correctly implemented

const App = () => {
  const [weather, setWeather] = useState({});

  // Function to fetch data and set the weather state
  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
  );
};

export default App;
