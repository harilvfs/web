import React, { useMemo } from 'react';
import { Container, Sidebar, MainContent, Footer, FooterTerminalPrompt, GlowingOrb, CopyrightSection } from './components/styled';
import ThemeProvider from './components/ThemeProvider';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollTop from './components/ScrollTop';

const App: React.FC = () => {
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
      <>
        {decorativeElements}
        
        <Container>
          <Sidebar>
            <Profile />
          </Sidebar>
          <MainContent className="mainContent">
            <MemoizedAbout />
            <MemoizedExperience />
            <MemoizedSkills />
            <MemoizedProjects />
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
    </ThemeProvider>
  );
};

export default App;
