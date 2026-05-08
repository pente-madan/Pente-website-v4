import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './ChatDemo.css';

const ChatDemo = ({ isHeroMode, isHowMode, isResultsMode, messages, leadStatus }) => {
  const streamRef = useRef(null);
  const chatRef = useRef(null);
  const prevMessagesLength = useRef(0);

  useEffect(() => {
    if (streamRef.current) {
      streamRef.current.scrollTop = streamRef.current.scrollHeight;
    }

    // Animate new messages
    if (messages.length > prevMessagesLength.current) {
      const newMessages = Array.from(streamRef.current?.children || []).slice(
        prevMessagesLength.current
      );
      
      gsap.fromTo(
        newMessages,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    }
    
    prevMessagesLength.current = messages.length;
  }, [messages]);

  const chatClasses = `chat-demo ${isHeroMode ? 'hero-mode' : ''} ${isHowMode ? 'how-mode' : ''} ${isResultsMode ? 'results-mode' : ''}`;

  return (
    <div ref={chatRef} className={chatClasses}>
      <div className="chat-header">
        <div className="chat-url">www.pente.ai</div>
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
