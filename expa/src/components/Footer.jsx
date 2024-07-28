import React from 'react';
import './Footer.css';
import footerImage from '../assets/footer.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <img src={footerImage} alt="Footer" className="footer-image" />
    </footer>
  );
};

export default Footer;
