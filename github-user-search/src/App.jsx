// src/App.jsx
import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUser(null);
    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users.map((user) => (
  <div key={user.id} className="flex items-center p-4 border-b">
    <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
    <div className="ml-4">
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a>
      <p>Location: {user.location}</p>
      <p>Repositories: {user.public_repos}</p>
    </div>
  </div>
))}
    </div>
  );
};

export default App;
