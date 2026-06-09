import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update(mouseX, mouseY) {
        // Mouse interaction - gentle repulsion
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          this.vx += (dx / distance) * force * 0.3;
          this.vy += (dy / distance) * force * 0.3;
        }

        // Apply velocity
        this.x += this.vx;
        this.y += this.vy;

        // Damping
        this.vx *= 0.98;
        this.vy *= 0.98;

        // Boundary bounce
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Keep in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw(ctx, isLightTheme) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        if (isLightTheme) {
          ctx.fillStyle = `rgba(144, 202, 249, ${this.opacity})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.4})`;
        }
        ctx.fill();
      }
    }

    // Initialize particles
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Animation loop
    const animate = () => {
      const isLightTheme = document.documentElement.classList.contains('light-theme');
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const { x: mouseX, y: mouseY } = mouseRef.current;

      // Update and draw particles
      particles.forEach(particle => {
        particle.update(mouseX, mouseY);
        particle.draw(ctx, isLightTheme);
      });

      // Draw connections
      const maxDistance = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            if (isLightTheme) {
              ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
            }
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updateCanvasSize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="animated-background">
      <canvas ref={canvasRef} className="particle-canvas" />
    </div>
  );
};

export default AnimatedBackground;
