import React, { useState } from 'react';
import './GapScene.css';

const GapScene = () => {
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

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
          className={`comparison-box box-left ${leftHovered ? 'is-hovered' : ''}`}
          onMouseEnter={() => setLeftHovered(true)}
          onMouseLeave={() => setLeftHovered(false)}
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
                {item.left}
              </div>
            ))}
          </div>
        </div>

        {/* Right Box - With Pente (After) */}
        <div
          className={`comparison-box box-right ${rightHovered ? 'is-hovered' : ''}`}
          onMouseEnter={() => setRightHovered(true)}
          onMouseLeave={() => setRightHovered(false)}
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
                {item.right}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GapScene;