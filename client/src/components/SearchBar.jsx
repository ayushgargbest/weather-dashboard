import React, { useState } from 'react';
const SearchBar=({onSearch})=>{
  const [city, setCity] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity('');
  };
  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchBar;