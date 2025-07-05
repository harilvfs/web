import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { ScrollTop as StyledScrollTop } from './styled';

const ScrollTop: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);
  const showScrollRef = useRef(showScroll);

  const checkScrollTop = useCallback(() => {
    if (!showScrollRef.current && window.pageYOffset > 300) {
      setShowScroll(true);
      showScrollRef.current = true;
    } else if (showScrollRef.current && window.pageYOffset <= 300) {
      setShowScroll(false);
      showScrollRef.current = false;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [checkScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledScrollTop show={showScroll} onClick={scrollToTop}>
      <FaArrowUp size={16} />
    </StyledScrollTop>
  );
};

export default ScrollTop; 