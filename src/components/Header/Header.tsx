import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assets/Icons/logo.svg" alt="Logo" className="logo-img" />
      </div>
      
      <div className="navbar-links-desktop">
        <a href="#about">О нас</a>
        <a href="#advantages">Преимущества</a>
        <a href="#services">Услуги</a>
        <a href="#portfolio">Портфолио</a>
        <a href="#reviews">Отзывы</a>
        <a href="#contacts">Контакты</a>
      </div>
      
      <div className="telegram-button-desktop">
        <img src="/assets/Icons/telegram.svg" alt="Telegram" className="telegram-icon" />
        <span>Telegram</span>
      </div>
      
      <div className="mobile-menu-button" onClick={toggleMenu}>
        <img src="/assets/Icons/menu.svg" alt="Menu" className="menu-icon" />
      </div>
      
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <div className="close-button" onClick={closeMenu}>
            <img src="/assets/Icons/close.svg" alt="Close" className="close-icon" />
          </div>
          
          <div className="mobile-links">
            <a href="#about" onClick={closeMenu}>О нас</a>
            <a href="#advantages" onClick={closeMenu}>Преимущества</a>
            <a href="#services" onClick={closeMenu}>Услуги</a>
            <a href="#portfolio" onClick={closeMenu}>Портфолио</a>
            <a href="#reviews" onClick={closeMenu}>Отзывы</a>
            <a href="#contacts" onClick={closeMenu}>Контакты</a>
          </div>
          
          <div className="telegram-button-mobile">
            <img src="/assets/Icons/telegram.svg" alt="Telegram" className="telegram-icon" />
            <span>Telegram</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;