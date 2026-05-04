import React, { useEffect, useRef } from 'react';
import './ChatDemo.css';

const ChatDemo = ({ isHeroMode, messages, leadStatus }) => {
  const streamRef = useRef(null);

  useEffect(() => {
    if (streamRef.current) {
      streamRef.current.scrollTop = streamRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={`chat-demo ${isHeroMode ? 'hero-mode' : ''}`}>
      <div className="chat-header">
        <div className="chat-url">www.your-site.com</div>
        <div className="chat-status">
          <span className="pulse"></span>Pente AI · Live
        </div>
      </div>
      <div className="chat-stream" ref={streamRef}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`msg ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <span>POWERED BY PENTE</span>
        <span className="lead-status">{leadStatus}</span>
      </div>
    </div>
  );
};

export default ChatDemo;
