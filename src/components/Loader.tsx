import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideOut = keyframes`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-100%); opacity: 0; }
`;

const spinnerAnimation = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0.15; }
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
  transition: opacity 0.5s ease-out;
  animation: ${props => (props.isVisible ? fadeIn : slideOut)} 0.5s ease-out;
  animation-fill-mode: forwards;
`;

const Message = styled.h1`
  font-size: 2.2rem;
  color: ${props => props.theme.text};
  margin-bottom: 35px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Spinner = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
`;

const Spoke = styled.div<{ rotation: number; delay: number }>`
  position: absolute;
  left: 45.5%;
  top: 15%;
  width: 7%;
  height: 30%;
  background-color: ${props => props.theme.subtext0};
  border-radius: 50px;
  transform-origin: 50% 150%;
  transform: rotate(${({ rotation }) => rotation}deg);
  animation: ${spinnerAnimation} 1s linear infinite;
  animation-delay: ${({ delay }) => `${delay}s`};
`;

interface LoaderProps {
  isVisible: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isVisible }) => {
  const spokes = Array.from({ length: 12 }, (_, i) => (
    <Spoke key={i} rotation={i * 30} delay={-1 + i * (1 / 12)} />
  ));

  return (
    <LoaderContainer isVisible={isVisible}>
      <Message>
        <span>Hey</span>
        <span>👋</span>
      </Message>
      <Spinner>{spokes}</Spinner>
    </LoaderContainer>
  );
};

export default Loader;
 