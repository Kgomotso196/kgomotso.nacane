import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import logo from '../assets/images/TroosLogo.png';
import '../styles/NavBar.css';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  const toggleMode = () => {
    document.body.classList.toggle('dark-mode');
    setIsDarkMode(prevMode => !prevMode);
    localStorage.setItem('mode', isDarkMode ? 'light' : 'dark');
  }

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo"/>
      </div>
      <div className="nav-items">
        <ul className={isMobileMenuOpen ? 'hidden' : ''}>
          <li className="list-items"><Link to="/">Home</Link></li>
          <li className="list-items"><Link to="/about">About</Link></li>
          <li className="list-items"><Link to="/portfolio">Portfolio</Link></li>
          <li className="list-items"><Link to="/accomplishments">Accomplishments</Link></li>
          <li className="list-items"><Link to="/contact">Contact</Link></li>
          <li>
            <button onClick={toggleMode} className="mode-button">
              {isDarkMode ? '☾' : '🕯'}
            </button>
          </li>
          <li>
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>☰</button>
          </li>
        </ul>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </div>
  );
}

export default NavBar;
