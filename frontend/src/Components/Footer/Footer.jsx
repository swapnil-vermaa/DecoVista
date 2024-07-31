import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo.png';
import footer_logo_white from '../Assets/logo-white.png';  // Import the white logo
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = ({ theme }) => {
  return (
    <div className={`footer ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="footer-logo">
        <img 
          className='footer-logo-img' 
          src={theme === 'dark' ? footer_logo_white : footer_logo}  // Use the white logo in dark mode
          alt="DecoVista Logo" 
        />
        <p className={theme === 'dark' ? 'dark-text' : ''}>DecoVista</p>
      </div>
      <ul className={`footer-links ${theme === 'dark' ? 'dark-text' : ''}`}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="Pinterest" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>
      <div className={`footer-copyright ${theme === 'dark' ? 'dark-text' : ''}`}>
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
