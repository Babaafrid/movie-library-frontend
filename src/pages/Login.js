import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import "./Login.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to track loading
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when submitting
    try {
      await login(username, password);
      navigate('/');
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false); // Reset loading state if login fails
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='text-input'
          disabled={isLoading} // Disable input during loading
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='text-input'
          disabled={isLoading} // Disable input during loading
        />
        <button type="submit" className="button" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'} {/* Display loading text or 'Login' */}
        </button>
      </form>
      <div>
        <p>New user? <Link to="/register">Register here</Link>.</p>
      </div>
    </div>
  );
};

export default Login;
