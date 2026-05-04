import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ current }) => {
  const totalScenes = 7;

  return (
    <div className="progress-bar">
      {Array.from({ length: totalScenes }).map((_, idx) => (
        <div
          key={idx}
          className={`progress-segment ${idx < current ? 'played' : ''} ${
            idx === current ? 'active' : ''
          }`}
        >
          <div className="fill"></div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
