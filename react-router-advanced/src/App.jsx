import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Post from './components/BlogPost';

import ProtectedRoute from './components/ProtectedRoute';

const isAuthenticated = false; // Replace with actual authentication logic

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:Id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
