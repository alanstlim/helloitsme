import React from 'react';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Portfolio } from './pages/Portfolio';
import GlobalStyle, { Container, Content } from './styles/global';

export const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <SideBar />
      <Content>
        <Header />
        <Portfolio />
      </Content>
    </Container>
  );
};

export default App;
