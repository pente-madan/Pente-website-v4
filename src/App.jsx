import React, { useEffect, useRef, useState } from 'react';
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
import './styles/light-theme.css';

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

  // ✅ FIX 1: Track video ready state to prevent flash
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);

  // ✅ FIX 2: Force video play on mount — some browsers need an explicit .play() call
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {
        // Autoplay blocked — still mark as ready so layout doesn't break
        setVideoReady(true);
      });
    };

    // If already has data, play immediately
    if (video.readyState >= 3) {
      setVideoReady(true);
      tryPlay();
    } else {
      video.addEventListener('canplay', () => {
        setVideoReady(true);
        tryPlay();
      }, { once: true });
    }
  }, []);

  return (
    <div className="App">
      <BackgroundBlobs />
      <Navigation />
      <ProgressBar current={current} />

      <div
        className={`stage ${isPaused ? 'paused' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* ✅ FIX 3: Fallback background shown while video loads — prevents flash */}
        <div
          className="video-fallback"
          style={{
            position: 'absolute',
            inset: 0,
            background: '#0a0a0a', // ← match your video's dominant color/first frame
            zIndex: 0,
            opacity: videoReady ? 0 : 1,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none',
          }}
        />

        {/* ✅ FIX 4: ref added, opacity fade-in on ready, no more flash */}
        <video
          ref={videoRef}
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          webkit-playsinline="true"
          style={{
            opacity: videoReady ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        >
          <source
            src="https://res.cloudinary.com/drhyerkn7/video/upload/v1777901248/CleanShot_2025-10-11_at_17.12.46_t4bh4w_wqvvo1_1_tied9v.mp4"
            type="video/mp4"
          />
        </video>

        <div className="video-overlay" />

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