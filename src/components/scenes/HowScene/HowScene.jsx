import React from 'react';
import './HowScene.css';

const HowScene = () => {
  const steps = [
    {
      num: '01',
      title: 'Visitor lands',
      desc: 'Pente AI starts a friendly, contextual conversation tailored to where they came from.',
      delay: '0s',
    },
    {
      num: '02',
      title: 'AI understands & qualifies',
      desc: 'In real time, it identifies need, gauges intent, and surfaces relevant answers no scripts.',
      delay: '0.1s',
    },
    {
      num: '03',
      title: 'Hot leads route instantly',
      desc: 'High-intent prospects get pushed straight to whoever closes the deal.',
      delay: '0.2s',
    },
    {
      num: '04',
      title: 'Data into one dashboard',
      desc: 'Every conversation, lead, and outcome clean, searchable, ready for your CRM.',
      delay: '0.3s',
    },
    {
      num: '05',
      title: 'Follow-ups on autopilot',
      desc: 'Nurturing runs itself. Your team focuses on closing not chasing.',
      delay: '0.4s',
    },
  ];

  return (
    <>
      <div className="header-row">
        <div className="anim" style={{ display: 'inline-flex' }}>
          HOW IT WORKS
        </div>
        <h2 className="section-title anim">
          Five steps. <span className="highlight-blue">One</span> intelligent system.
        </h2>
      </div>

      <div className="timeline-container anim">
        <div className="timeline-line"></div>
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className="timeline-step" 
            style={{ '--delay': step.delay }}
          >
            <div className="step-connector">
              <div className="step-dot">
                <div className="step-dot-inner">{step.num}</div>
                <div className="step-pulse"></div>
              </div>
            </div>
            <div className="step-content">
              <div className="step-header">
                <div className="step-badge">STEP {step.num}</div>
                <h3 className="step-title">{step.title}</h3>
              </div>
              <p className="step-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HowScene;
