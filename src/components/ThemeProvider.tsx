import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeToggle, ThemeToggleIcon, GlobalStyle } from './styled';
import { ThemeContext, ThemeUpdateContext, darkTheme, lightTheme } from '../theme';
import CursorFollower from './CursorFollower';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setTheme(lightTheme);
      setIsDarkTheme(false);
    }
  }, []);

  const themeContextValue = useMemo(() => theme, [theme]);
  
  const toggleTheme = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setIsDarkTheme(prevIsDark => {
      const newIsDark = !prevIsDark;
      setTheme(newIsDark ? darkTheme : lightTheme);
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
      return newIsDark;
    });
    
    requestAnimationFrame(() => {
      setIsAnimating(false);
    });
  }, [isAnimating]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ThemeUpdateContext.Provider value={setTheme}>
        <StyledThemeProvider theme={theme}>
          <GlobalStyle theme={theme} />
          {children}
          <ThemeToggle 
            onClick={toggleTheme} 
            aria-label="Toggle theme" 
            isDark={isDarkTheme}
            className={`theme-toggle-btn ${isAnimating ? 'animating' : ''}`}
            disabled={isAnimating}
          >
            <ThemeToggleIcon>
              {isDarkTheme ? <FaMoon size={18} /> : <FaSun size={18} />}
            </ThemeToggleIcon>
          </ThemeToggle>
          <CursorFollower />
        </StyledThemeProvider>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default React.memo(ThemeProvider); 
