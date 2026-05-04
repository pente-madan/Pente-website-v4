import React from 'react';
import Button from '../../common/Button';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <a href="/" className="logo">
        <img src="https://res.cloudinary.com/drhyerkn7/image/upload/v1777878548/Dark_theme_logo_cnaxxz.png" alt="Pente Sites Logo" className="logo-image" />
          Pente<em>Sites</em>
      </a>
      <div className="nav-tag">PENTE SITES · AI FOR WORK</div>
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
    </nav>
  );
};

export default Navigation;
