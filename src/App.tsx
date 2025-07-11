import React, { useState, useEffect, useMemo, useRef } from 'react';
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

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [visibleSections, setVisibleSections] = useState({
    about: false,
    experience: false,
    skills: false,
    projects: false,
    contact: false,
  });

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({
    about: null,
    experience: null,
    skills: null,
    projects: null,
    contact: null,
  });

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        rootMargin: '0px 0px -20% 0px',
      }
    );

    const currentRefs = sectionRefs.current;
    Object.keys(currentRefs).forEach((key) => {
      const ref = document.getElementById(key);
      if (ref) {
        currentRefs[key] = ref;
        observer.observe(ref);
      }
    });

    return () => {
      Object.values(currentRefs).forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [loading]);

  const decorativeElements = useMemo(() => (
    <>
      <GlowingOrb position="top-right" color="blue" />
      <GlowingOrb position="bottom-left" color="purple" />
      <GlowingOrb position="center-right" color="teal" />
    </>
  ), []);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const MemoizedAbout = useMemo(() => React.memo(About), []);
  const MemoizedExperience = useMemo(() => React.memo(Experience), []);
  const MemoizedSkills = useMemo(() => React.memo(Skills), []);
  const MemoizedProjects = useMemo(() => React.memo(Projects), []);

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
              <MemoizedAbout visible={visibleSections.about} />
              <MemoizedExperience visible={visibleSections.experience} />
              <MemoizedSkills visible={visibleSections.skills} />
              <MemoizedProjects visible={visibleSections.projects} />
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
