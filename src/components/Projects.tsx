import React from 'react';
import { FaFolderOpen, FaLaptopCode, FaBook, FaWindowMaximize } from 'react-icons/fa';
import {
  Section,
  SectionTitle,
  ProjectsContainer,
  ProjectCard,
  ProjectIcon,
  ProjectDetails,
  ProjectTitle,
  ProjectDescription,
  ProjectLink,
} from './styled';
import { projects } from '../data';

interface ProjectsProps {
  visible?: boolean;
}

const iconMap: { [key: string]: React.ReactNode } = {
  FaLaptopCode: <FaLaptopCode size={24} />,
  FaBook: <FaBook size={24} />,
  FaWindowMaximize: <FaWindowMaximize size={24} />,
};

const Projects: React.FC<ProjectsProps> = ({ visible = true }) => {
  return (
    <Section id="projects" visible={visible}>
      <SectionTitle>
        <FaFolderOpen size={20} /> Projects
      </SectionTitle>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectIcon>
              {project.icon.startsWith('/') || project.icon.includes('.') ? (
                <img src={project.icon} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              ) : (
                iconMap[project.icon]
              )}
            </ProjectIcon>
            <ProjectDetails>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription dangerouslySetInnerHTML={{ __html: project.description }} />
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </ProjectLink>
            </ProjectDetails>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </Section>
  );
};

export default Projects; 
