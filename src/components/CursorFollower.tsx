import React, { useEffect, useState, useRef } from 'react';
import { CursorFollower as StyledCursorFollower } from './styled';
import gsap from 'gsap';

const CursorFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverThemeToggle, setIsOverThemeToggle] = useState(false);
  
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const animateCursor = () => {
      if (followerRef.current) {
        gsap.to(followerRef.current, {
          duration: 0.4,
          x: mousePosition.current.x,
          y: mousePosition.current.y,
          ease: "power2.out",
          overwrite: "auto"
        });
      }
      
      requestAnimationFrame(animateCursor);
    };
    
    const animationFrame = requestAnimationFrame(animateCursor);

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
      
      if (followerRef.current) {
        gsap.to(followerRef.current, {
          duration: 0.1,
          scale: 0.7,
          ease: "power2.out"
        });
      }
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      
      if (followerRef.current) {
        gsap.to(followerRef.current, {
          duration: 0.3,
          scale: 1,
          ease: "elastic.out(1, 0.3)"
        });
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrame);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  useEffect(() => {
    if (followerRef.current) {
      if (isOverThemeToggle) {
        gsap.to(followerRef.current, {
          duration: 0.3,
          width: 50,
          height: 50,
          borderRadius: '50%',
          background: `radial-gradient(circle at center, 
            rgba(245, 224, 130, 0.2) 0%, 
            rgba(137, 180, 250, 0.2) 50%,
            transparent 70%)`,
          border: '1px solid rgba(137, 180, 250, 0.4)',
          opacity: 0.8,
          ease: "power2.out"
        });
      } else if (isActive) {
        gsap.to(followerRef.current, {
          duration: 0.3,
          width: 45,
          height: 45,
          opacity: 0.8,
          ease: "power2.out"
        });
      } else if (!isClicking) {
        gsap.to(followerRef.current, {
          duration: 0.3,
          width: 30,
          height: 30,
          opacity: 0.6,
          ease: "power2.out"
        });
      }
      
      gsap.to(followerRef.current, {
        duration: 0.3,
        autoAlpha: isVisible ? 0.6 : 0,
        ease: "power2.out"
      });
    }
  }, [isActive, isClicking, isVisible, isOverThemeToggle]);

  return (
    <StyledCursorFollower 
      ref={followerRef}
      className={`${isActive ? 'active' : ''} ${isClicking ? 'clicking' : ''} ${isOverThemeToggle ? 'theme-toggle-hover' : ''}`}
      style={{ 
        left: 0, 
        top: 0,
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
};

export default React.memo(CursorFollower); 
