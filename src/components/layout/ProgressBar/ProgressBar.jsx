import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ current, durations, isPaused }) => {
  return (
    <div className="progress-bar">
      {durations.map((dur, idx) => (
        <div
          key={idx}
          className={`progress-segment ${idx < current ? 'played' : ''} ${
            idx === current ? 'active' : ''
          } ${isPaused ? 'paused' : ''}`}
          style={{ '--dur': `${dur}ms` }}
        >
          <div className="fill"></div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
