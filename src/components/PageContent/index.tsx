import React, { ReactNode } from 'react';
import { FaReact } from 'react-icons/fa';
import { BackgroundContent, Container, Content } from './styles';

type PageContent = {
  children: ReactNode;
};

export const PageContent: React.FC<PageContent> = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
      <BackgroundContent>
        <FaReact />
      </BackgroundContent>
    </Container>
  );
};
