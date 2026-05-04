import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-background__video"
      >
        <source
          src="https://res.cloudinary.com/drhyerkn7/video/upload/v1777359747/CleanShot_2025-10-11_at_17.12.46_t4bh4w_wqvvo1.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-background__overlay"></div>
    </div>
  );
};

export default VideoBackground;
