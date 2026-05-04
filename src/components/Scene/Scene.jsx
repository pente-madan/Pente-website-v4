import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Scene.css';

const Scene = ({ children, isActive, className = '', animationType = 'default' }) => {
  const sceneRef = useRef(null);
  const animElementsRef = useRef([]);

  useEffect(() => {
    if (sceneRef.current) {
      const scene = sceneRef.current;
      const animElements = scene.querySelectorAll('.anim');
      animElementsRef.current = Array.from(animElements);

      if (isActive) {
        // Animate scene in
        gsap.to(scene, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
        });

        // Different animations based on type
        switch (animationType) {
          case 'hero':
            // Bold entrance from bottom with slight scale
            gsap.fromTo(
              animElementsRef.current,
              {
                opacity: 0,
                y: 40,
                scale: 0.98,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.15,
                delay: 0.2,
                ease: 'power3.out',
              }
            );
            break;

          case 'stat':
            // Scale up from center for dramatic reveal
            gsap.fromTo(
              animElementsRef.current,
              {
                opacity: 0,
                scale: 0.8,
              },
              {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                delay: 0.3,
                ease: 'back.out(1.4)',
              }
            );
            break;

          case 'gap':
            // Alternate from left and right
            animElementsRef.current.forEach((el, index) => {
              const fromLeft = index % 2 === 0;
              gsap.fromTo(
                el,
                {
                  opacity: 0,
                  x: fromLeft ? -50 : 50,
                },
                {
                  opacity: 1,
                  x: 0,
                  duration: 0.8,
                  delay: 0.2 + index * 0.15,
                  ease: 'power3.out',
                }
              );
            });
            break;

          case 'solution':
            // Fade in from sides with rotation
            gsap.fromTo(
              animElementsRef.current,
              {
                opacity: 0,
                x: -30,
                rotationY: -15,
              },
              {
                opacity: 1,
                x: 0,
                rotationY: 0,
                duration: 0.9,
                stagger: 0.15,
                delay: 0.2,
                ease: 'power2.out',
              }
            );
            break;

          case 'results':
            // Scale pulse effect for numbers
            gsap.fromTo(
              animElementsRef.current,
              {
                opacity: 0,
                scale: 0.5,
              },
              {
                opacity: 1,
                scale: 1,
                duration: 0.9,
                stagger: 0.18,
                delay: 0.2,
                ease: 'elastic.out(1, 0.6)',
              }
            );
            break;

          case 'how':
            // Cascade from top
            gsap.fromTo(
              animElementsRef.current,
              {
                opacity: 0,
                y: -40,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                delay: 0.2,
                ease: 'power2.out',
              }
            );
            break;

          case 'cta':
            // Zoom in with bounce
            gsap.fromTo(
              animElementsRef.current,
              {
                opacity: 0,
                scale: 0.7,
              },
              {
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.15,
                delay: 0.2,
                ease: 'back.out(1.7)',
              }
            );
            break;

          default:
            // Default stagger animation
            gsap.fromTo(
              animElementsRef.current,
              {
                opacity: 0,
                y: 30,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                delay: 0.2,
                ease: 'power3.out',
              }
            );
        }
      } else {
        // Animate scene out
        gsap.to(scene, {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in',
        });
      }
    }
  }, [isActive, animationType]);

  return (
    <section ref={sceneRef} className={`scene ${className} ${isActive ? 'active' : ''}`}>
      <div className="scene-inner">{children}</div>
    </section>
  );
};

export default Scene;
