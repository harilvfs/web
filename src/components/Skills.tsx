import React, { useState, useEffect } from 'react';
import { FaCogs } from 'react-icons/fa';
import { SiRust } from 'react-icons/si';
import {
  FaLinux,
  FaTerminal,
  FaDesktop,
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaTachometerAlt,
} from 'react-icons/fa';
import {
  Section,
  SectionTitle,
  SectionContent,
  SkillsContainer,
  SkillCard,
  SkillName,
  SkillBar,
  SkillProgress,
} from './styled';
import { skills, skillsDescription } from '../data';

interface SkillsProps {
  visible?: boolean;
}

const iconMap: { [key: string]: React.ReactNode } = {
  FaLinux: <FaLinux size={16} />,
  FaTerminal: <FaTerminal size={16} />,
  SiRust: <SiRust size={16} />,
  FaDesktop: <FaDesktop size={16} />,
  FaServer: <FaServer size={16} />,
  FaNetworkWired: <FaNetworkWired size={16} />,
  FaShieldAlt: <FaShieldAlt size={16} />,
  FaTachometerAlt: <FaTachometerAlt size={16} />,
};

const Skills: React.FC<SkillsProps> = ({ visible = true }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 400);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [visible]);

  return (
    <Section id="skills" visible={visible}>
      <SectionTitle>
        <FaCogs size={20} /> Skills
      </SectionTitle>
      <SectionContent dangerouslySetInnerHTML={{ __html: skillsDescription }} />
      <SkillsContainer>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillName>{iconMap[skill.icon]} {skill.name}</SkillName>
            <SkillBar>
              <SkillProgress progress={skill.progress} visible={animate} />
            </SkillBar>
          </SkillCard>
        ))}
      </SkillsContainer>
    </Section>
  );
};

export default Skills; 