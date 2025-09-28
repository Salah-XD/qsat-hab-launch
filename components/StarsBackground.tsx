import React, { useEffect, useRef } from 'react';

const StarsBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Remove existing stars when component re-renders
    const existingStars = container.querySelectorAll('.star');
    existingStars.forEach(star => star.remove());
    
    // Create stars
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random position
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      
      // Random size (1-3px)
      const size = Math.random() * 2 + 1;
      
      // Random delay for twinkling animation
      const delay = Math.random() * 3;
      
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.animationDelay = `${delay}s`;
      
      container.appendChild(star);
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'linear-gradient(to bottom, #0B1026, #060813)' }}
    />
  );
};

export default StarsBackground;