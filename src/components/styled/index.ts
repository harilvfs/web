import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { ThemeType } from '../../theme';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: ${props => props.theme.blue} }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.5);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(56, 189, 248, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(56, 189, 248, 0);
  }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const float = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -10px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  /* Import high-quality developer-friendly fonts */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'Fira Code', 'JetBrains Mono', sans-serif;
    background-color: ${({ theme }) => theme.base};
    color: ${({ theme }) => theme.subtext0};
    line-height: 1.6;
    font-size: 0.95rem;
    overflow-x: hidden;
    transition: background-color 0.2s ease, color 0.2s ease;
    background-image: 
      radial-gradient(at 40% 20%, hsla(217, 100%, 64%, 0.07) 0px, transparent 50%),
      radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 0.07) 0px, transparent 50%),
      radial-gradient(at 0% 50%, hsla(355, 85%, 63%, 0.07) 0px, transparent 50%),
      radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 0.07) 0px, transparent 50%),
      radial-gradient(at 0% 100%, hsla(269, 100%, 77%, 0.07) 0px, transparent 50%),
      radial-gradient(at 80% 100%, hsla(130, 100%, 70%, 0.07) 0px, transparent 50%),
      radial-gradient(at 0% 0%, hsla(248, 100%, 78%, 0.07) 0px, transparent 50%);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    cursor: default;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  html, body {
    cursor: default;
  }
  
  a, button, input, textarea, select, label {
    cursor: pointer;
  }
  
  @media (max-width: 768px) {
    html, body, a, button, input, textarea, select, label {
      cursor: auto;
    }
    
    body {
      cursor: auto;
    }
  }

  @font-face {
    font-family: 'Fira Code';
    font-display: swap;
  }

  @font-face {
    font-family: 'JetBrains Mono';
    font-display: swap;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: 2.2rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  h5, h6 {
    font-size: 1rem;
  }

  p, li, a, button, input, textarea {
    font-family: 'Inter', sans-serif;
  }

  code, pre, .terminal-text {
    font-family: 'Fira Code', 'JetBrains Mono', monospace;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.mantle};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.surface1};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.surface2};
  }

  .theme-toggle-btn {
    will-change: transform, background-color, box-shadow;
    transform: translateZ(0);
  }
  
  .theme-toggle-btn.animating {
    animation: pulse 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7);
    }
    70% {
      box-shadow: 0 0 0 15px rgba(56, 189, 248, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(56, 189, 248, 0);
    }
  }
  
  * {
    transition-property: background-color, border-color, color, fill, stroke;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
  }
  
  .mainContent {
    will-change: transform;
    transform: translateZ(0);
    backface-visibility: hidden;
  }
  
  .fadeIn, .animated {
    will-change: opacity, transform;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  min-height: 100vh;
  gap: 2rem;
  padding: 2rem;
  will-change: transform;
  transform: translateZ(0);

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
    gap: 2rem;
  }
`;

export const Sidebar = styled.div`
  background-color: ${({ theme }) => theme.glass.background};
  border: ${({ theme }) => theme.glass.border};
  box-shadow: ${({ theme }) => theme.glass.boxShadow};
  border-radius: 18px;
  padding: 2.5rem;
  position: sticky;
  top: 2rem;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: auto;
  transition: background-color 0.2s ease, border 0.2s ease, box-shadow 0.2s ease;
  will-change: transform;
  transform: translateZ(0);
  
  @media (min-width: 1024px) {
    backdrop-filter: ${({ theme }) => theme.glass.backdropFilter};
    -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdropFilter};
  }

  @media (max-width: 992px) {
    position: relative;
    height: auto;
    padding: 2rem 1.5rem;
    top: 0;
  }
  
  @media (max-width: 576px) {
    padding: 1.8rem 1.2rem;
    border-radius: 14px;
  }
`;

export const SidebarContent = styled.div`
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeIn} 0.8s ease forwards;
  will-change: opacity, transform;
`;

export const MainContent = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 900px;
  will-change: transform;
  transform: translateZ(0);

  @media (max-width: 992px) {
    padding: 1.5rem 0;
  }
  
  @media (max-width: 576px) {
    gap: 2rem;
  }
`;

