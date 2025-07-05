import React, { useEffect, useState, useRef } from 'react';
import { CursorFollower as StyledCursorFollower } from './styled';

const CursorFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [followerVisible, setFollowerVisible] = useState(false);
  const [isOverThemeToggle, setIsOverThemeToggle] = useState(false);
  
  const mousePosition = useRef({ x: 0, y: 0 });
  const followerPosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFollowerVisible(true);
    }, 500);

    const animate = () => {
      if (followerRef.current) {
        const dx = mousePosition.current.x - followerPosition.current.x;
        const dy = mousePosition.current.y - followerPosition.current.y;
        
        followerPosition.current.x += dx * 0.1;
        followerPosition.current.y += dy * 0.1;
        
        followerRef.current.style.transform = `translate3d(${followerPosition.current.x}px, ${followerPosition.current.y}px, 0)`;
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isThemeBtn = target.closest('.theme-toggle-btn');
      setIsOverThemeToggle(!!isThemeBtn);
      
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') || 
          target.closest('a') ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA') {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setFollowerVisible(false);
    };

    const handleMouseEnter = () => {
      setFollowerVisible(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      clearTimeout(timer);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <StyledCursorFollower 
      ref={followerRef}
      className={`${isActive ? 'active' : ''} ${isClicking ? 'clicking' : ''} ${isOverThemeToggle ? 'theme-toggle-hover' : ''}`}
      style={{ 
        opacity: followerVisible ? 1 : 0,
        left: 0, 
        top: 0,
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
};

export default React.memo(CursorFollower); 
