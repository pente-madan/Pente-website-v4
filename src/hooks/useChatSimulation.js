import { useState, useEffect, useRef, useCallback } from 'react';

const conversation = [
  {
    type: 'bot',
    text: "Hi 👋 I see you're checking out our pricing — want me to find the right plan for your team size?",
  },
  { type: 'user', text: "Sure, we're a 12-person agency." },
  {
    type: 'bot',
    text: 'Perfect. Are you mostly looking to capture leads, or close them through the site?',
  },
  { type: 'user', text: "Both honestly. We get traffic but it doesn't convert." },
  {
    type: 'bot',
    text: "Got it — exactly what Pente fixes. I'll book a 15-min walkthrough — what's your email?",
  },
  { type: 'user', text: 'alex@studiowest.com' },
  { type: 'bot', text: 'Booked for Thursday 2pm. Calendar invite sent. Talk soon, Alex ✨' },
];

export const useChatSimulation = (currentScene) => {
  const [messages, setMessages] = useState([]);
  const [leadStatus, setLeadStatus] = useState('— intent detected');
  const convoIndexRef = useRef(0);
  const timersRef = useRef([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current = [];
  }, []);

  const addMessage = useCallback((msg) => {
    setMessages((prev) => [...prev, msg]);
  }, []);

  const startConversation = useCallback(() => {
    clearTimers();
    setMessages([]);
    setLeadStatus('— intent detected');
    convoIndexRef.current = 0;

    const scheduleMessage = (index) => {
      if (index >= conversation.length) {
        setLeadStatus('✓ lead captured · qualified · booked');
        return;
      }

      const msg = conversation[index];
      const delay = index === 0 ? 800 : 600;

      const timer = setTimeout(() => {
        addMessage(msg);
        scheduleMessage(index + 1);
      }, delay);

      timersRef.current.push(timer);
    };

    scheduleMessage(0);
  }, [clearTimers, addMessage]);

  useEffect(() => {
    if (currentScene === 0) {
      startConversation();
    }
  }, [currentScene, startConversation]);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  return { messages, leadStatus };
};
