// src/App.jsx
import  { useState } from 'react';
import SearchBar from './components/SearchBar';
import { searchGitHubUser } from './services/githubAPI';

const App = () => {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    try {
      const result = await searchGitHubUser(username);
      setUser(result);
    } catch (error) {
      console.error('Error fetching user:', error);
      setUser(null);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url}>View Profile</a>
        </div>
      )}
    </div>
  );
};

export default App;
