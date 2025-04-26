import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { ScrollTop as StyledScrollTop } from './styled';

const ScrollTop: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

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