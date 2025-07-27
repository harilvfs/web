import React from 'react';
import { FaCodeBranch } from 'react-icons/fa';
import { Section, SectionTitle } from './styled';
import Terminal from './Terminal';
import { experiences } from '../data';
import { useTheme } from 'styled-components';

const Experience: React.FC = () => {
  const theme = useTheme();
  const experienceText = experiences
    .map(exp => `<span style="color: ${theme.blue}">~</span> <b>${exp.title}</b> (${exp.date})<br />${exp.description}`)
    .join('<br /><br />');

  const experienceCommands = [{
    command: 'cat experience.txt',
    text: experienceText,
  }];

  return (
    <Section id="experience">
      <SectionTitle>
        <FaCodeBranch size={20} /> Experience
      </SectionTitle>
      <Terminal title="~/experience" commands={experienceCommands} />
    </Section>
  );
};

export default Experience; 