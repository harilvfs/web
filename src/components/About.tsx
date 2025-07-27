import React from 'react';
import { FaTerminal } from 'react-icons/fa';
import { Section, SectionTitle, SectionIcon } from './styled';
import Terminal from './Terminal';
import { userData } from '../data';

const About: React.FC = () => {
  return (
    <Section id="about">
      <SectionTitle>
        <SectionIcon>
          <FaTerminal size={20} />
        </SectionIcon>
        About
      </SectionTitle>
      <Terminal title="~/about" commands={userData.about} delay={300} />
    </Section>
  );
};

export default About; 