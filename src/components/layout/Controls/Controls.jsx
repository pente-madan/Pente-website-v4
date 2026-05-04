import React from 'react';
import './Controls.css';

const Controls = ({ current, total, sceneTitle, onSceneClick }) => {
  const pad = (n) => String(n + 1).padStart(2, '0');

  return (
    <div className="controls">
      <div className="scene-label">
        <span className="num">
          {pad(current)} / {pad(total - 1)}
        </span>
        <span className="title">{sceneTitle}</span>
      </div>

      <div className="scene-dots">
        {Array.from({ length: total }).map((_, idx) => (
          <button
            key={idx}
            className={`scene-dot ${idx === current ? 'active' : ''} ${idx < current ? 'played' : ''}`}
            onClick={() => onSceneClick(idx)}
            aria-label={`Scene ${idx + 1}`}
          />
        ))}
      </div>

      <div className="scroll-hint">
        <span>Scroll to navigate</span>
      </div>
    </div>
  );
};

export default Controls;
