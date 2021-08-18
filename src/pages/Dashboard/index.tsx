import React from 'react';
import { Login } from '../../components/Login';
import { PageContent } from '../../components/PageContent';
import { Container } from './styles';

export const Dashboard: React.FC = () => {
  const user = true;

  return (
    <PageContent>
      <Container>{user ? <h1> dashboard</h1> : <Login />}</Container>
    </PageContent>
  );
};
