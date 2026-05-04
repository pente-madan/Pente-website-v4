import React, { useEffect } from 'react';
import Navigation from './components/layout/Navigation';
import ProgressBar from './components/layout/ProgressBar';
import Controls from './components/layout/Controls';
import BackgroundBlobs from './components/BackgroundBlobs/BackgroundBlobs';
import ChatDemo from './components/ChatDemo/ChatDemo';
import Scene from './components/Scene/Scene';
import HeroScene from './components/scenes/HeroScene/HeroScene';
import StatScene from './components/scenes/StatScene/StatScene';
import GapScene from './components/scenes/GapScene/GapScene';
import SolutionScene from './components/scenes/SolutionScene/SolutionScene';
import ResultsScene from './components/scenes/ResultsScene/ResultsScene';
import HowScene from './components/scenes/HowScene/HowScene';
import CTAScene from './components/scenes/CTAScene/CTAScene';
import { useSceneRotation } from './hooks/useSceneRotation';
import { useChatSimulation } from './hooks/useChatSimulation';
import './App.css';

const SCENE_DURATIONS = [11000, 6500, 9000, 9000, 7500, 9000, 8000];

const SCENE_TITLES = [
  'The Pitch',
  'The Quiet Leak',
  'The Gap',
  'The Solution',
  'Proven Results',
  'How It Works',
  'The Decision',
];

function App() {
  const { current, isPaused, goToScene, togglePause, setHover } = useSceneRotation({
    scenesCount: 7,
    durations: SCENE_DURATIONS,
  });

  const { messages, leadStatus } = useChatSimulation(current);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goToScene((current + 1) % 7);
      } else if (e.key === 'ArrowLeft') {
        goToScene((current - 1 + 7) % 7);
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePause();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [current, goToScene, togglePause]);

  return (
    <div className="App">
      <BackgroundBlobs />
      <Navigation />
      <ProgressBar current={current} durations={SCENE_DURATIONS} isPaused={isPaused} />

      <div
        className={`stage ${isPaused ? 'paused' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Scene isActive={current === 0} className="scene-hero">
          <HeroScene />
        </Scene>

        <Scene isActive={current === 1} className="scene-stat">
          <StatScene />
        </Scene>

        <Scene isActive={current === 2} className="scene-gap">
          <GapScene />
        </Scene>

        <Scene isActive={current === 3} className="scene-solution">
          <SolutionScene />
        </Scene>

        <Scene isActive={current === 4} className="scene-results">
          <ResultsScene isActive={current === 4} />
        </Scene>

        <Scene isActive={current === 5} className="scene-how">
          <HowScene />
        </Scene>

        <Scene isActive={current === 6} className="scene-cta">
          <CTAScene />
        </Scene>

        <ChatDemo isHeroMode={current === 0} messages={messages} leadStatus={leadStatus} />
      </div>

      <Controls
        current={current}
        total={7}
        sceneTitle={SCENE_TITLES[current]}
        isPaused={isPaused}
        onTogglePlay={togglePause}
        onSceneClick={goToScene}
      />
    </div>
  );
}

export default App;
