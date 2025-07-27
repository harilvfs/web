import React from 'react';
import {
  TerminalContainer,
  TerminalHeaderBar,
  TerminalButtons,
  TerminalBtn,
  TerminalTitle,
  TerminalContent,
  TerminalLine,
  TerminalText,
} from './styled';

interface TerminalProps {
  title: string;
  children?: React.ReactNode;
  commands?: { command: string; text: string }[];
}

const Terminal: React.FC<TerminalProps> = ({ title, children, commands }) => {
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
            {commands.map((cmd, index) => (
              <React.Fragment key={index}>
                <TerminalLine>{cmd.command}</TerminalLine>
                <TerminalText dangerouslySetInnerHTML={{ __html: sanitizeHTML(cmd.text) }} />
              </React.Fragment>
            ))}
          </>
        ) : (
          children
        )}
      </TerminalContent>
    </TerminalContainer>
  );
};

export default Terminal; 