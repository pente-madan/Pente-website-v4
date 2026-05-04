import React from 'react';
import Button from '../../common/Button';
import './CTAScene.css';

const CTAScene = () => {
  return (
    <>
      <div className="header-row">
        <div className="anim" style={{ display: 'inline-flex' }}>
          THE DECISION
        </div>
        <h2 className="section-title anim">
          A beautiful brochure or a <em>revenue-generating system</em>
          <br />
          that works as hard as you do?
        </h2>
      </div>
      <p className="sub anim">
        The businesses that win the next five years will be the ones whose websites sell for them. See yours,
        live, in 15 minutes.
      </p>
      <div className="anim">
        <Button variant="mega" href="#">
          Book your personalized demo
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d="M1 7h17m0 0L13 1m5 6l-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Button>
      </div>
      <div className="cta-fineprint anim">15 MINUTES · ZERO OBLIGATION · BUILT FOR YOUR BUSINESS</div>
    </>
  );
};

export default CTAScene;
