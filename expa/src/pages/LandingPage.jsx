import React from 'react';
import './LandingPage.css'; 
import banner from "../assets/banner.png"; 
import Navbar from "../components/navbar"
import Footer from '../components/Footer';
const LandingPage = () => {
  return (
    <div>
    <Navbar/>
    <div className="landing-page">
      <header className="landing-header">
        <img src={banner} alt="Welcome Banner" className="landing-banner" />
      </header>
      <section className="landing-content">
        <h2>About Us</h2>
        <p>We are dedicated to enhancing the quality and scalability of training provided at National Cadet Corps (NCC) camps across India. Our core mission is to ensure that every NCC trainee receives exceptional training, guided by experienced and skilled trainers.</p>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default LandingPage;
