import React from 'react';
import { FaCogs } from 'react-icons/fa';
import { Section, SectionTitle } from './styled';
import Terminal from './Terminal';
import { skills, skillsDescription } from '../data';

const Skills: React.FC = () => {
  const skillCommands = skills.map(skill => ({
    command: `eval ${skill.name.toLowerCase().replace(/ /g, '_')}`,
    text: `Skill level: ${skill.progress}%`,
  }));

  return (
    <Section id="skills">
      <SectionTitle>
        <FaCogs size={20} /> Skills
      </SectionTitle>
      <Terminal title="~/skills" commands={[{ command: 'cat skills.txt', text: skillsDescription }, ...skillCommands]} delay={700} />
    </Section>
  );
};

export default Skills; 