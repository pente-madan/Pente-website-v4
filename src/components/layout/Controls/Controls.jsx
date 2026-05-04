import React from 'react';
import './Controls.css';

const Controls = ({ current, total, sceneTitle, isPaused, onTogglePlay, onSceneClick }) => {
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

      <button className="play-pause" onClick={onTogglePlay} aria-label={isPaused ? 'Play' : 'Pause'}>
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
    </div>
  );
};

export default Controls;
