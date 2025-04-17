import React, { useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assets/Icons/logo.svg" alt="Logo" className="logo-img" />
      </div>

      <div className="navbar-links-desktop">
        <span onClick={() => scrollToSection("about")}>О нас</span>
        <span onClick={() => scrollToSection("advantages")}>Преимущества</span>
        <span onClick={() => scrollToSection("services")}>Услуги</span>
        <span onClick={() => scrollToSection("portfolio")}>Портфолио</span>
        <span onClick={() => scrollToSection("reviews")}>Отзывы</span>
        <span onClick={() => scrollToSection("contacts")}>Контакты</span>
      </div>

      <div className="telegram-button-desktop" onClick={() => window.open('https://t.me/GEORG653', '_blank')}>
        <img
          src="/assets/Icons/telegram.svg"
          alt="Telegram"
          className="telegram-icon"
        />
        <span>Telegram</span>
      </div>

      <div className="mobile-menu-button" onClick={toggleMenu}>
        <img src="/assets/Icons/menu.svg" alt="Menu" className="menu-icon" />
      </div>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <div className="close-button" onClick={closeMenu}>
            <img
              src="/assets/Icons/close.svg"
              alt="Close"
              className="close-icon"
            />
          </div>

          <div className="mobile-links">
            <span onClick={() => scrollToSection("about")}>О нас</span>
            <span onClick={() => scrollToSection("advantages")}>
              Преимущества
            </span>
            <span onClick={() => scrollToSection("services")}>Услуги</span>
            <span onClick={() => scrollToSection("portfolio")}>Портфолио</span>
            <span onClick={() => scrollToSection("reviews")}>Отзывы</span>
            <span onClick={() => scrollToSection("contacts")}>Контакты</span>
          </div>

          <div className="telegram-button-mobile" onClick={() => window.open('https://t.me/GEORG653', '_blank')}>
            <img
              src="/assets/Icons/telegram.svg"
              alt="Telegram"
              className="telegram-icon"
            />
            <span>Telegram</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
