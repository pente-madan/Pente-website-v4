import React from 'react';
import Navigation from './components/layout/Navigation';
import ProgressBar from './components/layout/ProgressBar';
import Controls from './components/layout/Controls';
import BackgroundBlobs from './components/BackgroundBlobs/BackgroundBlobs';
import AnimatedBackground from './components/AnimatedBackground';
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
import './styles/light-theme.css';

const SCENE_DURATIONS = [3000, 3000, 3000, 3000, 3000, 3000, 3000];

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
  const { current, isPaused, goToScene, togglePause } = useSceneRotation({
    scenesCount: 7,
    durations: SCENE_DURATIONS,
  });
  const { messages, leadStatus } = useChatSimulation(current);

  return (
    <div className="App">
      <BackgroundBlobs />
      <AnimatedBackground />
      <Navigation />
      <ProgressBar current={current} />

      <div
        className={`stage ${isPaused ? 'paused' : ''}`}
      >
        <Scene isActive={current === 0} className="scene-hero" animationType="hero">
          <HeroScene />
        </Scene>
        <Scene isActive={current === 1} className="scene-stat" animationType="stat">
          <StatScene />
        </Scene>
        <Scene isActive={current === 2} className="scene-gap" animationType="gap">
          <GapScene />
        </Scene>
        <Scene isActive={current === 3} className="scene-solution" animationType="solution">
          <SolutionScene />
        </Scene>
        <Scene isActive={current === 4} className="scene-results" animationType="results">
          <ResultsScene isActive={current === 4} />
        </Scene>
        <Scene isActive={current === 5} className="scene-how" animationType="how">
          <HowScene />
        </Scene>
        <Scene isActive={current === 6} className="scene-cta" animationType="cta">
          <CTAScene />
        </Scene>

        <ChatDemo
          isHeroMode={current === 0}
          isHowMode={current === 5}
          isResultsMode={current === 4}
          messages={messages}
          leadStatus={leadStatus}
        />
      </div>

      <Controls
        current={current}
        total={7}
        sceneTitle={SCENE_TITLES[current]}
        onSceneClick={goToScene}
        onTogglePlay={togglePause}
        isPaused={isPaused}
      />
    </div>
  );
}

export default App;