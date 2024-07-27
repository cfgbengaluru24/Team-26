import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css'; 
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const navigate = useNavigate();
  const [isTrainer, setIsTrainer] = useState(true);

  const handleLoginClick = () => {
    setIsTrainer(true);
    navigate('/login', { state: { isTrainer: true } });
  };

  const handleLoginAdmin = () => {
    setIsTrainer(false);
    navigate('/login', { state: { isTrainer: false } });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </a>
      </div>
      <div className="navbar-links">
        <button className="login-button" onClick={handleLoginClick}>Login for trainer</button>
        <button className="login-button" onClick={handleLoginAdmin}>Login for admin</button>
      </div>
    </nav>
  );
};

export default Navbar;
