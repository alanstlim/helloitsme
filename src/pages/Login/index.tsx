import React from 'react';
import { Button } from '../../components/Button';
import { PageContent } from '../../components/PageContent';
import { Container, FormContent, Title } from './styles';

export const Login: React.FC = () => {
  return (
    <PageContent>
      <Container>
        <FormContent>
          <Title>Hello It&apos;s Me</Title>
          <div>
            <h1>- Dashboard -</h1>
            <input placeholder="Email" />
            <input placeholder="Password" type="password" />
          </div>
          <Button>
            <h3>Login</h3>
          </Button>
        </FormContent>
      </Container>
    </PageContent>
  );
};
