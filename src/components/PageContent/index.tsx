import React, { ReactNode } from 'react';
import { FaReact } from 'react-icons/fa';
import { BackgroundContent, Container } from './styles';

type PageContent = {
  children: ReactNode;
};

export const PageContent: React.FC<PageContent> = ({ children }) => {
  return (
    <Container>
      {children}
      <BackgroundContent>
        <FaReact />
      </BackgroundContent>
    </Container>
  );
};
