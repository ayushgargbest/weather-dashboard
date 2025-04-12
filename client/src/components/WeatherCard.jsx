import React from 'react';
const WeatherCard = ({ data }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '1rem',
      maxWidth: '300px',
      margin: '1rem auto'
    }}>
      <h2>{data.city}</h2>
      <img src={data.icon} alt={data.condition} />
      <p><strong>Temperature:</strong> {data.temperature}°C</p>
      <p><strong>Condition:</strong> {data.condition}</p>
      <p><strong>Humidity:</strong> {data.humidity}%</p>
      <p><strong>Wind Speed:</strong> {data.windSpeed} m/s</p>
    </div>
  );
};
export default WeatherCard;