import React from 'react';
import './SolutionScene.css';

const SolutionScene = () => {
  const features = [
    {
      num: '01 · CONVERSE',
      title: (
        <>
          Natural, plain-language <em>conversations</em>
        </>
      ),
      desc: 'No menus. No clunky scripts. Visitors talk to your site like they would to a person on your team — and get answers that actually help.',
    },
    {
      num: '02 · QUALIFY',
      title: (
        <>
          Instant answers and <em>smart qualification</em>
        </>
      ),
      desc: 'Pente identifies intent in seconds, asks the right follow-up questions, and separates serious buyers from window-shoppers automatically.',
    },
    {
      num: '03 · CAPTURE',
      title: (
        <>
          Lead capture that <em>actually captures</em>
        </>
      ),
      desc: 'Every meaningful interaction becomes a lead. Names, needs, timelines, budgets — collected naturally, nurtured automatically.',
    },
    {
      num: '04 · CLOSE',
      title: (
        <>
          Seamless booking and <em>purchase paths</em>
        </>
      ),
      desc: 'Hot leads get on your calendar in real time. Quiet leads get nurtured. Nothing slips through the cracks.',
    },
  ];

  return (
    <>
      <div className="header-row">
        <div className="anim" style={{ display: 'inline-flex' }}>
          THE SOLUTION
        </div>
        <h2 className="section-title anim">
          Your hardest-working <em>salesperson</em> never off the clock.
        </h2>
      </div>

      <div className="features-grid anim">
        {features.map((feature, idx) => (
          <div key={idx} className="feature">
            <div className="num">{feature.num}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SolutionScene;
