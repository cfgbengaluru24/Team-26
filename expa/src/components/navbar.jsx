import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css'; 
import logo from './Assets/logo.png'; 

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
      </div>
      <div className="navbar-links">
        <button className="login-button" onClick={handleLoginClick}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
