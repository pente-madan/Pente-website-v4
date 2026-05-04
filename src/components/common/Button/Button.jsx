import React from 'react';
import './Button.css';

const Button = ({ variant = 'primary', children, onClick, href }) => {
  const className = variant === 'primary' ? 'btn-primary' : variant === 'nav' ? 'nav-cta' : 'cta-mega-btn';

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
