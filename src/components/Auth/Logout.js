import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('https://blog-app-6ubi.onrender.com/api/auth/logout'); // Optional, if backend needs to clear session
      localStorage.removeItem('token'); // Clear token from local storage
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
