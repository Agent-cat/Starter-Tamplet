import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="App">
      <Navbar user={user} onLogout={handleLogout} />
      <AppRoutes onLogin={handleLogin} />
    </div>
  );
};

export default App;