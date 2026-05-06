import React from 'react';
import Button from '../../common/Button';
import { useTheme } from '../../../hooks/useTheme';
import './Navigation.css';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="nav">
      <a href="/" className="logo">
        <img src="https://res.cloudinary.com/drhyerkn7/image/upload/v1777878548/Dark_theme_logo_cnaxxz.png" alt="Pente Sites Logo" className="logo-image" />
          Pente <span className="sites">Sites</span>
      </a>
      <div className="nav-tag">PENTE SITES · AI FOR WORK</div>
      <div className="nav-actions">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
        <Button variant="nav" href="/">
          Book demo
          <svg width="16" height="11" viewBox="0 0 18 12" fill="none">
            <path
              d="M1 6h15m0 0L11 1m5 5l-5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
