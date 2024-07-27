import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer/Footer'; // Import the Footer component
import './App.css'; // Global CSS

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
