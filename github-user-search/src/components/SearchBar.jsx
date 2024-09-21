// src/components/SearchBar.jsx
import  { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      onSearch(username);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search GitHub User"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
