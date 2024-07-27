import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="login-input-group">
                <label htmlFor="username" className="login-label">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="login-input form-control"
                />
              </div>
              <div className="login-input-group">
                <label htmlFor="password" className="login-label">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="login-input form-control"
                />
              </div>
              <button type="submit" className="login-button mt-3">Login</button>
            </form>
            <div className="signup-section">
              Want to become a trainer? <a href="/signup" className="signup-link">Signup</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
