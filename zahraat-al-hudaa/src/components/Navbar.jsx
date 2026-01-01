import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import translations from "../data/translations";
import "../styles/navbar.css";

export default function Navbar({ lang, setLang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const t = translations[lang];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      const mobileBreakpoint = 768;
      const nowIsMobile = window.innerWidth < mobileBreakpoint;
      
      // If switching from mobile to desktop view
      if (!nowIsMobile && isMobileView) {
        setIsMenuOpen(false);
      }
      
      setIsMobileView(nowIsMobile);
    };

    handleResize();
    
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileView]);

  // Close menu when clicking outside on desktop
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && window.innerWidth >= 768) {
        const mobileDrawer = document.querySelector('.navbar__mobile-drawer');
        const menuButton = document.querySelector('.navbar__menu-toggle');
        
        if (mobileDrawer && 
            !mobileDrawer.contains(e.target) && 
            !menuButton?.contains(e.target)) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);


  useEffect(() => {
    if (isMenuOpen && window.innerWidth < 768) {
    }
  }, [isMenuOpen]);

  const toggleLanguage = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", label: t.nav.home },
    { path: "/about", label: t.nav.about },
    { path: "/services", label: t.nav.services },
    { path: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      <nav
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
        dir={lang === "ar" ? "rtl" : "ltr"}
        aria-label="Main navigation"
      >
        <div className="navbar__brand">
          <img 
            src="/logo.png" 
            alt="Zahraat Al Hudaa Logo" 
            className="navbar__logo" 
          />
          <span className="navbar__company-name">
            {t.nav.companyName || "Zahraat Al Hudaa"}
          </span>
        </div>
        <div className="navbar__desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "navbar__link--active" : ""}`
              }
              end
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="navbar__controls">
          <button 
            className="navbar__language-toggle navbar__language-toggle--desktop" 
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            <span className="navbar__language-icon">🌐</span>
            {lang === "en" ? "العربية" : "English"}
          </button>

          <button
            className="navbar__menu-toggle"
            onClick={toggleMobileMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="navbar__menu-icon">
              {isMenuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className="navbar__overlay"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
      <aside
        id="mobile-navigation"
        className={`navbar__mobile-drawer ${isMenuOpen ? "navbar__mobile-drawer--open" : ""}`}
        dir={lang === "ar" ? "rtl" : "ltr"}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <header className="navbar__mobile-header">
          <h2 className="navbar__mobile-title">
            {t.nav.companyName || "Zahraat Al Hudaa"}
          </h2>
          <button 
            className="navbar__close-button"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
          >
            <span className="navbar__close-icon">✕</span>
          </button>
        </header>
        <nav className="navbar__mobile-nav" aria-label="Mobile menu">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}`
              }
              end
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="navbar__mobile-actions">
          <button
            className="navbar__mobile-language-btn"
            onClick={() => {
              toggleLanguage();
              closeMobileMenu();
            }}
            aria-label="Switch language"
          >
            <span className="navbar__language-icon">🌐</span>
            {lang === "en" ? "Switch to العربية" : "Switch to English"}
          </button>
        </div>
      </aside>
    </>
  );
}