export const ProfilePic = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.surface0};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 1.8rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 0 0 4px ${({ theme }) => theme.blue}, 
              0 0 20px rgba(56, 189, 248, 0.5);
  animation: ${float} 6s ease-in-out infinite;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 0 4px ${({ theme }) => theme.sky}, 
                0 0 25px rgba(56, 189, 248, 0.6);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const UserName = styled.h1`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  
  .highlight {
    color: ${({ theme }) => theme.blue};
  }
  
  background: linear-gradient(135deg, ${({ theme }) => theme.blue} 0%, ${({ theme }) => theme.mauve} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

export const UserLocation = styled.p`
  color: ${({ theme }) => theme.subtext0};
  margin-bottom: 1.5rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.blue};
  }
`;

export const TerminalHeader = styled.div`
  font-family: 'JetBrains Mono', monospace;
  color: ${({ theme }) => theme.mauve};
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

export const TerminalUser = styled.span`
  color: ${({ theme }) => theme.green};
`;

export const TerminalPath = styled.span`
  color: ${({ theme }) => theme.blue};
`;

export const DistroIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin: 1rem 0;
  flex-wrap: wrap;
  
  @media (max-width: 576px) {
    gap: 0.5rem;
  }
`;

export const Distro = styled.span`
  font-size: 0.85rem;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.surface0};
  color: ${({ theme }) => theme.subtext0};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background-color: ${({ theme }) => theme.blue};
    color: #fff;
  }
  
  @media (max-width: 576px) {
    font-size: 0.75rem;
    padding: 0.4rem 0.6rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 576px) {
    gap: 0.8rem;
    margin-top: 1.2rem;
  }
`;

export const SocialLink = styled.a<{ delay?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.surface0};
  color: ${({ theme }) => theme.subtext0};
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(10px);
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${({ delay }) => delay || 0}ms;
  
  @media (max-width: 576px) {
    width: 35px;
    height: 35px;
    border-radius: 8px;
    
    svg {
      transform: scale(0.9);
    }
  }

  &:hover {
    transform: translateY(-3px) rotate(5deg);
    background-color: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.base};
    box-shadow: 0 5px 15px rgba(56, 189, 248, 0.4);
  }
`;

export const ThemeToggle = styled.button<{ isDark?: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: ${({ theme, isDark }) => 
    isDark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.8)'};
  box-shadow: ${({ theme }) => theme.glass.boxShadow};
  border: ${({ theme }) => theme.glass.border};
  color: ${({ theme }) => theme.blue};
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), 
              background-color 0.4s ease, 
              box-shadow 0.3s ease;
  z-index: 1001;
  overflow: hidden;
  
  @media (min-width: 1024px) {
    backdrop-filter: ${({ theme }) => theme.glass.backdropFilter};
    -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdropFilter};
  }
  
  &:hover {
    transform: scale(1.08);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: scale(0.92);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: radial-gradient(circle at center, 
                 ${({ theme }) => theme.blue}22 0%, 
                 transparent 70%);
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.4s ease, transform 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
    transform: scale(1.5);
  }
`;

export const ThemeToggleIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.blue} 0%, ${({ theme }) => theme.mauve} 100%);
  color: ${({ theme }) => theme.base};
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  svg {
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.2));
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), 
                opacity 0.3s ease;
  }
  
  &:hover svg {
    transform: rotate(360deg) scale(1.1);
  }
`;

export const Section = styled.section<{ visible: boolean }>`
  margin-bottom: 4rem;
  opacity: ${({ visible }) => (visible ? 1 : 0.3)};
  transform: translateY(${({ visible }) => (visible ? 0 : '20px')});
  transition: opacity 0.5s ease, transform 0.5s ease;
  scroll-margin-top: 2rem;
  will-change: opacity, transform;
  
  @media (max-width: 576px) {
    margin-bottom: 3rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.8rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
  
  .highlight {
    color: ${({ theme }) => theme.blue};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(to right, ${({ theme }) => theme.blue}, ${({ theme }) => theme.mauve});
    border-radius: 2px;
  }
  
  @media (max-width: 576px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
    gap: 0.8rem;
  }
`;

export const SectionIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.surface0};
  color: ${({ theme }) => theme.blue};
  
  @media (max-width: 576px) {
    width: 32px;
    height: 32px;
    
    svg {
      transform: scale(0.9);
    }
  }
