import React from 'react';
import Eyebrow from '../../common/Eyebrow';
import './HowScene.css';

const HowScene = () => {
  const steps = [
    {
      num: '01',
      title: 'Visitor lands',
      desc: 'Pente AI starts a friendly, contextual conversation tailored to where they came from.',
    },
    {
      num: '02',
      title: 'AI understands & qualifies',
      desc: 'In real time, it identifies need, gauges intent, and surfaces relevant answers — no scripts.',
    },
    {
      num: '03',
      title: 'Hot leads route instantly',
      desc: 'High-intent prospects get pushed straight to whoever closes the deal.',
    },
    {
      num: '04',
      title: 'Data into one dashboard',
      desc: 'Every conversation, lead, and outcome — clean, searchable, ready for your CRM.',
    },
    {
      num: '05',
      title: 'Follow-ups on autopilot',
      desc: 'Nurturing runs itself. Your team focuses on closing — not chasing.',
    },
  ];

  return (
    <>
      <div className="header-row">
        <div className="anim" style={{ display: 'inline-flex' }}>
          <Eyebrow>HOW IT WORKS</Eyebrow>
        </div>
        <h2 className="section-title anim">
          Five steps. <em>One</em> intelligent system.
        </h2>
      </div>

      <div className="steps anim">
        {steps.map((step, idx) => (
          <div key={idx} className="step">
            <div className="step-num">{step.num}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HowScene;
