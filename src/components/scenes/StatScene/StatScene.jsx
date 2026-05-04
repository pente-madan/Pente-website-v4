import React from 'react';
import Eyebrow from '../../common/Eyebrow';
import './StatScene.css';

const StatScene = () => {
  return (
    <>
      <div className="anim" style={{ display: 'inline-flex' }}>
        <Eyebrow>THE QUIET LEAK</Eyebrow>
      </div>
      <div className="number anim">
        17<span className="unit">sec</span>
      </div>
      <p className="caption anim">
        The average time a visitor spends on your website before leaving —{' '}
        <strong>without ever raising a hand.</strong> Most businesses don't have a traffic problem. They have a
        conversion problem.
      </p>
    </>
  );
};

export default StatScene;
