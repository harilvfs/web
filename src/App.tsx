import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Container, Sidebar, MainContent, Footer, FooterTerminalPrompt, GlowingOrb, CopyrightSection } from './components/styled';
import ThemeProvider from './components/ThemeProvider';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollTop from './components/ScrollTop';
import Loader from './components/Loader';
import ProgressBar from './components/ProgressBar';
import { throttle } from './utils';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [visibleSections, setVisibleSections] = useState({
    about: false,
    experience: false,
    skills: false,
    projects: false,
    contact: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = useCallback(() => {
    if (loading) return;
    
    const about = document.getElementById('about');
    const experience = document.getElementById('experience');
    const skills = document.getElementById('skills');
    const projects = document.getElementById('projects');
    const contact = document.querySelector('.contact-form');

    const isInViewport = (element: Element | null) => {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight * 0.8) &&
        rect.bottom >= 0
      );
    };

    setVisibleSections({
      about: isInViewport(about),
      experience: isInViewport(experience),
      skills: isInViewport(skills),
      projects: isInViewport(projects),
      contact: isInViewport(contact),
    });
  }, [loading]);

  useEffect(() => {
    if (loading) return;
    
    handleScroll();
    
    const throttledScrollHandler = throttle(handleScroll, 100);
    
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [handleScroll, loading]);

  const decorativeElements = useMemo(() => (
    <>
      <GlowingOrb position="top-right" color="blue" />
      <GlowingOrb position="bottom-left" color="purple" />
      <GlowingOrb position="center-right" color="teal" />
    </>
  ), []);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <ThemeProvider>
      <Loader isVisible={loading} />
      
      {!loading && (
        <>
          {decorativeElements}
          <ProgressBar />
          
          <Container>
            <Sidebar>
              <Profile />
            </Sidebar>
            <MainContent className="mainContent">
              <About visible={visibleSections.about} />
              <Experience visible={visibleSections.experience} />
              <Skills visible={visibleSections.skills} />
              <Projects visible={visibleSections.projects} />
              <Contact />
              
              <Footer>
                <CopyrightSection>
                  <p>
                    <img src={`${process.env.PUBLIC_URL}/aayush.png`} alt="Logo" className="footer-logo" />
                    &copy; {currentYear} Hari Chalise. All rights reserved. 
                    <FooterTerminalPrompt>$</FooterTerminalPrompt>
                  </p>
                </CopyrightSection>
              </Footer>
            </MainContent>
          </Container>
          <ScrollTop />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
