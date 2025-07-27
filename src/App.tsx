import React, { useMemo } from 'react';
import { Container, Sidebar, MainContent, Footer, FooterTerminalPrompt, CopyrightSection } from './components/styled';
import ThemeProvider from './components/ThemeProvider';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const MemoizedAbout = useMemo(() => React.memo(About), []);
  const MemoizedExperience = useMemo(() => React.memo(Experience), []);
  const MemoizedSkills = useMemo(() => React.memo(Skills), []);
  const MemoizedProjects = useMemo(() => React.memo(Projects), []);

  return (
    <ThemeProvider>
      <>
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
        <ScrollToTopButton />
      </>
    </ThemeProvider>
  );
};

export default App;
