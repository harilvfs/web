import React, { useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';

const ProgressBar: React.FC = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  
  useEffect(() => {
    const updateProgressBar = () => {
      if (!progressBarRef.current) return;
      
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      
      if (scrollHeight > 0) {
        const progress = (scrollY / scrollHeight) * 100;
        progressBarRef.current.style.width = `${progress}%`;
      } else {
        progressBarRef.current.style.width = '0%';
      }
    };

    window.addEventListener('scroll', updateProgressBar, { passive: true });
    
    updateProgressBar();
    
    return () => {
      window.removeEventListener('scroll', updateProgressBar);
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
        transition: 'width 0.05s linear',
      }}
    />
  );
};

export default ProgressBar; 
