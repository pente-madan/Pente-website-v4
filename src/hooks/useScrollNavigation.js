import { useState, useEffect, useCallback } from 'react';

export const useScrollNavigation = (scenesCount) => {
  const [current, setCurrent] = useState(0);

  const goToScene = useCallback((index) => {
    if (index >= 0 && index < scenesCount) {
      setCurrent(index);
    }
  }, [scenesCount]);

  const nextScene = useCallback(() => {
    setCurrent((prev) => (prev + 1) % scenesCount);
  }, [scenesCount]);

  const prevScene = useCallback(() => {
    setCurrent((prev) => (prev - 1 + scenesCount) % scenesCount);
  }, [scenesCount]);

  useEffect(() => {
    let scrollTimeout;
    let lastScrollTime = 0;
    const scrollThrottle = 500; // Minimum time between scroll events

    const handleWheel = (e) => {
      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime < scrollThrottle) return;

      lastScrollTime = now;

      // Clear any existing timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Determine scroll direction
      if (e.deltaY > 0) {
        // Scroll down - next scene
        nextScene();
      } else {
        // Scroll up - previous scene
        prevScene();
      }

      // Reset scroll timeout
      scrollTimeout = setTimeout(() => {
        // Allow scrolling again after a brief period
      }, 200);
    };

    // Add wheel event listener
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [nextScene, prevScene]);

  // Keyboard navigation (keeping this for accessibility)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextScene();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevScene();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [nextScene, prevScene]);

  return { current, goToScene, nextScene, prevScene };
};