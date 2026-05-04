import React, { useEffect, useRef } from 'react';
import './ResultsScene.css';

const ResultsScene = ({ isActive }) => {
  const countRefs = useRef([]);

  useEffect(() => {
    if (!isActive) return;

    const targets = [3, 70, 10000];
    const duration = 1400;

    countRefs.current.forEach((el, idx) => {
      if (!el) return;

      const target = targets[idx];
      const start = performance.now();

      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(eased * target);
        el.textContent = target >= 1000 ? value.toLocaleString() : String(value);

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = target >= 1000 ? target.toLocaleString() : String(target);
        }
      };

      requestAnimationFrame(tick);
    });
  }, [isActive]);

  return (
    <>
      <div className="header-row">
        <div className="anim" style={{ display: 'inline-flex' }}>
          PROVEN RESULTS
        </div>
        <h2 className="section-title anim">
          The numbers <em>don't</em> need a sales pitch.
        </h2>
      </div>

      <div className="results-grid anim">
        <div className="result">
          <div className="big-num">
            <span ref={(el) => (countRefs.current[0] = el)}>0</span>
            <span className="small">×</span>
          </div>
          <div className="label">More conversions from your existing traffic</div>
        </div>
        <div className="result">
          <div className="big-num">
            <span ref={(el) => (countRefs.current[1] = el)}>0</span>
            <span className="small">%</span>
          </div>
          <div className="label">Reduction in time spent on initial lead handling</div>
        </div>
        <div className="result">
          <div className="big-num">
            <span ref={(el) => (countRefs.current[2] = el)}>0</span>
            <span className="small">+</span>
          </div>
          <div className="label">Visitors handled zero extra headcount</div>
        </div>
      </div>
    </>
  );
};

export default ResultsScene;
