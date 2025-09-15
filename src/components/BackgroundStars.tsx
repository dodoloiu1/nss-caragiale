import React, { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const BackgroundStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const DPR = clamp(window.devicePixelRatio || 1, 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      // Recreate stars proportionally to area
      const density = 0.00035; // stars per pixel
      const targetCount = Math.floor(width * height * density);
      if (starsRef.current.length === 0) {
        starsRef.current = Array.from({ length: targetCount }, () => createStar(width, height));
      } else if (starsRef.current.length < targetCount) {
        const toAdd = targetCount - starsRef.current.length;
        starsRef.current.push(...Array.from({ length: toAdd }, () => createStar(width, height)));
      } else if (starsRef.current.length > targetCount) {
        starsRef.current.length = targetCount;
      }
    };

    const createStar = (w: number, h: number): Star => {
      // Small sizes with slight variance
      const size = Math.random() * 1.2 + 0.3;
      // Initial velocities small
      const vx = (Math.random() - 0.5) * 0.06;
      const vy = (Math.random() - 0.5) * 0.06;
      return { x: Math.random() * w, y: Math.random() * h, vx, vy, size };
    };

    const step = (now: number) => {
      const dt = Math.min(33, now - (lastTimeRef.current || now));
      lastTimeRef.current = now;

      // Clear with slight alpha for soft trails
      ctx.clearRect(0, 0, width, height);

      // Gentle drift field (Brownian-like via random acceleration)
      for (let i = 0; i < starsRef.current.length; i++) {
        const s = starsRef.current[i];

        // Random small acceleration
        s.vx += (Math.random() - 0.5) * 0.004;
        s.vy += (Math.random() - 0.5) * 0.004;

        // Dampen velocity to avoid runaway
        s.vx *= 0.995;
        s.vy *= 0.995;

        // Clamp max speed
        const maxSpeed = 0.25;
        s.vx = clamp(s.vx, -maxSpeed, maxSpeed);
        s.vy = clamp(s.vy, -maxSpeed, maxSpeed);

        s.x += s.vx * dt;
        s.y += s.vy * dt;

        // Wrap around edges
        if (s.x < -5) s.x = width + 5;
        if (s.x > width + 5) s.x = -5;
        if (s.y < -5) s.y = height + 5;
        if (s.y > height + 5) s.y = -5;

        // Render
        const alpha = 0.8 + Math.sin((s.x + s.y) * 0.01) * 0.2;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(step);
    };

    resize();
    animationRef.current = requestAnimationFrame(step);
    window.addEventListener('resize', resize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
};

export default BackgroundStars;



