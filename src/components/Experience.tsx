import React from 'react';
import { FaCodeBranch } from 'react-icons/fa';
import {
  Section,
  SectionTitle,
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDate,
  TerminalCmd,
} from './styled';
import { experiences } from '../data';

interface ExperienceProps {
  visible?: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ visible = true }) => {
  return (
    <Section id="experience" visible={visible}>
      <SectionTitle>
        <FaCodeBranch size={20} /> Experience
      </SectionTitle>
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineTitle>{exp.title}</TimelineTitle>
            <TerminalCmd>{exp.command}</TerminalCmd>
            <TimelineDate>{exp.date}</TimelineDate>
            <p dangerouslySetInnerHTML={{ __html: exp.description }}></p>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};

export default Experience; 