`;

export const SectionContent = styled.p`
  color: ${({ theme }) => theme.subtext0};
  margin-bottom: 1rem;
  line-height: 1.8;
  font-size: 0.95rem;
  font-style: normal;
  font-weight: 500;
  
  @media (max-width: 576px) {
    font-size: 0.85rem;
    line-height: 1.7;
  }
`;

export const TerminalContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);
  background-color: ${({ theme }) => theme.glass.background};
  border: ${({ theme }) => theme.glass.border};
  box-shadow: ${({ theme }) => theme.glass.boxShadow};
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeIn} 0.5s ease forwards;
  will-change: transform, opacity;
  
  @media (min-width: 1024px) {
    backdrop-filter: ${({ theme }) => theme.glass.backdropFilter};
    -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdropFilter};
  }
`;

export const TerminalHeaderBar = styled.div`
  padding: 0.8rem 1rem;
  background-color: ${({ theme }) => theme.mantle};
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  
  @media (max-width: 576px) {
    padding: 0.6rem 0.8rem;
  }
`;

export const TerminalButtons = styled.div`
  display: flex;
  gap: 8px;
  z-index: 2;
`;

export const TerminalBtn = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ color, theme }) => 
    color === 'close' 
      ? theme.maroon 
      : color === 'minimize' 
      ? theme.yellow 
      : theme.green};
  transition: all 0.2s ease;
  
  &:hover {
    filter: brightness(0.9);
    transform: scale(1.1);
  }
`;

export const TerminalTitle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  opacity: 0.7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 576px) {
    font-size: 0.7rem;
    left: 75px;
    right: 20px;
    margin-left: 0;
    text-align: left;
    width: auto;
    max-width: calc(100% - 100px);
  }
`;

export const TerminalContent = styled.div`
  padding: 1rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  max-height: 400px;
  overflow-y: auto;
  color: ${({ theme }) => theme.text};
  
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.surface1};
    border-radius: 3px;
  }
`;

export const TerminalLine = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.green};
  
  &:before {
    content: '$ ';
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.blue};
  }
`;

export const TerminalText = styled.div`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
`;

export const TerminalCursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 17px;
  background-color: ${({ theme }) => theme.blue};
  margin-left: 2px;
  animation: ${blink} 1s step-end infinite;
  vertical-align: middle;
`;

export const Timeline = styled.div`
  position: relative;
  margin: 1.5rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 5px;
    height: calc(100% - 10px);
    width: 2px;
    background-color: ${({ theme }) => theme.surface1};
  }
  
  @media (max-width: 576px) {
    margin: 1rem 0;
  }
`;

export const TimelineItem = styled.div`
  padding-left: 25px;
  position: relative;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    left: -4px;
    top: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.lavender};
  }

  &:hover {
    transform: translateX(5px);
  }
  
  @media (max-width: 576px) {
    padding-left: 20px;
    margin-bottom: 1.2rem;
  }
`;

export const TimelineTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  margin-bottom: 0.3rem;
`;

export const TimelineDate = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.sapphire};
  margin-bottom: 0.5rem;
  display: block;
`;

export const TerminalCmd = styled.span`
  display: block;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.blue};
  margin-bottom: 0.3rem;
  padding: 0.3rem 0.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    margin-top: 1rem;
  }
`;

export const SkillCard = styled.div`
  background-color: ${({ theme }) => theme.surface0};
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border-left: 3px solid ${({ theme }) => theme.lavender};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const SkillName = styled.div`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.sapphire};
  }
`;

export const SkillBar = styled.div`
  height: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
`;

export const SkillProgress = styled.div<{ progress: number; visible?: boolean }>`
  height: 100%;
  background: linear-gradient(to right, ${({ theme }) => theme.blue}, ${({ theme }) => theme.lavender});
  transition: width 1s ease-in-out;
  width: ${({ progress, visible }) => (visible ? `${progress}%` : '0')};
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.surface0};
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border-top: 3px solid ${({ theme }) => theme.lavender};
  border-bottom: 1px solid ${({ theme }) => theme.surface1};
  border-left: 1px solid ${({ theme }) => theme.surface1};
  border-right: 1px solid ${({ theme }) => theme.surface1};
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 576px) {
    padding: 1.2rem;
  }
