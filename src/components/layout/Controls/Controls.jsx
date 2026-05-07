import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Controls.css';

const Controls = ({ current, total, sceneTitle, onSceneClick, onTogglePlay, isPaused }) => {
  const pad = (n) => String(n + 1).padStart(2, '0');
  const playPauseRef = useRef(null);
  const dotsRef = useRef([]);
  const titleRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const button = playPauseRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Animate on scene transition
  useEffect(() => {
    const tl = gsap.timeline();

    // Animate title
    if (titleRef.current) {
      tl.fromTo(titleRef.current, 
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' },
        0.1
      );
    }

    // Animate number
    if (numberRef.current) {
      tl.fromTo(numberRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        0.1
      );
    }

    return () => {
      tl.kill();
    };
  }, [current, sceneTitle]);

  const handleDotMouseEnter = (index) => {
    const dotInner = dotsRef.current[index]?.querySelector('.dot-inner');
    if (dotInner) {
      gsap.to(dotInner, {
        scale: 1.2,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleDotMouseLeave = (index) => {
    const dotInner = dotsRef.current[index]?.querySelector('.dot-inner');
    if (dotInner) {
      gsap.to(dotInner, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  return (
    <div className="controls">
      <button
        ref={playPauseRef}
        className="play-pause"
        onClick={onTogglePlay}
        aria-label={isPaused ? 'Play' : 'Pause'}
      >
        {isPaused ? (
          // Play icon from Lucide Icons (lucide.dev)
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M5 3L19 12L5 21V3Z" 
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          // Pause icon from Lucide Icons (lucide.dev)
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
            <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
          </svg>
        )}
      </button>

      <div className="dots-container">
        <div className="scene-dots">
          {Array.from({ length: total }).map((_, idx) => (
            <button
              key={idx}
              ref={(el) => (dotsRef.current[idx] = el)}
              className={`scene-dot ${idx === current ? 'active' : ''} ${idx < current ? 'played' : ''}`}
              onClick={() => onSceneClick(idx)}
              onMouseEnter={() => handleDotMouseEnter(idx)}
              onMouseLeave={() => handleDotMouseLeave(idx)}
              aria-label={`Scene ${idx + 1}`}
            >
              <span className="dot-outer-ring"></span>
              <span className="dot-inner"></span>
            </button>
          ))}
        </div>
        <div className="scene-title-wrapper" ref={titleRef}>
          <span className="title">{sceneTitle}</span>
        </div>
      </div>

      <div className="scene-number" ref={numberRef}>
        <span className="num">
          {pad(current)} / {pad(total - 1)}
        </span>
      </div>
    </div>
  );
};

export default Controls;
