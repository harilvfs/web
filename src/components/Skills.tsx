import React from 'react';
import { FaCogs } from 'react-icons/fa';
import { Section, SectionTitle } from './styled';
import Terminal from './Terminal';
import { skills, skillsDescription } from '../data';

interface SkillsProps {
  visible?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ visible = true }) => {
  const skillCommands = skills.map(skill => ({
    command: `eval ${skill.name.toLowerCase().replace(/ /g, '_')}`,
    text: `Skill level: ${skill.progress}%`,
  }));

  return (
    <Section id="skills" visible={visible}>
      <SectionTitle>
        <FaCogs size={20} /> Skills
      </SectionTitle>
      <Terminal title="~/skills" commands={[{ command: 'cat skills.txt', text: skillsDescription }, ...skillCommands]} delay={700} />
    </Section>
  );
};

export default Skills; 