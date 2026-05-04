import React from 'react';
import Button from '../../common/Button';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <a href="/" className="logo">
        <div className="logo-mark"></div>
        pente<em>.ai</em>
      </a>
      <div className="nav-tag">PENTE SITES · AI FOR WORK</div>
      <Button variant="nav" href="/">
        Book demo →
      </Button>
    </nav>
  );
};

export default Navigation;
