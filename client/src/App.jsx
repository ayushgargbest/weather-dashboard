import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fetchWeather = async (city) => {
    if (!city) return;
    setLoading(true);
    setError('');
    setWeatherData(null);
    try {
      const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeatherData(response.data);
    } 
    catch (err) {
      setError('City not found or API error');
    } 
    finally {
      setLoading(false);
    }
  };
  return (
    <div className="App" style={{textAlign:'center',padding:'2rem', border:'solid'}}>
      <h1>🌦️ Real-Time Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}
export default App;