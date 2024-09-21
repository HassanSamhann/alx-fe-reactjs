// src/components/Search.jsx
//"avatar_url", "login", "Loading", "Looks like we cant find the user", "img"  "fetchUserData" "async", "await", "map", "&&"
import  { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <div>
     <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-md" >
  <input 
  className="p-2 border rounded"
    type="text"
    placeholder="Enter GitHub username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
  />
  <input
  className="p-2 border rounded"
    type="text"
    placeholder="Location"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
  />
  <input
  className="p-2 border rounded"
    type="number"
    placeholder="Minimum Repositories"
    value={repos}
    onChange={(e) => setRepos(e.target.value)}
  />
  <button type="submit">Search</button>
</form>

    </div>
  );
};

export default Search;
