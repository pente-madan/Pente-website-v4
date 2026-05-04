import React, { useEffect, useRef } from 'react';
import Navigation from './components/layout/Navigation';
import ProgressBar from './components/layout/ProgressBar';
import Controls from './components/layout/Controls';
import VideoBackground from './components/VideoBackground/VideoBackground';
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
  const scrollTimeout = useRef(null);
  const isScrolling = useRef(false);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

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

  // Scroll navigation
  useEffect(() => {
    const handleWheel = (e) => {
      // Prevent default scroll behavior
      e.preventDefault();

      // If already scrolling, ignore
      if (isScrolling.current) return;

      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      isScrolling.current = true;

      // Determine scroll direction (support both deltaY and deltaX)
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      
      if (delta > 0) {
        // Scroll down/right - next scene
        if (current < 6) {
          goToScene(current + 1);
        }
      } else if (delta < 0) {
        // Scroll up/left - previous scene
        if (current > 0) {
          goToScene(current - 1);
        }
      }

      // Reset scrolling flag after a delay
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 600);
    };

    // Add wheel event listener with passive: false to allow preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    // Also listen for trackpad gestures
    window.addEventListener('mousewheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mousewheel', handleWheel);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [current, goToScene]);

  // Touch/Swipe navigation for mobile
  useEffect(() => {
    const minSwipeDistance = 50;

    const handleTouchStart = (e) => {
      touchEnd.current = null;
      touchStart.current = e.targetTouches[0].clientY;
    };

    const handleTouchMove = (e) => {
      touchEnd.current = e.targetTouches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (!touchStart.current || !touchEnd.current) return;
      
      if (isScrolling.current) return;

      const distance = touchStart.current - touchEnd.current;
      const isSwipeUp = distance > minSwipeDistance;
      const isSwipeDown = distance < -minSwipeDistance;

      if (isSwipeUp && current < 6) {
        isScrolling.current = true;
        goToScene(current + 1);
        setTimeout(() => {
          isScrolling.current = false;
        }, 600);
      } else if (isSwipeDown && current > 0) {
        isScrolling.current = true;
        goToScene(current - 1);
        setTimeout(() => {
          isScrolling.current = false;
        }, 600);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [current, goToScene]);

  return (
    <div className="App">
      <VideoBackground />
      <BackgroundBlobs />
      <Navigation />
      <ProgressBar current={current} />

      <div
        className={`stage ${isPaused ? 'paused' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src="https://res.cloudinary.com/drhyerkn7/video/upload/v1777901248/CleanShot_2025-10-11_at_17.12.46_t4bh4w_wqvvo1_1_tied9v.mp4" type="video/mp4" />
        </video>
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

        <ChatDemo isHeroMode={current === 0} isHowMode={current === 5} isResultsMode={current === 4} messages={messages} leadStatus={leadStatus} />
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
