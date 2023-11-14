import React from 'react';
import '../styles/MobileMenu.css';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><a href="#home" onClick={onClose}>Home</a></li>
        <li><a href="#about" onClick={onClose}>About</a></li>
        <li><a href="#portfolio" onClick={onClose}>Portfolio</a></li>
        <li><a href="#accomplishments" onClick={onClose}>Accomplishments</a></li>
        <li><a href="#contact" onClick={onClose}>Contact</a></li>
      </ul>
      <button className="close-btn" onClick={onClose}>X</button>
    </div>
  );
}

export default MobileMenu;
