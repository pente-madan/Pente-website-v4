import React from 'react';
import Eyebrow from '../../common/Eyebrow';
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
          <Eyebrow>THE GAP</Eyebrow>
        </div>
        <h2 className="section-title anim">
          What you have today vs. what <em>Pente Sites</em> delivers tomorrow.
        </h2>
      </div>

      <div className="gap-table anim">
        <div className="gap-row header">
          <div className="left">Today</div>
          <div className="right">With Pente</div>
        </div>
        {gapItems.map((item, idx) => (
          <div key={idx} className="gap-row">
            <div className="left">{item.left}</div>
            <div className="right">{item.right}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GapScene;
