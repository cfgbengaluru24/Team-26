import React from 'react';
import './LandingPage.css'; 
import banner from './Assets/banner.png'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <img src={banner} alt="Welcome Banner" className="landing-banner" />
      </header>
      <section className="landing-content">
        <h2>About Us</h2>
        <p>We are dedicated to enhancing the quality and scalability of training provided at National Cadet Corps (NCC) camps across India. Our core mission is to ensure that every NCC trainee receives exceptional training, guided by experienced and skilled trainers.</p>
      </section>
    </div>
  );
};

export default LandingPage;
