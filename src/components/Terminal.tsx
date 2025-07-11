import React, { useEffect, useState, useRef } from 'react';
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
  const [typedCommands, setTypedCommands] = useState<{ command: string; text: string }[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (visible && commands && currentCommandIndex < commands.length) {
      setIsTyping(true);
      setTypedText('');

      let i = 0;
      const commandToType = commands[currentCommandIndex].command;
      const type = () => {
        if (i < commandToType.length) {
          setTypedText(commandToType.substring(0, i + 1));
          i++;
          animationFrameRef.current = requestAnimationFrame(type);
        } else {
          setIsTyping(false);
          setTypedCommands(prev => [...prev, commands[currentCommandIndex]]);
          setCurrentCommandIndex(prev => prev + 1);
        }
      };
      animationFrameRef.current = requestAnimationFrame(type);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [visible, commands, currentCommandIndex]);

  if (!visible) return null;

  const sanitizeHTML = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.innerHTML;
  };

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
          <>
            {typedCommands.map((cmd, index) => (
              <React.Fragment key={index}>
                <TerminalLine>{cmd.command}</TerminalLine>
                <TerminalText dangerouslySetInnerHTML={{ __html: sanitizeHTML(cmd.text) }} />
              </React.Fragment>
            ))}
            {isTyping && (
              <TerminalLine>
                {typedText}
                <TerminalCursor />
              </TerminalLine>
            )}
          </>
        ) : (
          children
        )}
      </TerminalContent>
    </TerminalContainer>
  );
};

export default Terminal; 