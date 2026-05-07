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

      // Kill any ongoing animations to prevent overlap
      gsap.killTweensOf(scene);
      gsap.killTweensOf(animElementsRef.current);

      if (isActive) {
        // Different scene container transitions based on type
        switch (animationType) {
          case 'hero':
            // Slide from bottom
            gsap.fromTo(scene, 
              { opacity: 0, y: '100vh' },
              { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
            );
            break;
          
          case 'stat':
            // Scale zoom in
            gsap.fromTo(scene,
              { opacity: 0, scale: 0.7, y: 0 },
              { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.2)' }
            );
            break;
          
          case 'gap':
            // Slide from right
            gsap.fromTo(scene,
              { opacity: 0, x: '100vw', y: 0 },
              { opacity: 1, x: 0, y: 0, duration: 0.9, ease: 'power3.inOut' }
            );
            break;
          
          case 'solution':
            // Slide from left with rotation
            gsap.fromTo(scene,
              { opacity: 0, x: '-100vw', rotationY: -20, y: 0 },
              { opacity: 1, x: 0, rotationY: 0, y: 0, duration: 0.9, ease: 'power2.out' }
            );
            break;
          
          case 'results':
            // Zoom in with bounce
            gsap.fromTo(scene,
              { opacity: 0, scale: 0.5, y: 0 },
              { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'elastic.out(1, 0.6)' }
            );
            break;
          
          case 'how':
            // Slide from top
            gsap.fromTo(scene,
              { opacity: 0, y: '-100vh' },
              { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
            );
            break;
          
          case 'cta':
            // Dramatic scale with spring
            gsap.fromTo(scene,
              { opacity: 0, scale: 0.3, y: 0 },
              { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: 'back.out(2)' }
            );
            break;
          
          default:
            // Default: vertical slide
            gsap.fromTo(scene,
              { opacity: 0, y: '100vh' },
              { opacity: 1, y: 0, duration: 0.8, ease: 'power3.inOut' }
            );
        }

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
        // Different scene exit animations based on type
        switch (animationType) {
          case 'hero':
            // Slide up and fade
            gsap.to(scene, {
              opacity: 0,
              y: '-50vh',
              duration: 0.4,
              ease: 'power3.in',
            });
            break;
          
          case 'stat':
            // Scale down
            gsap.to(scene, {
              opacity: 0,
              scale: 0.8,
              duration: 0.3,
              ease: 'power2.in',
            });
            break;
          
          case 'gap':
            // Slide left
            gsap.to(scene, {
              opacity: 0,
              x: '-100vw',
              duration: 0.4,
              ease: 'power3.in',
            });
            break;
          
          case 'solution':
            // Slide right with rotation
            gsap.to(scene, {
              opacity: 0,
              x: '100vw',
              rotationY: 20,
              duration: 0.4,
              ease: 'power2.in',
            });
            break;
          
          case 'results':
            // Zoom out
            gsap.to(scene, {
              opacity: 0,
              scale: 0.6,
              duration: 0.3,
              ease: 'power2.in',
            });
            break;
          
          case 'how':
            // Slide down
            gsap.to(scene, {
              opacity: 0,
              y: '100vh',
              duration: 0.4,
              ease: 'power3.in',
            });
            break;
          
          case 'cta':
            // Scale down dramatically
            gsap.to(scene, {
              opacity: 0,
              scale: 0.4,
              duration: 0.4,
              ease: 'back.in(1.5)',
            });
            break;
          
          default:
            // Default: slide up
            gsap.to(scene, {
              opacity: 0,
              y: '-100vh',
              duration: 0.4,
              ease: 'power3.inOut',
            });
        }
      }
    }

    // Cleanup function to kill animations when component unmounts or before new animations start
    return () => {
      if (sceneRef.current) {
        gsap.killTweensOf(sceneRef.current);
        gsap.killTweensOf(animElementsRef.current);
      }
    };
  }, [isActive, animationType]);

  return (
    <section ref={sceneRef} className={`scene ${className} ${isActive ? 'active' : ''}`}>
      <div className="scene-inner">{children}</div>
    </section>
  );
};

export default Scene;
