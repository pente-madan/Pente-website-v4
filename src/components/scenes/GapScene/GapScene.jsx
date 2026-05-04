import React from 'react';
import './GapScene.css';

const GapScene = () => {
  const gapItems = [
    { left: 'Static pages, no interaction', right: 'Real-time conversational experience' },
    { left: 'Passive contact forms', right: 'Intelligent lead capture at every stage' },
    { left: 'No visibility into visitor intent', right: "Full insights into who's ready to buy" },
    { left: 'Manual qualification', right: 'Automatic AI qualification' },
    { left: 'Missed opportunities after hours', right: 'Never sleeps — converts 24/7' },
  ];

  return (
    <>
      <div className="header-row">
        <div className="anim" style={{ display: 'inline-flex' }}>
          THE GAP
        </div>
        <h2 className="section-title anim">
          What you have today vs what Pente Sites delivers tomorrow.
        </h2>
      </div>

      <div className="gap-comparison anim">
        {gapItems.map((item, idx) => (
          <div key={idx} className="gap-card">
            <div className="old-way">
              <span className="label">Today</span>
              <p className="text">{item.left}</p>
            </div>
            <div className="arrow-divider">→</div>
            <div className="new-way">
              <span className="label">With Pente</span>
              <p className="text">{item.right}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GapScene;
