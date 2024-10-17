import React, { useState } from 'react';
import '../styles/mainpage.css'; // CSS file for styling

// Import the images
import dataLogo from '../images/data.png'; // Logo image path
import image1 from '../images/undraw_online_media_re_r9qv 1.svg';
import image2 from '../images/undraw_podcast_re_wr88 (2) 1.svg';
import image3 from '../images/undraw_text_field_htlv 1.svg';

const MainPage = () => {
  const [profileDropdown, setProfileDropdown] = useState(false);

  const toggleDropdown = () => {
    setProfileDropdown(!profileDropdown);
  };

  return (
    <div className="mainpage-container">
      {/* Navbar */}
      <header className="mainpage-navbar">
        <div className="mainpage-logo">
          <img src={dataLogo} alt="Logo" className="mainpage-logo-img" />
          <h1>Data Dialect</h1>
        </div>
        <nav>
          <ul>
            <li>HOME</li>
            <li>GOALS</li>
            <li>DATA</li>
            <li>BONUS</li>
            <li className="profile" onClick={toggleDropdown}>
              PROFILE
              {profileDropdown && (
                <ul className="dropdown-menu open">
                  <li>View Profile</li>
                  <li>Help</li>
                  <li>Notifications</li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </header>

      {/* Rest of the page content */}
      <div className="mainpage-content">
        <div className="mainpage-card">
          <img src={image1} alt="NLP" className="mainpage-card-img" />
          <p>Our NLP website operates by collecting text data from various sources...</p>
        </div>
        <div className="mainpage-card">
          <img src={image2} alt="Voice Data" className="mainpage-card-img" />
          <p>For voice data, our platform captures audio inputs...</p>
        </div>
        <div className="mainpage-card">
          <img src={image3} alt="Video Data" className="mainpage-card-img" />
          <p>When it comes to video data, our site analyzes audiovisual content...</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mainpage-footer">
        <p className="mainpage-rights">All rights reserved at Data Dialect ©2024</p>
      </footer>

      {/* Day Streak Box - Positioned at the bottom-right */}
      <div className="mainpage-day-streak">
        <p>DAY STREAK!</p>
        <div className="mainpage-streak">
          <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