`;

export const ProjectIcon = styled.div`
  background-color: rgba(137, 180, 250, 0.2);
  padding: 0.8rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.lavender};
  text-align: center;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ProjectDetails = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.subtext0};
  font-size: 0.85rem;
  margin-bottom: 1rem;
  flex: 1;
`;

export const ProjectLink = styled.a`
  background-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.mantle};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-align: center;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${({ theme }) => theme.lavender};
    transform: translateY(-2px);
    color: ${({ theme }) => theme.crust};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const ContactForm = styled.form`
  background-color: ${({ theme }) => theme.surface0};
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1.5rem;
  border: 1px solid ${({ theme }) => theme.surface1};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 576px) {
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  
  @media (max-width: 576px) {
    margin-bottom: 0.8rem;
  }
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 576px) {
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.9rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.surface1};
  background-color: ${({ theme }) => theme.mantle};
  color: ${({ theme }) => theme.text};
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.blue};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.blue}44;
  }
  
  @media (max-width: 576px) {
    padding: 0.7rem;
    font-size: 0.85rem;
  }
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 0.9rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.surface1};
  background-color: ${({ theme }) => theme.mantle};
  color: ${({ theme }) => theme.text};
  font-family: 'Inter', sans-serif;
  min-height: 140px;
  resize: vertical;
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.blue};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.blue}44;
  }
  
  @media (max-width: 576px) {
    padding: 0.7rem; 
    min-height: 120px;
    font-size: 0.85rem;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.crust};
  border: none;
  padding: 0.9rem 1.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: ${({ theme }) => theme.lavender};
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.35);
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.overlay0};
    color: ${({ theme }) => theme.overlay2};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  @media (max-width: 576px) {
    padding: 0.8rem 1.5rem;
    width: 100%;
    font-size: 0.9rem;
  }
`;

export const EmailContact = styled.p`
  margin: 1.5rem 0;
  text-align: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.backdropFilter};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdropFilter};
  border-radius: 16px;
  word-break: break-word;
  border: ${({ theme }) => theme.glass.border};
  box-shadow: ${({ theme }) => theme.glass.boxShadow};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  a {
    position: relative;
    display: inline-block;
    color: ${({ theme }) => theme.blue};
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 0.3rem 0.8rem;
    margin-left: 0.5rem;
    border-radius: 8px;
    background: rgba(56, 189, 248, 0.15);
  }
  
  @media (max-width: 576px) {
    padding: 1.2rem;
    font-size: 0.9rem;
    margin: 1rem 0;
  }
`;

export const SuccessNotification = styled.div<{ show: boolean }>`
  background-color: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.crust};
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  text-align: center;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-20px)')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: all 0.4s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  svg {
    font-size: 1.2rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

export const Footer = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  width: 100%;
  position: relative;
  z-index: 10;
`;

export const CopyrightSection = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.8rem;
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.backdropFilter};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdropFilter};
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  border: ${({ theme }) => theme.glass.border};
  box-shadow: ${({ theme }) => theme.glass.boxShadow};
  transition: all 0.3s ease;
  
  p {
    font-weight: 500;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .footer-logo {
    height: 24px;
    width: 24px;
    border-radius: 50%;
    margin-right: 0.5rem;
    object-fit: cover;
    border: 1px solid rgba(56, 189, 248, 0.3);
    box-shadow: 0 0 8px rgba(56, 189, 248, 0.3);
  }
  
  @media (max-width: 576px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.85rem;
    
    .footer-logo {
      height: 20px;
      width: 20px;
    }
  }
`;

export const FooterTerminalPrompt = styled.span`
  color: ${({ theme }) => theme.blue};
  font-family: 'Fira Code', monospace;
  animation: ${blink} 1s infinite;
  background: rgba(56, 189, 248, 0.15);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  margin-left: 0.5rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(56, 189, 248, 0.2);
`;

export const ScrollTop = styled.div<{ show: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.crust};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(20px)')};
  transition: all 0.3s ease;
  z-index: 1000;
  animation: ${pulse} 2s infinite;

  &:hover {
    background-color: ${({ theme }) => theme.lavender};
    transform: scale(1.1);
    animation: none;
  }
`;

export const ProgressBar = styled.div<{ progress: number }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  will-change: transform;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, ${({ theme }) => theme.blue}, ${({ theme }) => theme.lavender});
    transform: translateX(${({ progress }) => `${progress - 100}%`});
    transition: transform 0.01s linear;
  }
