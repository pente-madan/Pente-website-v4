import React from 'react';
import './GapScene.css';

const GapScene = () => {
  const gapItems = [
    { 
      left: 'Static pages, no interaction', 
      right: 'Real-time conversational experience',
      oldIcon: (
        <svg className="old-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M6 7h8M6 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      newIcon: (
        <svg className="new-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3l-3 3-3-3H5a2 2 0 0 1-2-2V5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="7" cy="8.5" r="0.5" fill="currentColor"/>
          <circle cx="10" cy="8.5" r="0.5" fill="currentColor"/>
          <circle cx="13" cy="8.5" r="0.5" fill="currentColor"/>
        </svg>
      )
    },
    { 
      left: 'Passive contact forms', 
      right: 'Intelligent lead capture at every stage',
      oldIcon: (
        <svg className="old-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="3" width="12" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M7 7h6M7 10h4M7 13h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      newIcon: (
        <svg className="new-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 3C8 3 6 4.5 6 7c0 3 4 6 4 6s4-3 4-6c0-2.5-2-4-4-4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="10" cy="7" r="1.5" fill="currentColor"/>
          <circle cx="5" cy="15" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="10" cy="17" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="15" cy="15" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
          <path d="M10 13L10 15.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      left: 'No visibility into visitor intent', 
      right: "Full insights into who's ready to buy",
      oldIcon: (
        <svg className="old-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 10s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M3 3l14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      newIcon: (
        <svg className="new-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="14" height="11" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M6 12V9M9 12V7M12 12V10M15 12V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      left: 'Manual qualification', 
      right: 'Automatic AI qualification',
      oldIcon: (
        <svg className="old-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 11c0-1.5 1-3 2-3s2 1.5 2 3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M10 14v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M6 7l4-3 4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="10" cy="14" r="1" fill="currentColor"/>
        </svg>
      ),
      newIcon: (
        <svg className="new-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="4" width="10" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="10" cy="8" r="1.5" fill="currentColor"/>
          <circle cx="7.5" cy="8" r="0.8" fill="currentColor"/>
          <circle cx="12.5" cy="8" r="0.8" fill="currentColor"/>
          <path d="M7 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 2l1.5 1.5M6 2L4.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="10" cy="14" r="0.8" fill="currentColor"/>
        </svg>
      )
    },
    { 
      left: 'Missed opportunities after hours', 
      right: 'Never sleeps  converts 24/7',
      oldIcon: (
        <svg className="old-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M15 3l2 2M15 17l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      newIcon: (
        <svg className="new-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 3v1M10 16v1M16 10h1M3 10h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
  ];

  return (
    <>
      <div className="header-row">
        <div className="anim" style={{ display: 'inline-flex' }}>
          THE GAP
        </div>
        <h2 className="section-title anim">
          What you have today <span className="vs">vs</span> what we deliver tomorrow.
        </h2>
      </div>

      <div className="gap-comparison anim">
        <div className="gap-column gap-old">
          <h3 className="column-heading">Today</h3>
          <div className="gap-items">
            {gapItems.map((item, idx) => (
              <div key={idx} className="gap-item">
                {item.oldIcon}
                <p className="item-text">{item.left}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="gap-divider"></div>

        <div className="gap-column gap-new">
          <h3 className="column-heading">With Pente</h3>
          <div className="gap-items">
            {gapItems.map((item, idx) => (
              <div key={idx} className="gap-item">
                {item.newIcon}
                <p className="item-text">{item.right}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GapScene;
