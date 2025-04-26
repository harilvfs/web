import React, { useEffect, useState } from 'react';
import {
  TerminalContainer,
  TerminalHeaderBar,
  TerminalButtons,
  TerminalBtn,
  TerminalTitle,
  TerminalContent,
  TerminalLine,
  TerminalText,
  TerminalCursor,
} from './styled';

interface TerminalProps {
  title: string;
  children?: React.ReactNode;
  commands?: { command: string; text: string }[];
  delay?: number;
}

const Terminal: React.FC<TerminalProps> = ({ title, children, commands, delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  const [typedCommands, setTypedCommands] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (visible && commands) {
      const timers: NodeJS.Timeout[] = [];
      
      commands.forEach((_, index) => {
        const timer = setTimeout(() => {
          setTypedCommands(prev => [...prev, index]);
        }, 500 + (index * 800));
        
        timers.push(timer);
      });
      
      return () => timers.forEach(timer => clearTimeout(timer));
    }
  }, [visible, commands]);

  if (!visible) return null;

  return (
    <TerminalContainer>
      <TerminalHeaderBar>
        <TerminalButtons>
          <TerminalBtn color="close" />
          <TerminalBtn color="minimize" />
          <TerminalBtn color="maximize" />
        </TerminalButtons>
        <TerminalTitle>{title}</TerminalTitle>
      </TerminalHeaderBar>
      <TerminalContent>
        {commands ? (
          commands.map((cmd, index) => (
            <React.Fragment key={index}>
              {typedCommands.includes(index) ? (
                <>
                  <TerminalLine>{cmd.command}</TerminalLine>
                  <TerminalText>{cmd.text}</TerminalText>
                </>
              ) : (
                typedCommands.length === index ? (
                  <TerminalLine>
                    {cmd.command.slice(0, Math.floor(Date.now() / 100) % (cmd.command.length + 1))}
                    <TerminalCursor />
                  </TerminalLine>
                ) : null
              )}
            </React.Fragment>
          ))
        ) : (
          children
        )}
      </TerminalContent>
    </TerminalContainer>
  );
};

export default Terminal; 