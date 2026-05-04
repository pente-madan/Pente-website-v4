import React from 'react';
import './StatScene.css';

const StatScene = () => {
  return (
    <>
      <div className="anim" style={{ display: 'inline-flex' }}>
        THE PROBLEM
      </div>
      <div className="number anim">
        17<span className="unit">sec</span>
      </div>
      <p className="caption anim">
        The average time a visitor spends on your website before leaving without ever raising a hand. Most businesses don't have a traffic problem. They have a
        conversion problem.
      </p>
    </>
  );
};

export default StatScene;
