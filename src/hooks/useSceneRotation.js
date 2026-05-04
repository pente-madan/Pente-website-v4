import { useState, useEffect, useRef, useCallback } from 'react';

export const useSceneRotation = ({ scenesCount, durations }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef(null);
  const sceneStartRef = useRef(performance.now());
  const pauseStartRef = useRef(null);
  const pauseElapsedRef = useRef(0);

  const scheduleNext = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (isPaused || isHovering) return;

    const duration = durations[current];
    const remaining = Math.max(500, duration - pauseElapsedRef.current);

    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % scenesCount);
      sceneStartRef.current = performance.now();
      pauseElapsedRef.current = 0;
    }, remaining);
  }, [current, durations, scenesCount, isPaused, isHovering]);

  useEffect(() => {
    scheduleNext();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [scheduleNext]);

  const goToScene = useCallback((index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrent(index);
    sceneStartRef.current = performance.now();
    pauseElapsedRef.current = 0;
  }, []);

  const togglePause = useCallback(() => {
    setIsPaused((prev) => {
      if (!prev) {
        pauseStartRef.current = performance.now();
      } else {
        if (pauseStartRef.current) {
          pauseElapsedRef.current += performance.now() - pauseStartRef.current;
          pauseStartRef.current = null;
        }
      }
      return !prev;
    });
  }, []);

  const setHover = useCallback((hovering: boolean) => {
    setIsHovering(hovering);
    if (hovering) {
      pauseStartRef.current = performance.now();
    } else {
      if (pauseStartRef.current && !isPaused) {
        pauseElapsedRef.current += performance.now() - pauseStartRef.current;
        pauseStartRef.current = null;
      }
    }
  }, [isPaused]);

  return { current, isPaused, goToScene, togglePause, setHover };
};
