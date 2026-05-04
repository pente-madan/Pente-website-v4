import React, { useEffect, useRef } from 'react';
import './Scene.css';

const Scene = ({ children, isActive, className = '' }) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (isActive && sceneRef.current) {
      // Reset animations when scene becomes active
      const animElements = sceneRef.current.querySelectorAll('.anim');
      animElements.forEach((el) => {
        el.style.animation = 'none';
        void el.offsetHeight; // Force reflow
        el.style.animation = '';
      });
    }
  }, [isActive]);

  return (
    <section ref={sceneRef} className={`scene ${className} ${isActive ? 'active' : ''}`}>
      <div className="scene-inner">{children}</div>
    </section>
  );
};

export default Scene;
