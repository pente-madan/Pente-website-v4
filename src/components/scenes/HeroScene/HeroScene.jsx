import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from '../../common/Button';
import './HeroScene.css';

const HeroScene = () => {
  const wordsRef = useRef([]);

  useEffect(() => {
    // Animate words appearing one by one
    gsap.fromTo(
      wordsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        delay: 0.3,
      }
    );
  }, []);

  const headingWords = [
    { text: 'A', break: false },
    { text: 'website', break: false },
    { text: 'is', break: false },
    { text: 'no', break: false },
    { text: 'longer', break: true },
    { text: 'a page.', break: true, strike: true },
    { text: 'It', break: false },
    { text: 'is', break: false },
    { text: 'a', break: false },
    { text: 'conversation', break: true, italic: true },
    { text: 'that', break: false },
    { text: 'closes', break: false },
    { text: 'deals.', break: false },
  ];

  return (
    <div className="grid">
      <div>
        <div className="header-row">
          <div className="anim" style={{ display: 'inline-flex' }}>
            THE PITCH
          </div>
          <h1 className="section-title anim">
            {headingWords.map((word, idx) => (
              <React.Fragment key={idx}>
                <span
                  ref={(el) => (wordsRef.current[idx] = el)}
                  className={`word ${word.strike ? 'strike' : ''} ${word.italic ? 'italic' : ''}`}
                >
                  {word.text}
                </span>
                {word.break && <br />}
                {!word.break && ' '}
              </React.Fragment>
            ))}
          </h1>
        </div>
        <p className="sub anim">
          Your 24/7 AI sales agent. Engages every visitor, qualifies them in real time, and turns existing
          traffic into pipeline.
        </p>
        <div className="anim">
          <Button href="#">
            Book your 15-min demo
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
      </div>
    </div>
  );
};

export default HeroScene;
