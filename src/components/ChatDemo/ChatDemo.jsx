import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './ChatDemo.css';

const ChatDemo = ({ isHeroMode, isHowMode, isResultsMode, messages: initialMessages, leadStatus }) => {
  const streamRef = useRef(null);
  const chatRef = useRef(null);
  const prevMessagesLength = useRef(0);
  const [messages, setMessages] = useState(initialMessages || []);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Only for non-hero scenes expansion

  // Predefined AI responses for different scenarios
  const aiResponses = {
    greeting: [
      "Hello! I'm Pente AI, your intelligent assistant. How can I help you today?",
      "Hi there! Welcome to Pente AI. What would you like to know?",
      "Greetings! I'm here to assist you with any questions about Pente AI."
    ],
    features: [
      "Pente AI offers advanced natural language processing, real-time analytics, and seamless integration capabilities.",
      "Our AI can help with data analysis, automated workflows, and intelligent decision-making.",
      "Pente AI provides cutting-edge machine learning models, API integrations, and customizable solutions."
    ],
    pricing: [
      "We offer flexible pricing plans starting from $29/month for basic features, with enterprise options available.",
      "Our pricing is designed to scale with your needs. Contact our sales team for a custom quote.",
      "Check out our pricing page for detailed plans and current promotions."
    ],
    support: [
      "I'm here to help! You can reach our support team at support@pente.ai or through our help center.",
      "Our support team is available 24/7. Feel free to ask me anything or contact support directly.",
      "For technical issues, please visit our documentation or reach out to our support team."
    ],
    default: [
      "That's an interesting question! Let me think about that for you.",
      "I'd be happy to help with that. Could you provide more details?",
      "Great question! Here's what I can tell you about that topic.",
      "I'm processing your request. This is a complex topic that requires careful consideration.",
      "Thanks for asking! This is something I can definitely help you with."
    ]
  };

  // Function to get AI response based on user input
  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return aiResponses.greeting[Math.floor(Math.random() * aiResponses.greeting.length)];
    }
    if (message.includes('feature') || message.includes('what can you do') || message.includes('capabilities')) {
      return aiResponses.features[Math.floor(Math.random() * aiResponses.features.length)];
    }
    if (message.includes('price') || message.includes('cost') || message.includes('pricing') || message.includes('plan')) {
      return aiResponses.pricing[Math.floor(Math.random() * aiResponses.pricing.length)];
    }
    if (message.includes('help') || message.includes('support') || message.includes('contact')) {
      return aiResponses.support[Math.floor(Math.random() * aiResponses.support.length)];
    }
    
    return aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)];
  };

  // Function to simulate AI response with typing indicator
  const simulateAIResponse = (userMessage) => {
    setIsTyping(true);
    
    // Simulate typing delay (1-3 seconds)
    const typingDelay = Math.random() * 2000 + 1000;
    
    setTimeout(() => {
      setIsTyping(false);
      const aiResponse = getAIResponse(userMessage);
      setMessages(prevMessages => [...prevMessages, { type: 'bot', text: aiResponse }]);
    }, typingDelay);
  };

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

  useEffect(() => {
    setMessages(initialMessages || []);
  }, [initialMessages]);

  useEffect(() => {
    // Reset expanded state when scene changes (only for non-hero scenes)
    if (!isHeroMode) {
      setIsExpanded(false);
    }
  }, [isHeroMode, isHowMode, isResultsMode]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const userMessage = inputValue.trim();
      setMessages([...messages, { type: 'user', text: userMessage }]);
      setInputValue('');
      
      // Trigger AI response
      simulateAIResponse(userMessage);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(e);
    }
  };

  const handleMinimize = () => {
    if (!isHeroMode) {
      setIsExpanded(false); // Only works in non-hero scenes
    }
  };

  const handleExpand = () => {
    if (!isHeroMode) {
      setIsExpanded(true); // Only works in non-hero scenes
    }
  };

  const chatClasses = `chat-demo ${isHeroMode ? 'hero-mode' : ''} ${isHowMode ? 'how-mode' : ''} ${isResultsMode ? 'results-mode' : ''} ${!isHeroMode && isExpanded ? 'expanded' : ''}`;

  return (
    <div ref={chatRef} className={chatClasses}>
      <div className="chat-header">
        <div className="chat-url">
          <span className="status-dot"></span>
          www.pente.ai
        </div>
        <div className="chat-controls">
          <button className="control-btn minimize" aria-label="Minimize" onClick={handleMinimize}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 7H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="control-btn expand" aria-label="Expand" onClick={handleExpand}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2H12V5M5 12H2V9M12 2L8 6M2 12L6 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="chat-stream" ref={streamRef}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`msg ${msg.type}`}>
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div className="msg bot typing-indicator">
            <div className="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
      <div className="chat-footer">
        <div className="chat-input-wrapper">
          <input 
            type="text" 
            className="chat-input" 
            placeholder="Type a message..."
            aria-label="Chat input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            className="send-btn" 
            onClick={handleSendMessage}
            aria-label="Send message"
            disabled={!inputValue.trim()}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 1.5L8.25 9.75M16.5 1.5L11.25 16.5L8.25 9.75M16.5 1.5L1.5 6.75L8.25 9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatDemo;
