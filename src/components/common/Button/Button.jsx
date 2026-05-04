import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Button.css';

const Button = ({ variant = 'primary', children, onClick, href }) => {
  const buttonRef = useRef(null);
  const className = variant === 'primary' ? 'btn-primary' : variant === 'nav' ? 'nav-cta' : 'cta-mega-btn';

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      if (variant === 'mega') {
        gsap.to(button, {
          y: -3,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out',
        });
        
        const arrow = button.querySelector('svg');
        if (arrow) {
          gsap.to(arrow, {
            x: 5,
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      } else {
        gsap.to(button, {
          y: variant === 'primary' ? -2 : -1,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
      
      const arrow = button.querySelector('svg');
      if (arrow) {
        gsap.to(arrow, {
          x: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [variant]);

  if (href) {
    return (
      <a ref={buttonRef} href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button ref={buttonRef} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
