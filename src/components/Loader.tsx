import React from 'react';
import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: ${props => props.theme.blue}; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const LoaderContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.base};
  z-index: 1000;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
  animation: ${props => (props.isVisible ? fadeIn : fadeOut)} 0.5s ease-out;
`;

const TerminalContainer = styled.div`
  background-color: ${props => props.theme.mantle};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 80%;
  max-width: 600px;
  
  @media (max-width: 576px) {
    width: 90%;
    padding: 15px;
  }
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const TerminalButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  
  &:nth-child(1) {
    background-color: #ff5f56;
  }
  
  &:nth-child(2) {
    background-color: #ffbd2e;
  }
  
  &:nth-child(3) {
    background-color: #27c93f;
  }
  
  @media (max-width: 576px) {
    width: 10px;
    height: 10px;
    margin-right: 6px;
  }
`;

const TerminalBody = styled.div`
  font-family: "Courier New", monospace;
  color: ${props => props.theme.text};
  
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const TypewriterText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin: 10px 0;
  letter-spacing: 0.15em;
  border-right: 3px solid transparent;
  animation: 
    ${typing} 2s steps(40, end),
    ${blinkCaret} 0.75s step-end infinite;
    
  @media (max-width: 768px) {
    letter-spacing: 0.1em;
    font-size: 14px;
  }
  
  @media (max-width: 576px) {
    white-space: normal;
    animation: ${blinkCaret} 0.75s step-end infinite;
    border-right: 2px solid transparent;
    letter-spacing: 0.05em;
    font-size: 13px;
    line-height: 1.4;
    margin: 8px 0;
  }
`;

const Spinner = styled.div`
  margin: 30px auto;
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: ${props => props.theme.blue};
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  @media (max-width: 576px) {
    margin: 20px auto;
    width: 30px;
    height: 30px;
    border-width: 3px;
  }
`;

interface LoaderProps {
  isVisible: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isVisible }) => {
  return (
    <LoaderContainer isVisible={isVisible}>
      <TerminalContainer>
        <TerminalHeader>
          <TerminalButton />
          <TerminalButton />
          <TerminalButton />
        </TerminalHeader>
        <TerminalBody>
          <TypewriterText>$ Initializing system...</TypewriterText>
          <TypewriterText style={{ animationDelay: '2s' }}>$ Loading portfolio assets...</TypewriterText>
          <TypewriterText style={{ animationDelay: '4s' }}>$ Preparing terminal environment...</TypewriterText>
          <Spinner />
        </TerminalBody>
      </TerminalContainer>
    </LoaderContainer>
  );
};

export default Loader; 