// client/src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5000/api/users/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(response => {
        setUser(response.data);
      }).catch((error) => {
        console.error("Profile fetch error:", error);
        localStorage.removeItem('token');
        setUser(null);
      });
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { username, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data);
    } catch (error) {
      console.error("Login error:", error);
      throw new Error('Login failed');
    }
  };

  const register = async (username, password, email) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', { username, password, email });
      localStorage.setItem('token', response.data.token);
      setUser(response.data);
    } catch (error) {
      console.error("Registration error:", error);
      throw new Error('Registration failed'); 
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate("/");
  };


  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
