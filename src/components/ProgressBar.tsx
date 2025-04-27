import React, { useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';

const ProgressBar: React.FC = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  
  useEffect(() => {
    if (!progressBarRef.current) return;
    
    const progressBar = progressBarRef.current;
    let rafId: number;
    
    const updateProgressBar = () => {
      if (!progressBar) return;
      
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      
      if (scrollHeight) {
        const progress = (scrollY / scrollHeight) * 100;
        progressBar.style.width = `${progress}%`;
      }
      
      rafId = requestAnimationFrame(updateProgressBar);
    };
    
    rafId = requestAnimationFrame(updateProgressBar);
    
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);
  
  return (
    <div 
      ref={progressBarRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: '0%',
        background: `linear-gradient(to right, ${theme.blue}, ${theme.lavender})`,
        zIndex: 1000,
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
        willChange: 'width',
      }}
    />
  );
};

export default ProgressBar; 
