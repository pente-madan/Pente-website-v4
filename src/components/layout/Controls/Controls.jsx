import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Controls.css';

const Controls = ({ current, total, sceneTitle, onSceneClick }) => {
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

    // Animate active dot
    dotsRef.current.forEach((dot, idx) => {
      if (idx === current) {
        tl.to(dot, {
          scaleY: 1.2,
          duration: 0.3,
          ease: 'back.out(1.7)',
        }, 0).to(dot, {
          scaleY: 1,
          duration: 0.3,
          ease: 'power2.out',
        }, 0.3);
      }
    });

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
    gsap.to(dotsRef.current[index], {
      scaleX: 1.5,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleDotMouseLeave = (index) => {
    gsap.to(dotsRef.current[index], {
      scaleX: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
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
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
            <path d="M1 1l10 6-10 6V1z" fill="currentColor" />
          </svg>
        ) : (
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
            <rect x="1" y="1" width="3" height="12" fill="currentColor" />
            <rect x="8" y="1" width="3" height="12" fill="currentColor" />
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
            />
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
