import React, { useRef, useEffect, memo } from 'react';
import './VideoBackground.css';

const VideoBackground = memo(() => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video plays continuously without interruption
      const ensurePlayback = async () => {
        try {
          if (video.paused || video.ended) {
            await video.play();
          }
        } catch (error) {
          // Silently handle autoplay restrictions
        }
      };

      // Play immediately and set up continuous monitoring
      ensurePlayback();

      // Monitor for any interruptions and resume playback
      const handleVisibilityChange = () => {
        if (!document.hidden) {
          ensurePlayback();
        }
      };

      const handleFocus = () => {
        ensurePlayback();
      };

      // Add event listeners to maintain continuous playback
      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('focus', handleFocus);

      // Set up a periodic check to ensure video stays playing
      const playbackInterval = setInterval(() => {
        if (video && (video.paused || video.ended) && !document.hidden) {
          ensurePlayback();
        }
      }, 1000);

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('focus', handleFocus);
        clearInterval(playbackInterval);
      };
    }
  }, []);

  return (
    <div className="video-background">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="video-background__video"
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
          // Ensure GPU acceleration
          WebkitTransform: 'translateZ(0)',
          MozTransform: 'translateZ(0)',
          msTransform: 'translateZ(0)',
          OTransform: 'translateZ(0)'
        }}
      >
        <source
          src="/videos/background-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="video-background__overlay"></div>
    </div>
  );
});

VideoBackground.displayName = 'VideoBackground';

export default VideoBackground;