`;

export const GlowingOrb = styled.div<{ position: string; color: string }>`
  position: fixed;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  z-index: -1;
  opacity: 0.25;
  
  ${({ position, theme, color }) => {
    const colors = {
      blue: theme.blue,
      purple: theme.mauve,
      teal: theme.teal,
      green: theme.green,
      pink: theme.pink
    };
    
    const positions = {
      'top-right': 'top: -70px; right: -70px;',
      'top-left': 'top: -70px; left: -70px;',
      'bottom-right': 'bottom: -70px; right: -70px;',
      'bottom-left': 'bottom: -70px; left: -70px;',
      'center-right': 'top: 45%; right: -120px;'
    };
    
    return `
      background: radial-gradient(circle, ${colors[color as keyof typeof colors]} 0%, transparent 70%);
      ${positions[position as keyof typeof positions]}
    `;
  }}
`;

export const ProfileBio = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.subtext0};
  margin: 1rem 0;
  max-width: 300px;
  text-align: center;
  font-style: normal;
`;

export const ProfileBadge = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.green};
  border: 2px solid ${({ theme }) => theme.base};
  box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};
`;

export const CursorFollower = styled.div`
  position: fixed;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: radial-gradient(circle at center, 
               ${({ theme }) => theme.blue}10 0%,
               transparent 70%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: opacity 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out;
  z-index: 9998;
  box-shadow: 0 0 10px 1px ${({ theme }) => theme.blue}10;
  border: 1px solid ${({ theme }) => theme.blue}15;
  mix-blend-mode: screen;
  will-change: transform, width, height, opacity;
  opacity: 0.5;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background: inherit;
    transform: translate(-50%, -50%) scale(0.7);
    opacity: 0.4;
    z-index: -1;
    transition: all 0.4s ease;
  }
  
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 2px;
    background-color: ${({ theme }) => theme.blue}77;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 4px 1px ${({ theme }) => theme.blue}33;
  }
  
  &.active {
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    background: radial-gradient(circle at center, 
                ${({ theme }) => theme.lavender}15 0%,
                ${({ theme }) => theme.blue}08 50%,
                transparent 70%);
    border: 1px solid ${({ theme }) => theme.lavender}22;
    opacity: 0.7;
    
    &::before {
      transform: translate(-50%, -50%) scale(0.75);
      opacity: 0.25;
    }
    
    &::after {
      background-color: ${({ theme }) => theme.lavender}99;
      box-shadow: 0 0 6px 1px ${({ theme }) => theme.lavender}44;
    }
  }
  
  &.clicking {
    background: radial-gradient(circle at center, 
                ${({ theme }) => theme.sapphire}33 0%, 
                ${({ theme }) => theme.blue}15 60%,
                transparent 100%);
    backdrop-filter: blur(0.5px);
    -webkit-backdrop-filter: blur(0.5px);
    opacity: 0.8;
    
    &::before {
      transform: translate(-50%, -50%) scale(0.4);
      opacity: 0.6;
      transition: all 0.08s ease;
    }
    
    &::after {
      background-color: ${({ theme }) => theme.sapphire};
      width: 1.5px;
      height: 1.5px;
    }
  }
  
  &.theme-toggle-hover {
    mix-blend-mode: normal;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    opacity: 0.8;
    
    &::before {
      transform: translate(-50%, -50%) scale(1.1);
      opacity: 0.15;
      background: radial-gradient(circle at center, 
                  ${({ theme }) => theme.yellow}15 0%,
                  transparent 70%);
    }
    
    &::after {
      width: 5px;
      height: 5px;
      background: linear-gradient(135deg, ${({ theme }) => theme.yellow}, ${({ theme }) => theme.blue});
      box-shadow: 0 0 10px 2px ${({ theme }) => theme.blue}55;
      animation: rotate 2s linear infinite;
    }
    
    
    @keyframes rotate {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.blue}33;
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-weight: inherit;
`; 
