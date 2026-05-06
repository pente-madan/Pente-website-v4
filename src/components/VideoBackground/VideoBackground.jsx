import React, { useRef, useEffect, memo } from 'react';
import { useTheme } from '../../hooks/useTheme';

const VideoBackground = memo(() => {
  const videoRef = useRef(null);
  const { theme } = useTheme();

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

  // Change video source based on theme
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const videoSource = theme === 'light' ? 'https://res.cloudinary.com/drhyerkn7/video/upload/v1778051687/CleanShot_2025-09-24_at_18.06.51_h8y6oa_aodakz.mp4' : '/videos/background-video.mp4';
      video.src = videoSource;
      video.load(); // Reload the video with new source
      
      // Ensure playback continues after source change
      const ensurePlayback = async () => {
        try {
          if (video.paused || video.ended) {
            await video.play();
          }
        } catch (error) {
          // Silently handle autoplay restrictions
        }
      };
      
      ensurePlayback();
    }
  }, [theme]);

  return (
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
      style={{
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        MozTransform: 'translateZ(0)',
        msTransform: 'translateZ(0)',
        OTransform: 'translateZ(0)'
      }}
    >
      <source
        src={theme === 'light' ? 'https://res.cloudinary.com/drhyerkn7/video/upload/v1778051687/CleanShot_2025-09-24_at_18.06.51_h8y6oa_aodakz.mp4' : '/videos/background-video.mp4'}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
});

VideoBackground.displayName = 'VideoBackground';

export default VideoBackground;
