import React from 'react';
import { SideBar } from './components/SideBar';
import { Routes } from './routes';
import GlobalStyle, { Container, Content } from './styles/global';

export const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <SideBar />
      <Content>
        <Routes />
      </Content>
    </Container>
  );
};

export default App;
