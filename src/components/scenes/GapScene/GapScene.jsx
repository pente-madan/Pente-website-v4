import React, { useState } from 'react';
import './GapScene.css';

const GapScene = () => {
  const [isHovered, setIsHovered] = useState(false);

  const gapItems = [
    { left: 'Static pages, no interaction', right: 'Real-time conversational experience' },
    { left: 'Passive contact forms', right: 'Intelligent lead capture at every stage' },
    { left: 'No visibility into visitor intent', right: "Full insights into who's ready to buy" },
    { left: 'Manual lead qualification', right: 'Intelligent AI lead qualification' },
    { left: 'Missed opportunities after hours', right: 'Never sleeps, converts 24/7' },
  ];

  // Random rotations for crumpled effect
  const rotations = [-12, 8, -6, 10, -9];

  return (
    <>
      <div className="header-row">
        <div className="accent-badge anim">THE GAP</div>
        <h2 className="section-title anim">
          What you have today <span className="vs">vs</span> What we deliver tomorrow.
        </h2>
      </div>

      <div className="crumpled-comparison anim">
        {/* Left Box - Today (Before) */}
        <div
          className={`comparison-box box-left ${isHovered ? 'is-hovered' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="box-header">
            <span className="box-label">Today</span>
          </div>
          <div className="capsules-container">
            {gapItems.map((item, idx) => (
              <div
                key={idx}
                className="capsule capsule-left"
                style={{
                  '--crumpled-rotate': `${rotations[idx]}deg`,
                }}
              >
                <span className="capsule-arrow">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </span>
                <span className="capsule-text">{item.left}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Box - With Pente (After) */}
        <div
          className={`comparison-box box-right ${isHovered ? 'is-hovered' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="box-header">
            <span className="box-label">With Pente</span>
          </div>
          <div className="capsules-container">
            {gapItems.map((item, idx) => (
              <div
                key={idx}
                className="capsule capsule-right"
                style={{
                  '--crumpled-rotate': `${rotations[(idx + 2) % 5]}deg`,
                }}
              >
                <span className="capsule-arrow">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </span>
                <span className="capsule-text">{item.right}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GapScene;