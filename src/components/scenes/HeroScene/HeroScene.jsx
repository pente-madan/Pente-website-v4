import React from 'react';
import Button from '../../common/Button';
import './HeroScene.css';

const HeroScene = () => {
  return (
    <div className="grid">
      <div>
        <div className="header-row">
          <div className="anim" style={{ display: 'inline-flex' }}>
            THE PITCH
          </div>
          <h1 className="section-title anim">
            A website is no longer <span className="strike">a page.</span><br />
            It is a <span className="italic">conversation that</span><br />
             closes deals.
          </h1>
        </div>
        <p className="sub anim">
          Your 24/7 AI sales agent. Engages every visitor, qualifies them in real time, and turns existing
          traffic into pipeline.
        </p>
        <div className="anim">
          <Button href="#">
            Book your 15-min demo
            <svg width="16" height="11" viewBox="0 0 18 12" fill="none">
              <path
                d="M1 6h15m0 0L11 1m5 5l-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroScene;
